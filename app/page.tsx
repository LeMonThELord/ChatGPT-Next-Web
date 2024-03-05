import { Analytics } from "@vercel/analytics/react";

import { Home } from "./components/home";

import { getServerSideConfig } from "./config/server";

const serverConfig = getServerSideConfig();

export default async function App() {
  return (
    <>
      <Home />
      {serverConfig?.isVercel && (
        <>
          <Analytics />
          <script defer src="https://umami.sagafish.top/script.js" data-website-id="019cfef7-5272-4e6a-a3f0-7d22e18cf7c1"></script>
        </>
      )}
    </>
  );
}
