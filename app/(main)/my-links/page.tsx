import MyLinks from '@/app/(main)/my-links/_components/MyLinks';
import { auth } from '@/auth';
import { getLinks } from '@/features/link/utils';
import {
	dehydrate,
	HydrationBoundary,
	QueryClient,
} from '@tanstack/react-query';
import Link from 'next/link';

export default async function MyLinksPage() {
	const queryClient = new QueryClient();
	const session = await auth();
	const signInLink = `/auth/signin?callbackUrl=${encodeURIComponent(
		'/my-links'
	)}`;

	if (!session?.userId) {
		return (
			<div className="text-center py-16">
				<p>
					<Link
						href={signInLink}
						className="hover:border-b border-current"
					>
						Sign in
					</Link>{' '}
					to view your links
				</p>
			</div>
		);
	}

	const { userId } = session;

	await queryClient.prefetchQuery({
		queryKey: ['links', userId],
		queryFn: async () => getLinks(userId),
	});

	return (
		<div>
			<HydrationBoundary state={dehydrate(queryClient)}>
				<MyLinks userId={session.userId} />
			</HydrationBoundary>
		</div>
	);
}
