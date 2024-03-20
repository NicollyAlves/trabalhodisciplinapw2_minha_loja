import "@/styles/globals.css";
import AppBar from "@/components/AppBar/AppBar"
import type { AppProps } from "next/app";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import AuthProvider from "@/provider/AuthProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <AppBar />
      <div style={{margin: 20}}>
        <Component {...pageProps} />
      </div>
    </AuthProvider>
  ) 
}
