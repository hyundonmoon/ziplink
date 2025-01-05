import { getUserLinks } from '@/features/link/actions';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (request: NextRequest) => {
	const searchParams = request.nextUrl.searchParams;
	const userId = searchParams.get('userId');
	if (!userId) {
		return new Response('User ID missing', { status: 400 });
	}

	const links = await getUserLinks(userId);
	return NextResponse.json(links);
};
