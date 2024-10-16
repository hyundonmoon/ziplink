'use client';

import { useFormStatus } from 'react-dom';

export function ShortenButton({ disabled }: { disabled: boolean }) {
	const { pending } = useFormStatus();

	return (
		<button
			type="submit"
			disabled={pending || disabled}
			className="w-full border p-2 rounded-md disabled:cursor-not-allowed hover:bg-gray-50 disabled:hover:bg-white disabled:opacity-60"
		>
			{pending ? 'Shortening...' : 'Shorten'}
		</button>
	);
}
