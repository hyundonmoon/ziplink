import { auth } from '@/auth';
import { getUserLinks } from '@/features/link/actions';
import { NextResponse } from 'next/server';

export const GET = auth(async (request) => {
	const searchParams = request.nextUrl.searchParams;
	const userId = searchParams.get('userId');
	if (!userId) {
		return new Response('User ID missing', { status: 400 });
	}

	const links = await getUserLinks(userId);
	return NextResponse.json(links);
});
