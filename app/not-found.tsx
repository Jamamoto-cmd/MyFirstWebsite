//This page will be displayed when the page in the URL doesn't exist

import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <div className="flex justify-center items-center h-screen ">
      <h1 className="pr-3 text-4xl font-extrabold">404</h1>
      <h2 className="text-2xl">| Page not found</h2>
    </div>
  );
}
