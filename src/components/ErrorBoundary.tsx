import { Component, ErrorInfo, ReactNode } from "react";

// Catches render-time errors, including a route chunk that failed to load after the one
// automatic reload in lazyWithRetry. Without it React unmounts the whole tree to a blank page.
export class ErrorBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("Render failed", error, info.componentStack);
  }

  render() {
    if (!this.state.failed) return this.props.children;
    return (
      <div className="flex min-h-screen items-center justify-center bg-background px-6 text-center">
        <div className="max-w-md">
          <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-primary">Something went wrong</p>
          <h1 className="mt-3 text-2xl font-semibold">This page could not be shown</h1>
          <p className="mt-3 text-sm text-body">It is usually a dropped connection. Reload to try again, or go back to the home page.</p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <button type="button" onClick={() => window.location.reload()} className="btn-brand">
              Reload
            </button>
            <a href="/" className="btn-line">
              Home
            </a>
          </div>
        </div>
      </div>
    );
  }
}
