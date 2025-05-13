import axios from "axios";
import { CryptoCurrenciesResponseSchema } from '../schema/crypto-schema'
import type { Pair } from "../types";

export async function getCrypto() {
    const URL = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD'
    const { data: { Data } } = await axios(URL)
    const resultData = CryptoCurrenciesResponseSchema.safeParse(Data)

    if (resultData.success) {
        return resultData.data
    }

}

export async function fetchCurrentCryptoPrice(pair: Pair) {
    console.log(pair);
    const URL = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${pair.criptocurrency}&tsyms=${pair.currency}`

    const { data } = await axios(URL)
    console.log(data);
    
}
