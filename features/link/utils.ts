import {
	ACTION_FAILED,
	ACTION_SUCCESS,
	CLOUDFLARE_TOKEN_CHECK_URL,
	INVALID_URL,
	NANO_ID_ALPHABET,
	TOKEN_ERROR_MESSAGES,
} from '@/features/link/constants';
import { TokenCheckResult } from '@/features/link/models';
import { Prisma } from '@prisma/client';
import { customAlphabet } from 'nanoid';
import { URL } from 'url';
import { z } from 'zod';

const urlSchema = z.object({
	url: z.string().refine(
		(url) => {
			const urlPattern = new RegExp(
				'^(https?:\\/\\/)?' + // Optional http or https
					'([a-zA-Z0-9.-]+\\.[a-zA-Z]{2,6})' + // Domain name with a valid TLD
					'(\\b([-a-zA-Z0-9@:%_\\+.~#?&//=]*)?)?$' // Optional path or query string
			);
			return urlPattern.test(url);
		},
		{ message: INVALID_URL }
	),
});

export function parseUrl(url: string = ''): string {
	const parsed = urlSchema.safeParse({ url: url.trim() });
	return parsed.success ? parsed.data.url : '';
}

export function getShortUrlArgs(
	url: string,
	userId?: string
): Prisma.ShortUrlCreateArgs {
	const nanoid = customAlphabet(NANO_ID_ALPHABET, 10);
	const args: Prisma.ShortUrlCreateArgs = {
		data: {
			originalUrl: url,
			shortCode: nanoid(6),
		},
	};

	if (userId) {
		args.data.User = {
			connect: {
				id: userId,
			},
		};
	}

	return args;
}

export const normalizeUrl = (url: string) => {
	try {
		return new URL(url);
	} catch (_) {
		return new URL(`https://${url}`);
	}
};

export const checkCloudflareToken = async (
	token: string
): Promise<TokenCheckResult> => {
	try {
		const res = await fetch(CLOUDFLARE_TOKEN_CHECK_URL, {
			method: 'POST',
			body: new URLSearchParams({
				secret: process.env.TURNSTILE_SECRET_KEY || '',
				response: token,
			}),
		});

		const data = (await res.json()) as {
			success: boolean;
			'error-codes': (keyof typeof TOKEN_ERROR_MESSAGES)[];
		};

		if (!data.success) {
			return {
				status: ACTION_FAILED,
				reason: data['error-codes'][0],
			} as const;
		}

		return {
			status: ACTION_SUCCESS,
		} as const;
	} catch (_) {
		return {
			status: ACTION_FAILED,
			reason: 'unknown-error',
		} as const;
	}
};
