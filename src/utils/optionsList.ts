import { nanoid } from "nanoid";
import { Option } from "../types/OptionInterface";

export const optionList: Option[] = [
  { name: "BTC", key: nanoid(), icon: `` },
  { name: "ETH", key: nanoid(), icon: `` },
  { name: "USDT", key: nanoid(), icon: `` },
];
