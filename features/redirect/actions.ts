'use server';

import prisma from '@/app/lib/prisma';
import { notFound, permanentRedirect } from 'next/navigation';

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
