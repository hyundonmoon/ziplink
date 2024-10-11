'use server';

import {
	ACTION_FAILED,
	ACTION_SUCCESS,
	INVALID_URL,
	NANO_ID_ALPHABET,
	UNKNOWN_ERROR,
} from '@/app/lib/constants';
import { ShortUrlResponse } from '@/app/lib/models';
import prisma from '@/app/lib/prisma';
import { auth, signIn as authSignIn, signOut as authSignOut } from '@/auth';
import { customAlphabet } from 'nanoid';
import { notFound, permanentRedirect } from 'next/navigation';
import { z } from 'zod';
import { normalizeUrl } from './utils';

// zod url validation sucks, so we'll use a regex instead for now
// TODO: check back on zod's url validation in the future
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

const nanoid = customAlphabet(NANO_ID_ALPHABET, 10);

export async function createShortUrl(
	_prevState: unknown,
	url: string
): Promise<ShortUrlResponse> {
	const session = await auth();
	const parseResult = urlSchema.safeParse({ url: url.trim() });

	if (!parseResult.success) {
		return {
			status: ACTION_FAILED,
			reason: INVALID_URL,
		};
	}

	try {
		const normalizedUrl = normalizeUrl(parseResult.data.url.trim());
		const result = await prisma.shortUrl.create({
			data: {
				originalUrl: normalizedUrl.href,
				shortCode: nanoid(6),
				User: {
					connect: {
						id: session?.userId,
					},
				},
			},
		});

		return {
			status: ACTION_SUCCESS,
			data: {
				shortCode: result.shortCode,
				originalUrl: result.originalUrl,
			},
		};
	} catch (_error) {
		return {
			status: ACTION_FAILED,
			reason: UNKNOWN_ERROR,
		};
	}
}

export async function queryShortUrl(_prevState: unknown, shortCode: string) {
	const result = await prisma.shortUrl.findUnique({
		where: {
			shortCode,
		},
	});

	if (!result) {
		notFound();
	}

	permanentRedirect(result.originalUrl);
}

export async function signIn() {
	await authSignIn();
}

export async function signOut() {
	await authSignOut();
}
