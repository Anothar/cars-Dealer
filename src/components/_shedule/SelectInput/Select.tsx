import { FC, lazy, Suspense, useEffect, useRef, useState } from "react";
import { DROPDOWN_ARROW_SVG } from "@/icons/dropdownArrowSvg";
import SelectSceleton from "./SelectSceleton";

interface Props {
  items: ValueSelect[]
  value: ValueSelect;
  setValue: (value: ValueSelect) => void;
}

const SelectOption = lazy(() => import("./SelectOption"));

const SelectInput: FC<Props> = ({ items, value, setValue }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const dropdownRef = useRef(null);
  
  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !(dropdownRef.current as unknown as HTMLElement).contains(
        event.target as Node
      )
    ) {
      setIsExpanded(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef} onClick={() => setIsExpanded(!isExpanded)}>
      <div
        className={`flex transition-all duration-600 border-neutral-600 hover:border-white border rounded-lg w-[235px] py-2 pl-3 pr-2 justify-between cursor-pointer ${
          isExpanded && "border-white"
        }`}
      >
        <div>{value.name}</div>
        <div className={`transition-all duration-300 ${isExpanded && "rotate-180"} `}>
          <DROPDOWN_ARROW_SVG />
        </div>
      </div>

      {isExpanded && (
        <div className="absolute top-12 flex w-[235px] py-2 bg-stone-900 rounded-lg flex-col items-start z-10 max-h-[176px] overflow-auto">
          <Suspense fallback={<SelectSceleton />}>
            {items.map((item) => (
              <SelectOption key={item.id} value={value} item={item} setValue={setValue} />
            ))}
          </Suspense>
        </div>
      )}
    </div>
  );
};

export default SelectInput;
