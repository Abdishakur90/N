"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

// shadcn/ui
import { Button as ShadcnButton } from "@/components/ui/button";
// Aceternity UI
// BackgroundBeams uses Math.random() while rendering, so it is client-only.
const BackgroundBeams = dynamic(
  () => import("@/components/ui/background-beams").then((m) => m.BackgroundBeams),
  { ssr: false },
);
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
// ObsidianUI
import { FlipText } from "@/components/block/flip-text";
// BoardUI
import { Button } from "@/components/base/buttons/button";
import { Switch } from "@/components/base/switch/switch";
import { Spinner } from "@/components/base/spinner/spinner";

export default function Home() {
  const [on, setOn] = useState(true);

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center gap-12 overflow-hidden bg-neutral-950 px-4 py-24 text-neutral-100">
      <BackgroundBeams />

      <section className="relative z-10 flex flex-col items-center gap-3 text-center">
        <p className="text-xs uppercase tracking-widest text-neutral-500">ObsidianUI · FlipText</p>
        <FlipText className="text-4xl font-bold sm:text-6xl">Installed UI kits</FlipText>
      </section>

      <section className="relative z-10 max-w-xl text-center">
        <p className="mb-2 text-xs uppercase tracking-widest text-neutral-500">Aceternity · TextGenerateEffect</p>
        <TextGenerateEffect words="shadcn/ui, Aceternity UI, ObsidianUI and BoardUI, side by side in one Next.js app." />
      </section>

      <section className="relative z-10 grid w-full max-w-xl gap-6 sm:grid-cols-2">
        <div className="flex flex-col items-center gap-3 rounded-xl border border-white/10 p-6">
          <p className="text-xs uppercase tracking-widest text-neutral-500">shadcn/ui</p>
          <ShadcnButton>shadcn Button</ShadcnButton>
        </div>
        <div className="dark flex flex-col items-center gap-3 rounded-xl border border-white/10 p-6">
          <p className="text-xs uppercase tracking-widest text-neutral-500">BoardUI</p>
          <Button>BoardUI Button</Button>
          <div className="flex items-center gap-4">
            <Switch isSelected={on} onChange={setOn}>Switch</Switch>
            <Spinner size="sm" />
          </div>
        </div>
      </section>
    </main>
  );
}
