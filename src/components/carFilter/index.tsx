import { FC, useState } from "react";
import Loading from "../_shedule/Loading/Loading";
import useCarFilter from "@/hooks/useCarFilter";
import SelectInput from "../_shedule/SelectInput/Select";
import Link from "next/link";
import { years } from "@/utils/consts";

const CarFilter = () => {
  const { filtersState, loading } = useCarFilter();
  const [valueMake, setValueMake] = useState({ id: -1, name: 'Chose vehicle make' });
  const [valueYear, setValueYear] = useState({ id: -1, name: 'Chose year' });

  const isDisabledButton = (valueMake.id === -1) && (valueYear.id === -1);

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
        href={isDisabledButton ? '#' : `/result/${valueMake.id}/${valueYear.id}`}
        className={`flex border-neutral-600 items-center hover:border-white border rounded-lg w-[235px] py-2 justify-center cursor-pointer ` +
          (isDisabledButton ? '!hover:border-[gray] !border-[gray] !text-[grey] !cursor-default' : '')
        }
        aria-disabled={isDisabledButton}
      >
        Next
      </Link>
    </div>
  );
};

export default CarFilter;
