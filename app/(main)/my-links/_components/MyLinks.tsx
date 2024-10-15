import ShortUrlLink from '@/app/(main)/my-links/_components/ShortUrlLink';
import { getUserLinks as getUserLinksServerAction } from '@/app/lib/actions';
import Link from 'next/link';

export default async function MyLinks() {
	const links = await getUserLinksServerAction();

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

			<ul className="space-y-4">
				{links.map((link) => (
					<ShortUrlLink key={link.id.toString()} link={link} />
				))}
			</ul>
		</>
	);
}
