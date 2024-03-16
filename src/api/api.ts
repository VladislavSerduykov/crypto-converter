import axios from "axios";
import { PriceData } from "../types/PriceData";
import { BASE_URL, api_config } from "../utils/constants";
import { convertSymbol } from "../utils/convertSymbol";

const url = `${BASE_URL}/coins/`;

const getPrice = async (id: string | string[]): Promise<PriceData> => {
  if (typeof id === "string") {
    convertSymbol(id);
    const response = await axios.get(`${url}${id}`, api_config);
    const data = response.data;
    return {
      icon: data.image.small,
      symbol: data.symbol,
      price: data.market_data.current_price.usd.toString(),
    };
  }
};

const getPrices = async (idArray: string[]) => {
  const pricesArray: PriceData[] = [];

  await Promise.all(
    idArray.map((id) => {
      const convertId = convertSymbol(id);
      return axios
        .get(`${url}${convertId}`, api_config)
        .then((response) => {
          const data = response.data;
          return pricesArray.push({
            icon: data.image.small,
            symbol: data.symbol,
            price: data.market_data.current_price.usd.toString(),
          });
        })
        .catch((err) => {
          console.log(err);
        })
    })
  );
    
  return pricesArray;
};

export { getPrice, getPrices };
