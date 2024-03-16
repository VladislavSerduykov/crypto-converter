import React from "react";
import swapIcon from "../../assets/swap-icon.svg";

type ChangeButtonProps = {onClick: () => void};

export default function ChangeButton({onClick}: ChangeButtonProps): JSX.Element {
  return (
    <div>
      <div className="flex items-center justify-center">
        <img onClick={onClick} className="hover: cursor-pointer " src={swapIcon} alt="" />
      </div>
    </div>
  );
}
