'use server';

import prisma from '@/app/lib/prisma';
import { auth } from '@/auth';
import { revalidatePath } from 'next/cache';
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

export async function deleteAllUserLinks() {
	const session = await auth();

	if (!session) {
		throw new Error('User not authenticated');
	}

	await prisma.shortUrl.deleteMany({
		where: {
			userId: session.userId,
		},
	});

	revalidatePath('/my-links');
}
