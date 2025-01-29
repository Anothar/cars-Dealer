import { Suspense, lazy } from "react";
import Loading from "../_shedule/Loading/Loading";
import CarsSceleton from "./components/CarsSceleton";

const CarItem = lazy(() => import("./components/CarItem"));

export default function CarList({carsState, loading}: {carsState: Car[], loading: boolean}) {
  return (
    <>
      <div className="mb-2 flex flex-col min-w-[1094px]">
        <div className="flex flex-col gap-5 min-h-[72px] sm:flex-row sm:gap-0 justify-between md:mx-[32px] px-[12px] py-[24px] items-center cursor-default">
          <h2>{`${carsState.length ? `${carsState.length} Cars` : ``}`}</h2>
        </div>

        <ul className="flex flex-wrap justify-center gap-[20px] px-[12px] mx-[20px] h-full overflow-y-auto">
          {carsState.length ? (
            <Suspense fallback={<CarsSceleton />}>
              {carsState.map((car) => (
                <CarItem key={car.Make_ID} Make_Name={car.Make_Name} Model_Name={car.Model_Name}/>
              ))}
            </Suspense>
          ) : loading ? (<CarsSceleton />) : <>Sorry, not found cars...</>}
        </ul>
      </div>

      {loading && <Loading />}
    </>
  );
};
