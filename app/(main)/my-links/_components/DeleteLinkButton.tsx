'use client';

import { deleteUserLink } from '@/app/lib/actions';

export default function DeleteLinkButton({ id }: { id: number }) {
	return (
		<button
			className="px-2 py-1 border rounded hover:border-sky-400"
			onClick={() => {
				deleteUserLink(id);
			}}
		>
			Delete
		</button>
	);
}
