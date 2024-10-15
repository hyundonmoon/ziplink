export default function VisitLinkButton({
	originalUrl,
}: {
	originalUrl: string;
}) {
	return (
		<button>
			<a
				className="border px-2 py-1 rounded w-full h-full block hover:border-sky-400"
				href={originalUrl}
				target="_blank"
				rel="noreferrer noopener"
			>
				Visit
			</a>
		</button>
	);
}
