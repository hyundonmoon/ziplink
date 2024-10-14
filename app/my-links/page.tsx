import MyLinks from '@/app/my-links/_components/MyLinks';
import MyLinksSkeleton from '@/app/my-links/_components/MyLinksSkeleton';
import { auth } from '@/auth';
import { Suspense } from 'react';

export default async function MyLinksPage() {
	const session = await auth();

	return (
		<div>
			<h1 className="text-2xl font-bold mb-4 pb-4 border-b">
				Your links
			</h1>

			{session ? (
				<Suspense fallback={<MyLinksSkeleton />}>
					<MyLinks />
				</Suspense>
			) : (
				<div>
					<p>Sign in to view your links</p>
				</div>
			)}
		</div>
	);
}
