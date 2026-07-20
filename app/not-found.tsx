import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main-content" className="not-found">
      <div><span>404</span><h1>That page is not here.</h1><p>The window quote page is one click away.</p><Link className="button" href="/">Return home</Link></div>
    </main>
  );
}
