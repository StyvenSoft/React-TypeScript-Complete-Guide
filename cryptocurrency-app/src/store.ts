import { devtools } from "zustand/middleware";
import { create } from "zustand";
import type { Cryptocurrency, CryptoPrice, Pair } from "./types";
import { fetchCurrentCryptoPrice, getCrypto } from "./services/CryptoService";

type CryptoStore = {
    cryptocurrencies: Cryptocurrency[]
    result: CryptoPrice
    fetchCrypto: () => Promise<void>
    fetchData: (pair: Pair) => Promise<void>
}

export const useCryptoStore = create<CryptoStore>()(devtools((set) => ({
    cryptocurrencies: [],
    // Objeto con atributos del CryptoPriceSchema
    result: {} as CryptoPrice,
    fetchCrypto: async () => {
        const cryptocurrencies = await getCrypto()
        set(() => ({
            cryptocurrencies
        }))
    },

    fetchData: async (pair) => {
        const result = await fetchCurrentCryptoPrice(pair)
        console.log(result);
        
    }
})))