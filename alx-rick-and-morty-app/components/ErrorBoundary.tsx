import React, { ReactNode } from "react";
import * as Sentry from '@sentry/react';

interface State {
  hasError: boolean;
}

interface ErrorBoundaryProps {
  children: ReactNode;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, State> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

 // static getDerivedStateFromError(_error: Error): State {
  //   // Update state so the next render shows the fallback UI
  //   return { hasError: true };
  // }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log error to Sentry
    Sentry.captureException(error, { extra: errorInfo });
    // Log error details for debugging or monitoring
    console.error("ErrorBoundary caught an error:", error);
    console.error("Error details:", errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center">
          <h2 className="text-xl font-semibold text-red-600 mb-4">
            Oops, there is an error!
          </h2>
          <button
            onClick={() => this.setState({ hasError: false })}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            Try again?
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
