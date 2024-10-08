'use client';

import { useFormStatus } from 'react-dom';

export function ShortenButton() {
	const { pending } = useFormStatus();

	return (
		<button
			type="submit"
			disabled={pending}
			className="w-full border p-2 rounded-md text-slate-100 bg-yellow-900 hover:bg-yellow-800"
		>
			{pending ? 'Shortening...' : 'Shorten'}
		</button>
	);
}
