import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

const geistSans = localFont({
	src: './fonts/GeistVF.woff',
	variable: '--font-geist-sans',
	weight: '100 900',
})
const geistMono = localFont({
	src: './fonts/GeistMonoVF.woff',
	variable: '--font-geist-mono',
	weight: '100 900',
})

export const metadata: Metadata = {
	title: 'URL Shortener',
	description: 'Shorten your URLs with ease',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body
				className={`bg-sky-900 ${geistSans.variable} ${geistMono.variable} antialiased h-screen w-screen max-w-screen-md mx-auto`}
			>
				{children}
			</body>
		</html>
	)
}
