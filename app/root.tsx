// import { cssBundleHref } from '@remix-run/css-bundle';
import type { LinksFunction, MetaFunction } from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';

import styles from './tailwind.css';
import { SiteHeader } from './components/site-header';
import { SiteFooter } from './components/site-footer';
import { Toaster } from './components/ui/toaster';
import { WhatsAppButton } from './components/whatsapp-button';
import { siteConfig } from './config/site';

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: styles },
  // ...(cssBundleHref ? [{ rel: 'stylesheet', href: cssBundleHref }] : []),
];

// export const meta: MetaFunction = () => {
//   return [
//     { title: 'Educom Guidance' },
//     {
//       name: 'description',
//       content: `Welcome to Educom Guidance!`,
//     },
//   ];
// };

export default function App() {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Educom Guidance</title>
        <meta name="description" content="Welcome to Educom Guidance!" />
        <Meta />
        <Links />
      </head>
      <body className="relative min-h-screen bg-background flex flex-col font-sans">
        <SiteHeader />
        <div className="relative flex-1">
          <Outlet />
          <WhatsAppButton />
        </div>
        <SiteFooter />
        <Toaster />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
