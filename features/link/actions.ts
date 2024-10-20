'use server';

import prisma from '@/app/lib/prisma';
import { auth } from '@/auth';
import {
	INVALID_URL,
	INVALID_URL_MESSAGE,
	TOKEN_ERROR,
	TOKEN_ERROR_MESSAGES,
} from '@/features/link/constants';
import { UrlShortenActionResult } from '@/features/link/models';
import {
	checkCloudflareToken,
	getShortUrlArgs,
	normalizeUrl,
	parseUrl,
} from '@/features/link/utils';
import {
	ACTION_FAILED,
	ACTION_SUCCESS,
	UNKNOWN_ERROR,
	UNKNOWN_ERROR_MESSAGE,
} from '@/features/shared/constants';
import { revalidatePath } from 'next/cache';

export async function shortenUrl(
	_prevState: UrlShortenActionResult | null,
	formData: FormData
): Promise<UrlShortenActionResult> {
	const token = formData.get('cf-turnstile-response') as string;
	const tokenResult = await checkCloudflareToken(token);

	if (tokenResult.status === ACTION_FAILED) {
		return {
			status: ACTION_FAILED,
			reason: TOKEN_ERROR,
			message: TOKEN_ERROR_MESSAGES[tokenResult.reason],
		} as const;
	}

	const url = (formData.get('url') as string) || '';
	const parsedUrl = parseUrl(url);

	if (!parsedUrl) {
		return {
			status: ACTION_FAILED,
			reason: INVALID_URL,
			message: INVALID_URL_MESSAGE,
		} as const;
	}

	const session = await auth();
	const normalizedUrl = normalizeUrl(parsedUrl);
	return createShortUrl(normalizedUrl.href, session?.userId);
}

export async function createShortUrl(
	url: string,
	userId?: string
): Promise<UrlShortenActionResult> {
	try {
		const shortUrlArgs = getShortUrlArgs(url, userId);
		const result = await prisma.shortUrl.create(shortUrlArgs);
		revalidatePath('/my-links');

		return {
			status: ACTION_SUCCESS,
			data: {
				shortCode: result.shortCode,
				originalUrl: result.originalUrl,
			},
		} as const;
	} catch (_error) {
		return {
			status: ACTION_FAILED,
			reason: UNKNOWN_ERROR,
			message: UNKNOWN_ERROR_MESSAGE,
		} as const;
	}
}

export async function getUserLinks(userId: string) {
	try {
		const links = await prisma.shortUrl.findMany({
			where: {
				userId,
			},
			select: {
				originalUrl: true,
				shortCode: true,
				id: true,
			},
		});

		return links;
	} catch (_) {
		return [];
	}
}

export async function deleteUserLink(userId: string, id: number) {
	try {
		await prisma.shortUrl.delete({
			where: { id, userId },
		});
	} catch {}

	revalidatePath('/my-links');
}
