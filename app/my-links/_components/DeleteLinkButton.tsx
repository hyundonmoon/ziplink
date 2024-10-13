'use client';

import { deleteUserLink } from '@/app/lib/actions';

export default function DeleteLinkButton({ id }: { id: number }) {
	return (
		<button
			className="px-3 py-1 border rounded bg-rose-600 text-white"
			onClick={() => {
				deleteUserLink(id);
			}}
		>
			Delete
		</button>
	);
}
