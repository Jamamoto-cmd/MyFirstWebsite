//this component will be shown if an error occurs

"use client";

export default function ErrorBoundary({ error }: { error: Error }) {
  return <div>{error.message}</div>;
}
