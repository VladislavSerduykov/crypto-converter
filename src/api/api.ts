import axios from "axios";
import { PriceData } from "../types/PriceData";
import { BASE_URL, api_config } from "../utils/constants";

const getPrice = async (): Promise<PriceData> => {
  const url = `${BASE_URL}/exchanges`;
  const response = await axios.get(url, api_config);
  const data = response.data.result;
  return {
    symbol: data.list[0].symbol,
    price: data.list[0].lastPrice,
  };
};

const getCoinsList = async () => {
  const url = `${BASE_URL}/coins/list`;
  const response = await axios.get(url, api_config);
  const data = response.data.result;
  return data;
};

export { getPrice };
