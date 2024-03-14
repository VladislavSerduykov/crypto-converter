import { nanoid } from "nanoid";

interface Option {
    name: string
    key: string,
    icon: string,
}

export const optionList: Option[] = [{name:'BTC',key:nanoid(),icon:``},{name:'ETH',key:nanoid()},{name:'USDT',key:nanoid()}];
