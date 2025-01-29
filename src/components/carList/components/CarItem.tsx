import { UNVIEWED_SVG } from "@/icons/unviewedSvg";
import { VIEWED_SVG } from "@/icons/viewedSvg";
import Link from "next/link";
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
      <div className="relative h-[50px] text-sm leading-6" title={Make_Name}>
        <h3 className="font-semibold break-words line-clamp-3">{Make_Name}</h3>

        <div className="absolute bottom-0">
          <p className="line-clamp-1" title={Model_Name}>{Model_Name}</p>
        </div>
      </div>
    </li>
  </>
);

export default CarItem;
