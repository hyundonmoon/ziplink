'use client';

import { ShortenButton } from '@/app/components/URLFormSubmitButton';
import { ACTION_FAILED, INVALID_URL } from '@/app/lib/constants';
import { UrlShortenActionResult } from '@/app/lib/models';
import { ChangeEvent, useState } from 'react';

interface UrlFormProps {
	formActionState: UrlShortenActionResult | null;
	formAction: (url: string) => void;
}

export default function UrlForm({ formAction, formActionState }: UrlFormProps) {
	const [url, setUrl] = useState('');

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setUrl(e.target.value);
	};

	const isUrlInvalid =
		formActionState &&
		formActionState.status === ACTION_FAILED &&
		formActionState.reason === INVALID_URL;

	return (
		<form
			className="p-4 bg-slate-50 rounded-md"
			action={() => {
				formAction(url);
			}}
		>
			<div className="flex flex-col">
				<label className="mb-4">
					<span className="text-sm mb-1 block">URL to shorten</span>
					<input
						type="text"
						name="url"
						placeholder="Enter your URL"
						autoComplete="off"
						className={`
                        w-full p-2 mt-1 rounded-md border outline-none focus:ring focus:border-blue-500 focus:outline-none
                        ${isUrlInvalid ? 'border-rose-500' : null}`}
						value={url}
						onChange={handleChange}
					/>
					{isUrlInvalid && (
						<p className="mt-1 text-sm text-rose-500">
							{formActionState.message}
						</p>
					)}
				</label>

				<ShortenButton />
			</div>
		</form>
	);
}
