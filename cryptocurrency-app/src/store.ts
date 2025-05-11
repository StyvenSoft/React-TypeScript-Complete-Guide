import { devtools } from "zustand/middleware";
import { create } from "zustand";
import type { Cryptocurrency } from "./types";
import { getCrypto } from "./services/CryptoService";

type CryptoStore = {
    cryptocurrencies: Cryptocurrency[]
    fetchCrypto: () => Promise<void>
}

export const useCryptoStore = create<CryptoStore>()(devtools((set) => ({
    cryptocurrencies: [],
    fetchCrypto: async () => {
        const cryptocurrencies = await getCrypto()
        set(() => ({
            cryptocurrencies
        }))
    }
})))