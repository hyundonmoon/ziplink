import MyLinks from '@/app/(main)/my-links/_components/MyLinks';
import MyLinksSkeleton from '@/app/(main)/my-links/_components/MyLinksSkeleton';
import { auth } from '@/auth';
import Link from 'next/link';
import { Suspense } from 'react';

export default async function MyLinksPage() {
	const session = await auth();
	const signInLink = `/auth/signin?callbackUrl=${encodeURIComponent(
		'/my-links'
	)}`;

	return (
		<div>
			{session?.userId ? (
				<Suspense fallback={<MyLinksSkeleton />}>
					<MyLinks userId={session.userId} />
				</Suspense>
			) : (
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
			)}
		</div>
	);
}
