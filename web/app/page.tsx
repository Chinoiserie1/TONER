"use client";
import { TonConnectUIProvider, TonConnectButton } from "@tonconnect/ui-react";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <TonConnectUIProvider manifestUrl="http://localhost:3000/tonconnect-manifest.json">
        <h1>Hello world</h1>
        <TonConnectButton />
      </TonConnectUIProvider>
    </div>
  );
}
