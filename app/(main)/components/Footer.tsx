export default function Footer() {
	return (
		<footer className="py-8 flex justify-between items-center border-t">
			<span>&#169; {new Date().getFullYear()} Ziplink</span>
			<a
				href="https://github.com/hyundonmoon/ziplink"
				target="_blank"
				rel="noopener noreferrer"
				className="border-b border-transparent hover:border-current"
			>
				GitHub
			</a>
		</footer>
	);
}
