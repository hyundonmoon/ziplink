import { ShortLink } from '@/app/lib/models';
import CopyLinkButton from '@/app/my-links/_components/CopyLinkButton';
import DeleteLinkButton from '@/app/my-links/_components/DeleteLinkButton';

export default function ShortUrlLink({
	link: { id, shortCode, originalUrl },
}: {
	link: ShortLink;
}) {
	const shortUrl = `${process.env.HOSTNAME}/${shortCode}`;

	return (
		<li className="border p-4 rounded-md">
			<div className="mb-4">
				<p className="font-bold">{shortUrl}</p>
				<p>{originalUrl}</p>
			</div>

			<div className="flex gap-4 items-center">
				<button>
					<a
						className="border px-3 py-1 rounded w-full h-full block"
						href={originalUrl}
						target="_blank"
						rel="noreferrer noopener"
					>
						Visit
					</a>
				</button>

				<CopyLinkButton shortUrl={shortUrl} />

				<DeleteLinkButton id={id} />
			</div>
		</li>
	);
}
