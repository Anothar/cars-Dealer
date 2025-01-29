import { LOADING_SVG } from "@/icons/loadingSvg";
import { FC } from "react";

const Loading: FC = () => (
  <div className="animate-spin">
    <LOADING_SVG />
  </div>
);

export default Loading;
