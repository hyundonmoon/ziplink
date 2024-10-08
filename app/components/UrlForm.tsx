'use client';

import { ChangeEvent, useState } from 'react';
import { ACTION_FAILED, INVALID_URL } from '../lib/constants';
import { ShortUrlResponse } from '../lib/models';
import { validateUrl } from '../lib/utils';
import { ShortenButton } from './URLFormSubmitButton';

interface UrlFormProps {
	formActionState: ShortUrlResponse | null;
	formAction: (url: string) => void;
}

export default function UrlForm({ formAction, formActionState }: UrlFormProps) {
	const [url, setUrl] = useState('');
	const [isValid, setIsValid] = useState(true);

	const handleBlur = () => {
		const urlValidation = validateUrl(url);
		setIsValid(urlValidation.isValid);
	};

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setUrl(e.target.value);
	};

	const isUrlInvalid =
		!isValid ||
		(formActionState &&
			formActionState.status === ACTION_FAILED &&
			formActionState.reason === INVALID_URL);

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
						onBlur={handleBlur}
					/>
					{isUrlInvalid && (
						<p className="mt-1 text-sm text-rose-500">
							Please enter a valid URL.
						</p>
					)}
				</label>

				<ShortenButton />
			</div>
		</form>
	);
}
