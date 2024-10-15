import ShortUrlLink from '@/app/(main)/my-links/_components/ShortUrlLink';
import { getUserLinks as getUserLinksServerAction } from '@/app/lib/actions';

export default async function MyLinks() {
	const links = await getUserLinksServerAction();

	if (!links || links.length === 0) {
		return (
			<p className="text-center py-16">
				You haven&#39;t shortened any links.{' '}
				<a href="/" className="hover:border-b border-current">
					Create one
				</a>
				?
			</p>
		);
	}

	return (
		<ul className="space-y-4">
			{links.map((link) => (
				<ShortUrlLink key={link.id.toString()} link={link} />
			))}
		</ul>
	);
}
