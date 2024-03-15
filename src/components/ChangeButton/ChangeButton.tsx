import React from "react";
import swapIcon from "../../assets/swap-icon.svg";

type ChangeButtonProps = {};

export default function ChangeButton({}: ChangeButtonProps): JSX.Element {
  return (
    <div>
      <div className="flex items-center justify-center">
        <img className="hover: cursor-pointer " src={swapIcon} alt="" />
      </div>
    </div>
  );
}
