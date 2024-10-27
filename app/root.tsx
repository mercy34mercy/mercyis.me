import type { MetaFunction } from "@remix-run/cloudflare";
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";
import styles from "./styles/generated.css";
import { Container } from "./components/Container";
import { Footer } from "./components/Footer";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "mercy",
  description: "Personal website of mercy.",
  viewport: "width=device-width,initial-scale=1",
  "og:url": "https://mercy.mercy34.workers.dev/",
  "og:title": "mercy",
  "og:description": "Personal website of mercy.",
  "og:image": "https://mercy34mercy.github.io/storage/mercy.avif",
  "og:site_name": "mercy",
  "twitter:card": "summary_large_image",
  "twitter:creator": "@mercy34mercy",
  "twitter:site": "@mercy34mercy",
});

export default function App() {
  return (
    <html lang="ja">
      <script async dangerouslySetInnerHTML={{__html: `!function(n){if(!window[n]){var o=window[n]=function(){var n=[].slice.call(arguments);return o.x?o.x.apply(0,n):o.q.push(n)};o.q=[],o.i=Date.now(),o.allow=function(){o.o="allow"},o.deny=function(){o.o="deny"}}}("krt")`}}/>
      <script async src="https://cdn-edge.karte.io/d678bae88fefae7d78495c9d5d45fd47/edge.js"></script>
      <head>
        <Meta />
        <Links />
      </head>
      <body className="text-primary bg-primary font-primary">
        <Container className="px-6">
          <Outlet />
          <Footer />
        </Container>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
