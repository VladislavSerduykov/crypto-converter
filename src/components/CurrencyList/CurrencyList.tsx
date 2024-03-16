import { PriceData } from "../../types/PriceData";

type CurrencyListProps = {
    coinsList: PriceData[]
};

function CurrencyList({coinsList}: CurrencyListProps) {
  return (
    <div className="w-1/4 p-2 flex gap-1 flex-col items-center justify-center hover:cursor-pointer">
      {coinsList.map((coin) => (
        <div>
            <img className="w-5 h-5" src={coin.icon} alt="coin icon" />
      <p className="font-sans text-sm">{coin.coinName}</p>
        </div>
      ))}
      
    </div>
  );
}

export default CurrencyList;
