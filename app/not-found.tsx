import Link from 'next/link';

export default function NotFound() {
	return (
		<div className="h-full flex flex-col justify-center text-center">
			<h1>404 Not Found</h1>
			<p>Not all who wander are lost...but you are.</p>
			<Link href="/">Go back home</Link>
		</div>
	);
}
