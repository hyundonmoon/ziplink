import Header from '@/app/(auth)/components/Header';
import '@/app/globals.css';
import type { Metadata, Viewport } from 'next';
import { Literata } from 'next/font/google';

const literata = Literata({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-literata',
});

export const viewport: Viewport = {
	width: 'device-width',
	initialScale: 1,
	maximumScale: 1,
	userScalable: false,
};

export const metadata: Metadata = {
	title: 'Sign in | Ziplink',
	description: 'Shorten your URLs with ease.',
	icons: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🔗</text></svg>",
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
				<Header />
				<main className="flex-1 py-8 flex justify-center items-center">
					{children}
				</main>
			</body>
		</html>
	);
}
