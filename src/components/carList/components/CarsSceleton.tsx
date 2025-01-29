const CarsSceleton = () =>
  Array(2)
    .fill("f")
    .map((el, i) => (
      <li className="w-[190px]" key={i}>
        <div className="flex flex-col gap-3 h-[125px]">
          <div className="animate-pulse bg-neutral-600 h-4 rounded-xl" />
          <div className="animate-pulse bg-neutral-600 h-4 rounded-xl" />
        </div>
      </li>
    ));

export default CarsSceleton;
