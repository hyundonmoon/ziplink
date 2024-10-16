import CopyLinkButton from '@/app/(main)/my-links/_components/CopyLinkButton';
import DeleteLinkButton from '@/app/(main)/my-links/_components/DeleteLinkButton';
import VisitLinkButton from '@/app/(main)/my-links/_components/VisitLinkButton';
import { ShortLink } from '@/app/lib/models';

export default function ShortUrlLink({
	link: { id, shortCode, originalUrl },
}: {
	link: ShortLink;
}) {
	const shortUrl = `${process.env.HOSTNAME}/${shortCode}`;

	return (
		<li className="border p-4 ">
			<div className="mb-4">
				<p className="font-semibold">{shortUrl}</p>
				<p className="text-gray-600">{originalUrl}</p>
			</div>

			<div className="flex gap-4 items-center">
				<VisitLinkButton originalUrl={originalUrl} />

				<CopyLinkButton shortUrl={shortUrl} />

				<DeleteLinkButton id={id} />
			</div>
		</li>
	);
}
