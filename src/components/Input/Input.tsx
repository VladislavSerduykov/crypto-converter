import React, { useContext } from "react";
import icon from "../../assets/BTC_icon.webp";
import arrows from "../../assets/arrows.svg";

interface InputProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  coinName: string;
  icon: string;
}

const Input: React.FC<InputProps> = (props): JSX.Element => {
  const maxInputLength = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length > event.target.maxLength) {
      event.target.value = event.target.value.slice(0, event.target.maxLength);
    }
  };

  const preventMinus = (e: React.KeyboardEvent) => {
    if (e.key === "-") {
      e.preventDefault();
    }
  };

  return (
    <div className="flex bg-white w-60 border-cyan-700 border-solid border-2 rounded-xl focus:none">
      <input
        className="font-sans text-right p-2 text-base w-full rounded-xl focus:outline-none"
        value={props.value || ""}
        onInput={maxInputLength}
        onKeyDown={preventMinus}
        onChange={props.onChange}
        type="number"
        maxLength={8}
      ></input>
      <span className="w-1 h-full bg-cyan-700"></span>
      <div className="w-1/4 p-2 flex gap-1 flex-col items-center justify-center hover:cursor-pointer">
        <img className="w-5 h-5" src={props.icon} alt="coin icon" />
        <p className="font-sans text-sm">{props.coinName}</p>
      </div>
      <div className="flex justify-center items-center hover:cursor-pointer">
        <img src={arrows} alt="" />
      </div>
    </div>
  );
};

export default Input;
