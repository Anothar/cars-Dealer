import { FC } from "react";

type Props = {
  key: number;
  value: ValueSelect;
  item: ValueSelect;
  setValue: (value: ValueSelect) => void;
}

const SelectOption: FC<Props> = ({ key, value, item, setValue }) => {
  return (
    <div
      key={item.id}
      className={`flex items-center h-8 pl-3 gap-2.5 cursor-pointer h-8 w-full shrink-0 ${
        value.id === item.id
          ? "text-white/60"
          : "text-white hover:text-white/70"
      }`}
      onClick={() => setValue(item)}
    >
      <div className={"text-sm tracking-tight"}>
        {item.name}
      </div>
    </div>
  )
}

export default SelectOption;