import axios from "axios";
import { CryptoCurrenciesResponseSchema, CryptoPriceSchema } from '../schema/crypto-schema'
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
    const URL = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${pair.criptocurrency}&tsyms=${pair.currency}`

    const { data: { DISPLAY } } = await axios(URL)
    const result = CryptoPriceSchema.safeParse(DISPLAY[pair.criptocurrency][pair.currency])
    
    if (result.success) {
        console.log(result.data);
        return result.data
    }
}
