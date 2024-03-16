export function convertSymbol(id:string) : string  {
    switch (id) {
        case "BTC":
            id='bitcoin';
            break;
        case "ETH":
            id='ethereum'
            break;
        case "USDT":
            id.toLocaleLowerCase()
            break;
}
    return id
}