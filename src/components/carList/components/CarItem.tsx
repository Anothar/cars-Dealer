import { FC } from "react";

interface Props {
  key: number,
  Make_Name: string,
  Model_Name: string,
}

const CarItem: FC<Props> = ({
  Make_Name,
  Model_Name,
}) => (
  <>
    <li className="w-[190px] border rounded-md p-1">
      <div className="text-sm leading-6 flex flex-col justify-between p-1" title={Make_Name}>
        <h3 className="font-semibold break-words line-clamp-3">{Make_Name}</h3>

        <p title={Model_Name}>{Model_Name}</p>
      </div>
    </li>
  </>
);

export default CarItem;
