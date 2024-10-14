export default function Footer() {
	return (
		<footer className="py-8 flex justify-between items-center border-t">
			<span>&#169; {new Date().getFullYear()} Hyun Don Moon</span>
			<a
				href="https://github.com/hyundonmoon/hdm.lt"
				target="_blank"
				rel="noopener noreferrer"
				className="hover:border-b border-current"
			>
				GitHub
			</a>
		</footer>
	);
}
