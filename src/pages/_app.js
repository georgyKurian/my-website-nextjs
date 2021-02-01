import { ThemeProvider } from 'next-themes';

import '@assets/styles/main.scss';

import 'typeface-open-sans';
import 'typeface-merriweather';

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme="system" enableSystem={false} attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
