import axios from "axios";
import { CryptoCurrenciesResponseSchema } from '../schema/crypto-schema'

export async function getCrypto() {
    const URL = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD'
    const { data: { Data } } = await axios(URL)
    const resultData = CryptoCurrenciesResponseSchema.safeParse(Data)

    if (resultData.success) {
        return resultData.data
    }

}