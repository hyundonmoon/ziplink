'use client';

import { handleCopy } from '@/features/shared/utils';

export default function CopyLinkButton({ shortUrl }: { shortUrl: string }) {
	return (
		<button
			className="px-2 py-1 border rounded hover:bg-gray-50"
			onClick={() => {
				handleCopy(shortUrl);
			}}
		>
			Copy
		</button>
	);
}
