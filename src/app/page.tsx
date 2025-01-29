"use client";

import CarFilter from "@/components/carFilter";
import Header from "@/components/header";

export default function Home() {
  return (
    <main className="flex flex-col h-full">
      <Header pageTitle={"Car dealer filters"} />
      <CarFilter />
    </main>
  );
}
