export default function ShortUrlLinkSkeleton() {
	return (
		<li className="animate-pulse border p-4">
			<div className="mb-4 space-y-2">
				<div className="w-1/5 h-6 bg-gray-100"></div>
				<div className="w-2/5 h-6 bg-gray-100"></div>
			</div>

			<div className="flex gap-4 items-center">
				<div className="w-14 h-8 bg-gray-100 rounded"></div>
				<div className="w-16 h-8 bg-gray-100 rounded"></div>
				<div className="w-20 h-8 bg-gray-100 rounded"></div>
			</div>
		</li>
	);
}
