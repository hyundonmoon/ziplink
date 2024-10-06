'use client';

import { useState } from 'react';
import { validateUrl } from './lib/utils';

export default function Home() {
	const [url, setUrl] = useState('');
	const [isValid, setIsValid] = useState(true);

	const handleBlur = () => {
		const urlValidation = validateUrl(url);
		setIsValid(urlValidation.isValid);
	};

	return (
		<div className="w-full h-full flex flex-col justify-center items-center">
			<div className="w-full max-w-md">
				<h2 className="text-2xl font-bold text-slate-100 mb-3">
					Shorten your URLs with ease
				</h2>

				<form className="p-4 bg-slate-50 rounded-md">
					<div className="flex flex-col">
						<label className="mb-4">
							<span className="text-sm mb-1 block">
								URL to shorten
							</span>
							<input
								type="url"
								placeholder="Enter your long URL"
								className={`
									w-full p-2 mt-1 rounded-md border outline-none focus:ring focus:border-blue-500 focus:outline-none
									${!isValid ? 'border-rose-500' : null}`}
								title="Please enter a valid URL."
								value={url}
								onChange={(e) => {
									setUrl(e.target.value);
								}}
								onBlur={handleBlur}
							/>
							{!isValid && (
								<p className="mt-1 text-sm text-rose-500">
									Please enter a valid URL.
								</p>
							)}
						</label>
						<button
							type="submit"
							className="w-full border p-2 rounded-md text-slate-100 bg-yellow-900 hover:bg-yellow-800"
						>
							Shorten
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
