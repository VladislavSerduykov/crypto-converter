import React, { useEffect, useState } from "react";
import { getPrices } from "../api/api";
import Input from "./Input/Input";
import ChangeButton from "./ChangeButton/ChangeButton";
import Loader from "./Loader/Loader";

const Converter: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [fromCurrency, setFromCurrency] = useState({
    icon: "",
    symbol: "ETH",
    price: "",
  });
  const [toCurrency, setToCurrency] = useState({
    icon: "",
    symbol: "BTC",
    price: "",
  });

  const [selectedCoin, setSelectedCoin] = useState("");
  const [amount, setAmount] = useState("");

  useEffect(() => {
    setIsLoading(true);
    getPrices([fromCurrency.symbol, toCurrency.symbol]).then((data) => {
      setFromCurrency({
        ...fromCurrency,
        icon: data[0].icon,
        price: data[0].price,
      });
      setToCurrency({
        ...toCurrency,
        icon: data[1].icon,
        price: data[1].price,
      });
      setIsLoading(false);
    });
  }, []);

  const calculate = () => {
    const fromPrice = parseFloat(fromCurrency.price);
    const toPrice = parseFloat(toCurrency.price);

    return fromPrice / toPrice;
  };

  return (
    <div
      style={{ width: "800px" }}
      className="flex items-center justify-center p-10 flex-col"
    >
      {isLoading ? (
        <Loader />
      ) : (
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold">Выберите валюту</h1>
          <div onClick={calculate} className="flex justify-center w-full mt-8">
            <Input
              value={fromCurrency.price}
              coinName={fromCurrency.symbol?.toUpperCase()}
              icon={fromCurrency.icon}
              onChange={(e) =>
                setFromCurrency({ ...fromCurrency, price: e.target.value })
              }
            />
            <div className="w-8 flex justify-center items-center mr-1 ml-1">
              <ChangeButton coinsList={[]} />
            </div>
            <Input
              value={toCurrency.price}
              coinName={toCurrency.symbol?.toUpperCase()}
              icon={toCurrency.icon}
              onChange={(e) =>
                setToCurrency({ ...toCurrency, price: e.target.value })
              }
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Converter;
