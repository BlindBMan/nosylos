import "styles/globals.css";
import type { AppProps } from "next/app";
import ThemeProvider from "libs/minimal-ui/theme";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider>
			<Component {...pageProps} />
		</ThemeProvider>
	);
}