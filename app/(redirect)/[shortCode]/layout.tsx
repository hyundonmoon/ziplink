import '@/app/globals.css';
import type { Metadata } from 'next';
import { Literata } from 'next/font/google';

const literata = Literata({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-literata',
});

export const metadata: Metadata = {
	title: 'Redirecting... | Ziplink',
	description: 'Shorten your URLs with ease.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${literata.variable} antialiased p-6 h-screen w-screen max-w-screen-md min-w-fit mx-auto font-serif flex flex-col`}
			>
				<main className="flex-1 py-8">{children}</main>
			</body>
		</html>
	);
}
