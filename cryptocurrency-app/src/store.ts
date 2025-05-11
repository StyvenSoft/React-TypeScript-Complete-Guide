import axios from "axios";
import { create } from "zustand";
import { CryptoCurrenciesResponseSchema } from "./schema/crypto-schema";
import type { Cryptocurrency } from "./types";

type CryptoStore = {
    cryptocurrencies: Cryptocurrency[]
    fetchCrypto: () => Promise<void>
}

async function getCrypto() {
    const URL = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'
    const { data: { Data } } = await axios(URL)
    const resultData = CryptoCurrenciesResponseSchema.safeParse(Data)

    if (resultData.success) {
        return resultData.data
    }

}

export const useCryptoStore = create<CryptoStore>((set) => ({
    cryptocurrencies: [],
    fetchCrypto: async () => {
        const cryptocurrencies = await getCrypto()
        set(() => ({
            cryptocurrencies
        }))
    }
}))