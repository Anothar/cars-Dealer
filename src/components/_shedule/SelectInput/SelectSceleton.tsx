const SelectSceleton = () =>
  Array(5)
    .fill("f")
    .map(() => (
      <div className="animate-pulse bg-neutral-600 h-8 w-full rounded-xl" />
    ));

export default SelectSceleton;
