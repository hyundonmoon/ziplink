'use client';

import { ShortenButton } from '@/app/(main)/components/ShortenButton';
import { ACTION_FAILED, INVALID_URL, TOKEN_ERROR } from '@/app/lib/constants';
import { UrlShortenActionResult } from '@/app/lib/models';
import { Turnstile } from '@marsidev/react-turnstile';
import { ChangeEvent, useState } from 'react';

interface UrlFormProps {
	formActionState: UrlShortenActionResult | null;
	formAction: (formData: FormData) => void;
}

export default function UrlForm({ formAction, formActionState }: UrlFormProps) {
	const [url, setUrl] = useState('');
	const [turnstileStatus, setTurnstileStatus] = useState('');

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setUrl(e.target.value);
	};

	const isUrlInvalid =
		formActionState &&
		formActionState.status === ACTION_FAILED &&
		formActionState.reason === INVALID_URL;

	const isTokenError =
		formActionState &&
		formActionState.status === ACTION_FAILED &&
		formActionState.reason === TOKEN_ERROR;

	return (
		<>
			<h2 className="text-xl font-bold mb-3 md:mb-6 md:text-3xl">
				Shorten your URLs with ease
			</h2>
			<form
				className="p-4 border rounded-lg overflow-hidden"
				action={formAction}
			>
				<div className="flex flex-col space-y-4">
					<div className="space-y-2">
						<label className="inline-block" htmlFor="url">
							URL to shorten
						</label>

						<input
							type="text"
							id="url"
							name="url"
							placeholder="Enter your URL"
							autoComplete="off"
							spellCheck="false"
							className={`
                        w-full p-2 mt-1 rounded-md border outline-none focus:ring focus:border-blue-500 focus:outline-none
                        ${isUrlInvalid ? 'border-rose-500' : null}`}
							value={url}
							onChange={handleChange}
						/>

						{isUrlInvalid && (
							<p className="text-sm text-rose-500">
								{formActionState.message}
							</p>
						)}
					</div>

					<Turnstile
						siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
						options={{
							size: 'flexible',
						}}
						onError={() => setTurnstileStatus('error')}
						onExpire={() => setTurnstileStatus('expired')}
						onSuccess={() => setTurnstileStatus('solved')}
					/>

					{isTokenError && (
						<p className="text-sm text-rose-500">
							{formActionState.message}
						</p>
					)}

					<ShortenButton
						disabled={turnstileStatus !== 'solved' || !url.length}
					/>
				</div>
			</form>
		</>
	);
}
