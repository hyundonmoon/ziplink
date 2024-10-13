import MyLinks from '@/app/my-links/_components/MyLinks';
import Loading from '@/app/my-links/loading';
import { auth } from '@/auth';
import { Suspense } from 'react';

export default async function MyLinksPage() {
	const session = await auth();

	if (!session) {
		return <p>Sign in to view your links</p>;
	}

	return (
		<div>
			<h1 className="text-2xl font-bold mb-12 pb-4 border-b-4">
				Your links
			</h1>

			<Suspense fallback={<Loading />}>
				<MyLinks />
			</Suspense>
		</div>
	);
}
