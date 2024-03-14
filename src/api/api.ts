import axios from "axios";
import { PriceData } from "../types/PriceData";
import { BASE_URL } from "../utils/constants";


const getPrice = async (coin: string): Promise<PriceData> => {
    const url = `${BASE_URL}/tickers?category=spot&usdIndexPrice=${coin}USDT`;
    const response = await axios.get(url);
    const data = response.data.result;
    console.log(data)
    return {
      symbol: data.list[0].symbol,
      price: data.list[0].lastPrice,
    };
  };





export { getPrice };