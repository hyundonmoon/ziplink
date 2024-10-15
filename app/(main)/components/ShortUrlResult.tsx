import { handleCopy } from '@/app/lib/utils';

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
	const shortUrl = `${window.location.host}/${shortCode}`;

	return (
		<>
			<h2 className="text-xl font-bold mb-3 md:mb-6 md:text-3xl">
				Here you go! &#127881;
			</h2>
			<div className="p-4 border rounded-lg overflow-hidden">
				<div className="flex flex-col space-y-4">
					<div>
						<label className="mb-1 inline-block">
							Original url
						</label>

						<input
							type="text"
							readOnly
							value={originalUrl}
							className="w-full p-2 rounded-md border outline-none"
						></input>
					</div>

					<div>
						<label className="mb-1 inline-block">
							Shortened url
						</label>

						<input
							type="text"
							readOnly
							value={shortUrl}
							className="w-full p-2 rounded-md border outline-none"
						></input>
					</div>

					<div className="space-x-2">
						<button>
							<a
								className="inline-block border py-1 px-3 rounded-md"
								href={`/${shortCode}`}
								target="_blank"
								rel="noreferrer noopener"
							>
								Visit
							</a>
						</button>

						<button
							className="border py-1 px-3 rounded-md"
							onClick={() => handleCopy(shortUrl)}
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
		</>
	);
}
