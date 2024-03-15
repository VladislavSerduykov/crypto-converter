import React, { useEffect, useState } from "react";
import { getPrice } from "../api/api";
import Input from "./Input/Input";
import ChangeButton from "./ChangeButton/ChangeButton";

const Converter: React.FC = () => {
  const [selectedCoin, setSelectedCoin] = useState("BTC");
  const [amount, setAmount] = useState("");


  const handleCoinChange = async (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const coin = event.target.value;
    setSelectedCoin(coin);
    const priceData = await getPrice(coin);
    console.log(priceData);
    setUsdtEquivalent(
      calculateEquivalent(parseFloat(priceData.price), parseFloat(amount))
    );
  };

  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newAmount = event.target.value;
    setAmount(newAmount);
    if (newAmount) {
      const priceData = getPrice(selectedCoin);
      console.log(priceData);
      setUsdtEquivalent(
        calculateEquivalent(priceData.price, parseFloat(newAmount))
      );
    } else {
      setUsdtEquivalent("0");
    }
  };

  const calculateEquivalent = (price: string, amount: number) => {
    return (parseFloat(price) * amount).toFixed(2);
  };

  return (
    <div style={{width: '800px'}} className="flex bg-stone-200 items-center justify-center p-10 flex-col">
      <h1 className="text-4xl font-bold">Выберите валюту</h1>
      <div className="flex justify-center w-full mt-8">
        <Input
          value={selectedCoin}
          onChange={handleCoinChange}
        />
        <div className="w-8 flex justify-center items-center mr-1 ml-1">
        <ChangeButton/>
        </div>
        <Input
          value={selectedCoin}
          onChange={handleCoinChange}
        />
      </div>
    </div>
  );
};

export default Converter;
