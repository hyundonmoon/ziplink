import ShortUrlLinkSkeleton from '@/app/my-links/_components/ShortUrlLinkSkeleton';

export default function MyLinksSkeleton() {
	return (
		<ul className="space-y-4">
			<ShortUrlLinkSkeleton />
			<ShortUrlLinkSkeleton />
			<ShortUrlLinkSkeleton />
			<ShortUrlLinkSkeleton />
		</ul>
	);
}
