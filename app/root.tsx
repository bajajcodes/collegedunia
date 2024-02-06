import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import { SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";
import { Toaster } from "./components/ui/toaster";
import { WhatsAppButton } from "./components/whatsapp-button";
import styles from "./tailwind.css";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

export default function App() {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="google-site-verification"
          content="2Jk2ErCmHHMF4o4GKenI16Wcu9gxxEvYB98MVpL9gsE"
        />

        <link rel="preconnect" href="https://maps.google.com" />
        <link rel="preconnect" href="https://maps.gstatic.com" />
        <link rel="preconnect" href="https://maps.googleapis.com" />
        <Meta />
        <Links />
        <script
          async
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MBBHQ385');`,
          }}
        ></script>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-WFXNR8EX3K"
        ></script>
        <script
          async
          dangerouslySetInnerHTML={{
            __html: `  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-WFXNR8EX3K');`,
          }}
        ></script>
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
      <noscript>
        <iframe
          title="no-script-analytics"
          src="https://www.googletagmanager.com/ns.html?id=GTM-MBBHQ385"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>
    </html>
  );
}
