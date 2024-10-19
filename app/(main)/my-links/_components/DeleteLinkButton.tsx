'use client';

import { deleteUserLink } from '@/features/link/actions';

export default function DeleteLinkButton({
	userId,
	id,
}: {
	userId: string;
	id: number;
}) {
	return (
		<button
			className="px-2 py-1 border rounded hover:border-sky-400"
			onClick={() => {
				deleteUserLink(userId, id);
			}}
		>
			Delete
		</button>
	);
}
