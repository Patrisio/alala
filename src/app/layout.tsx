import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import StyledComponentsRegistry from './registry'

import {standard} from '../packages/diamond-ui/typography';
import {createGlobalStyle} from 'styled-components';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}
// const TypoStyle = createGlobalStyle(standard);

// const GlobalStyles = createGlobalStyle`
//   background: red;
// `;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<StyledComponentsRegistry>
					{/* <GlobalStyles /> */}
					{children}
				</StyledComponentsRegistry>
			</body>
		</html>
	)
}