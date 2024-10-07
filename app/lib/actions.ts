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
import { customAlphabet } from 'nanoid';
import { z } from 'zod';

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
	const parseResult = urlSchema.safeParse({ url: url.trim() });
	console.log({ parseResult });
	if (!parseResult.success) {
		return {
			status: ACTION_FAILED,
			reason: INVALID_URL,
		};
	}

	try {
		const result = await prisma.shortUrl.create({
			data: {
				originalUrl: parseResult.data.url.trim(),
				shortCode: nanoid(6),
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
