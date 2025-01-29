import { FC, useState } from "react";
import Loading from "../carList/components/Loading";
import useCarFilter from "@/hooks/useCarFilter";
import SelectInput from "../_shedule/SelectInput/Select";
import Link from "next/link";

const CarFilter = () => {
  const { filtersState, loading } = useCarFilter();
  const [valueMake, setValueMake] = useState({ id: -1, name: 'Chose vehicle make' });
  const [valueYear, setValueYear] = useState({ id: -1, name: 'Chose year' });

  const years = [...new Array(2025 - 2015 + 1)].map((_, i) => 2015 + i);

  return (
    <div className="flex flex-col justify-between my-2 mx-2 h-full">
      <div className="flex flex-col gap-4">
        <SelectInput
          items={filtersState.map(item => ({ id: item.MakeId, name: item.MakeName }))}
          value={valueMake}
          setValue={setValueMake}
        />

        <SelectInput
          items={years.map(item => ({ id: item, name: item.toString() }))}
          value={valueYear}
          setValue={setValueYear}
        />
        {loading && <Loading />}
      </div>

      <Link
        href={(valueMake.id === -1) && (valueYear.id === -1) ? '#' : `/result/${valueMake.id}/${valueYear.id}`}
        className={`flex border-neutral-600 items-center hover:border-white border rounded-lg w-[235px] py-2 justify-center cursor-pointer ` +
          ((valueMake.id !== -1) && (valueYear.id !== -1) ? '' : '!hover:border-[gray] !border-[gray] !text-[grey] !cursor-default')
        }
        aria-disabled={(valueMake.id === -1) && (valueYear.id === -1)}
      >
        Next
      </Link>
    </div>
  );
};

export default CarFilter;
