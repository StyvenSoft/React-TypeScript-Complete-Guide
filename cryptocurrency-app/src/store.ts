import { devtools } from "zustand/middleware";
import { create } from "zustand";
import type { Cryptocurrency, Pair } from "./types";
import { fetchCurrentCryptoPrice, getCrypto } from "./services/CryptoService";

type CryptoStore = {
    cryptocurrencies: Cryptocurrency[]
    fetchCrypto: () => Promise<void>
    fetchData: (pair: Pair) => Promise<void>
}

export const useCryptoStore = create<CryptoStore>()(devtools((set) => ({
    cryptocurrencies: [],
    fetchCrypto: async () => {
        const cryptocurrencies = await getCrypto()
        set(() => ({
            cryptocurrencies
        }))
    },

    fetchData: async (pair) => {
        await fetchCurrentCryptoPrice(pair) 
    }
})))