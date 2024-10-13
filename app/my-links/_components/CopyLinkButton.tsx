'use client';

import { handleCopy } from '@/app/lib/utils';

export default function CopyLinkButton({ shortUrl }: { shortUrl: string }) {
	return (
		<button
			className="px-3 py-1 border rounded"
			onClick={() => {
				handleCopy(shortUrl);
			}}
		>
			Copy
		</button>
	);
}
