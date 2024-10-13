import MyLinks from '@/app/my-links/_components/MyLinks';
import Loading from '@/app/my-links/loading';
import { Suspense } from 'react';

export default function MyLinksPage() {
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
