import React, { useEffect, useState } from "react";
import { getPrice } from "../api/api";
import { optionList } from "../utils/optionsList";
import Input from "./Input";

const Converter: React.FC = () => {
  const [selectedCoin, setSelectedCoin] = useState("BTC");
  const [amount, setAmount] = useState("");
  const [usdtEquivalent, setUsdtEquivalent] = useState("0");

  useEffect(() => {
    const priceData = getPrice(selectedCoin);
    console.log(priceData);
    setUsdtEquivalent(
      calculateEquivalent(priceData.price, parseFloat(amount))
    );
  })

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
    <div className="flex items-center flex-col">
      <h1 className="text-4xl font-bold">Выберите валюту</h1>
      <div className="flex mt-8">
        <div className="flex justify-center items-center gap-10">
          <Input optionList={optionList} value={selectedCoin} onChange={handleCoinChange}/>
          <div className="mb-4">
            <label
              htmlFor="amount-input"
              className="block text-gray-700 font-bold mb-2"
            >
              Amount:
            </label>
            <input
              type="number"
              id="amount-input"
              value={amount}
              onChange={handleAmountChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          I</div>
        </div>
      </div>
      <div className="flex justify-center mt-10"></div>
    </div>
  );
};

export default Converter;
