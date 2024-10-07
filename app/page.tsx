'use client';

import { useState } from 'react';
import UrlShortener from './components/UrlShortener';

export default function Home() {
	const [key, setKey] = useState(0);

	const handleReset = () => {
		setKey((prev) => prev + 1);
	};

	return (
		<div className="w-full h-full flex flex-col justify-center items-center">
			<div className="w-full max-w-md">
				<h2 className="text-2xl font-bold text-slate-100 mb-3">
					Shorten your URLs with ease
				</h2>

				<UrlShortener key={key} handleReset={handleReset} />
			</div>
		</div>
	);
}
