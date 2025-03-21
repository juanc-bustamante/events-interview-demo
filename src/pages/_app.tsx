import GlobalStyles from '@/styles/GlobalStyles';
import theme from '@/styles/theme';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
);
}

export default MyApp;