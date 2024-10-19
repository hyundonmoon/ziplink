'use server';

import prisma from '@/app/lib/prisma';
import { auth, signIn as authSignIn, signOut as authSignOut } from '@/auth';
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

export async function signIn() {
	await authSignIn();
}

export async function signOut() {
	await authSignOut({ redirectTo: '/' });
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

export async function deleteUser() {
	const session = await auth();

	if (!session) {
		throw new Error('User not authenticated');
	}

	try {
		await prisma.user.delete({
			where: {
				id: session.userId,
			},
		});
	} catch (_) {
		throw new Error('Failed to delete user');
	}

	await signOut();
}
