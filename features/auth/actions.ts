'use server';

import prisma from '@/app/lib/prisma';
import { auth, signOut as authSignOut } from '@/auth';
import {
	USER_NOT_AUTHENTICATED,
	USER_NOT_AUTHENTICATED_MESSAGE,
} from '@/features/auth/constants';
import {
	ACTION_FAILED,
	ACTION_SUCCESS,
	UNKNOWN_ERROR,
	UNKNOWN_ERROR_MESSAGE,
} from '@/features/shared/constants';
import { ActionResult } from '@/features/shared/models';
import { User } from '@prisma/client';

export async function deleteUser(): Promise<ActionResult<Pick<User, 'id'>>> {
	const session = await auth();

	if (!session) {
		return {
			status: ACTION_FAILED,
			reason: USER_NOT_AUTHENTICATED,
			message: USER_NOT_AUTHENTICATED_MESSAGE,
		};
	}

	try {
		const result = await prisma.user.delete({
			where: {
				id: session.userId,
			},
			select: {
				id: true,
			},
		});

		return {
			status: ACTION_SUCCESS,
			data: result,
		};
	} catch (_) {
		return {
			status: ACTION_FAILED,
			reason: UNKNOWN_ERROR,
			message: UNKNOWN_ERROR_MESSAGE,
		};
	}
}

export async function signOut() {
	await authSignOut({ redirectTo: '/' });
}
