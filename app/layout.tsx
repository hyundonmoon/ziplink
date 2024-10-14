import type { Metadata } from 'next';
import { Literata } from 'next/font/google';
import Header from './components/Header';
import './globals.css';

const literata = Literata({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-literata',
});

export const metadata: Metadata = {
	title: 'hdm.lt - Shorten your URLs with ease.',
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
				className={`${literata.variable} antialiased p-6 h-screen w-screen max-w-screen-lg mx-auto font-serif flex flex-col`}
			>
				<Header />
				<main className="flex-1">{children}</main>
			</body>
		</html>
	);
}
