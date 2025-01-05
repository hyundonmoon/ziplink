import ShortUrlLink from '@/app/(main)/my-links/_components/ShortUrlLink';
import Link from 'next/link';
import { z } from 'zod';

const LinkResponse = z.object({
	id: z.number(),
	originalUrl: z.string(),
	shortCode: z.string(),
});
export type LinkResponse = z.infer<typeof LinkResponse>;
const LinkResponseData = z.array(LinkResponse);

export default async function MyLinks({ userId }: { userId: string }) {
	const response = await fetch(
		`${process.env.API_URL!}/links?userId=${userId}`
	);
	const data = await response.json();
	const links = LinkResponseData.parse(data);
	// TODO: study zod error handling

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
