export default function VisitLinkButton({
	originalUrl,
}: {
	originalUrl: string;
}) {
	return (
		<button>
			<a
				className="border px-2 py-1 rounded w-full h-full block hover:bg-gray-50"
				href={originalUrl}
				target="_blank"
				rel="noreferrer noopener"
			>
				Visit
			</a>
		</button>
	);
}
