export default function ShortUrlLinkSkeleton() {
	return (
		<li className="animate-pulse border p-4 rounded-md">
			<div className="mb-4 space-y-2">
				<div className="w-1/5 h-6 bg-slate-200"></div>
				<div className="w-2/5 h-6 bg-slate-200"></div>
			</div>

			<div className="flex gap-4 items-center">
				<div className="w-14 h-8 bg-slate-200 rounded"></div>
				<div className="w-16 h-8 bg-slate-200 rounded"></div>
				<div className="w-20 h-8 bg-slate-200 rounded"></div>
			</div>
		</li>
	);
}
