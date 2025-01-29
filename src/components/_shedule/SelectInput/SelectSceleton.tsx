const SelectSceleton = () =>
  Array(5)
    .fill("f")
    .map(() => (
      <div className="h-8 w-full p-2">
        <div className="animate-pulse bg-neutral-600 h-full w-full rounded-xl" />
      </div>
    ));

export default SelectSceleton;
