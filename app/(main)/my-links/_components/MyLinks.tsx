import ShortUrlLink from '@/app/(main)/my-links/_components/ShortUrlLink';
import { getUserLinks } from '@/features/link/actions';
import Link from 'next/link';

export default async function MyLinks({ userId }: { userId: string }) {
	const links = await getUserLinks(userId);

	if (!links || links.length === 0) {
		return (
			<p className="text-center py-16">
				You haven&#39;t shortened any links.{' '}
				<Link href="/" className="hover:border-b border-current">
					Create one
				</Link>
				?
			</p>
		);
	}

	return (
		<>
			<h1 className="text-2xl font-bold mb-4 pb-4 border-b">
				Your links
			</h1>

			<ul className="space-y-4 break-words">
				{links.map((link) => (
					<ShortUrlLink
						userId={userId}
						key={link.id.toString()}
						link={link}
					/>
				))}
			</ul>
		</>
	);
}
