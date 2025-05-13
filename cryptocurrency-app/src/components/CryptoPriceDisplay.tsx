import { useCryptoStore } from "../store"

export default function CryptoPriceDisplay() {

    const result = useCryptoStore((state) => state.result)

    return (
        <div>
            <h2>Cotización de Criptomoneda</h2>
            <div className="result">
                <div>
                    <p>Precio es: <span>{ result.PRICE }</span></p>
                </div>
            </div>
        </div>
    )
}
