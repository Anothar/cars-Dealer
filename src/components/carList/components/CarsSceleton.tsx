const CarsSceleton = () =>
  Array(5)
    .fill("f")
    .map((el, i) => (
      <li className="w-[190px] border rounded-md p-1 h-[65.6px] p-3" key={i}>
        <div className="flex flex-col justify-between h-full">
          <div className="animate-pulse bg-neutral-600 h-4 rounded-xl" />
          <div className="animate-pulse bg-neutral-600 h-4 rounded-xl" />
        </div>
      </li>
    ));

export default CarsSceleton;
