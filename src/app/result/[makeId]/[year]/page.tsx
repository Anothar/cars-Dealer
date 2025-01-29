"use client";

import CarList from "@/components/carList";
import Header from "@/components/header";
import useCarsItems from "@/hooks/useCarsItems";

export default function CarsPage({ params }: { params: { makeId: string, year: string } }) {
  const { carsState, loading } = useCarsItems(params.makeId, params.year);

  return (
    <main>
      <Header pageTitle={"Car list"} />
      <CarList carsState={carsState} loading={loading} />
    </main>
  );
}
