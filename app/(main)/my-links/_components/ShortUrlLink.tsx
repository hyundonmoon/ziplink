'use client';

import CopyLinkButton from '@/app/(main)/my-links/_components/CopyLinkButton';
import DeleteLinkButton from '@/app/(main)/my-links/_components/DeleteLinkButton';
import VisitLinkButton from '@/app/(main)/my-links/_components/VisitLinkButton';
import { LinkResponse } from '@/features/link/models';

export default function ShortUrlLink({
	userId,
	link: { id, shortCode, originalUrl },
}: {
	userId: string;
	link: LinkResponse;
}) {
	const shortUrl = `${process.env.NEXT_PUBLIC_HOSTNAME}/${shortCode}`;

	return (
		<li className="border p-4 ">
			<div className="mb-4">
				<p className="font-semibold">{shortUrl}</p>
				<p className="text-gray-600">{originalUrl}</p>
			</div>

			<div className="flex gap-4 items-center">
				<VisitLinkButton originalUrl={originalUrl} />

				<CopyLinkButton shortUrl={shortUrl} />

				<DeleteLinkButton userId={userId} id={id} />
			</div>
		</li>
	);
}
