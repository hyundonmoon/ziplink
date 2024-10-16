export default function MyAccountInfoRow({
	label,
	value,
}: {
	label: string;
	value: string;
}) {
	return (
		<li className="flex flex-col sm:flex-row sm:justify-between sm:items-center sm:gap-4">
			<div className="font-medium">{label}</div>
			<div className="truncate sm:flex-1 sm:text-right">{value}</div>
		</li>
	);
}
