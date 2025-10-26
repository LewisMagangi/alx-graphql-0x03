// @ts-expect-error: allow side-effect CSS import without type declarations
import "@/styles/globals.css";
import ErrorBoundary from '@/components/ErrorBoundary';
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client/react";
import client from "@/graphql/apolloClient";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <ErrorBoundary>
        <Component {...pageProps} />
      </ErrorBoundary>
    </ApolloProvider>
  );
}
