import { getUserLinks as getUserLinksServerAction } from '@/app/lib/actions';
import ShortUrlLink from '@/app/my-links/_components/ShortUrlLink';

export default async function MyLinks() {
	const links = await getUserLinksServerAction();

	if (!links || links.length === 0) {
		return (
			<p>
				You haven&#39;t shortend any links.{' '}
				<a href="/" className="hover:border-b">
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
