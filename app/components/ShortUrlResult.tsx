interface ShortUrlResultProps {
	originalUrl: string;
	shortCode: string;
	handleReset: () => void;
}

export default function ShortUrlResult({
	originalUrl,
	shortCode,
	handleReset,
}: ShortUrlResultProps) {
	const handleCopy = () => {
		navigator.clipboard.writeText(
			`${process.env.NEXT_PUBLIC_HOST}/${shortCode}`
		);
	};

	return (
		<div className="p-4 bg-slate-50 rounded-md">
			<div className="flex flex-col">
				<label className="mb-4">
					<span className="text-sm mb-1 block">Original url</span>
					<input
						type="text"
						readOnly
						value={originalUrl}
						className="w-full p-2 rounded-md border outline-none"
					></input>
				</label>

				<label className="mb-4">
					<span className="text-sm mb-1 block">Shortened url</span>
					<input
						type="text"
						readOnly
						value={`${process.env.NEXT_PUBLIC_HOST}/${shortCode}`}
						className="w-full p-2 rounded-md border outline-none"
					></input>
				</label>

				<div className="space-x-2">
					<button className="border py-1 px-3 rounded-md">
						<a
							href={`${process.env.NEXT_PUBLIC_HOST}/${shortCode}`}
							target="_blank"
							rel="noreferrer noopener"
						>
							Visit
						</a>
					</button>

					<button
						className="border py-1 px-3 rounded-md"
						onClick={handleCopy}
					>
						Copy
					</button>

					<button
						className="border py-1 px-3 rounded-md"
						onClick={handleReset}
					>
						Shorten another
					</button>
				</div>
			</div>
		</div>
	);
}
