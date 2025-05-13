import { useMemo } from "react"
import { useCryptoStore } from "../store"

export default function CryptoPriceDisplay() {

    const result = useCryptoStore((state) => state.result)
    const hasResult = useMemo(() => Object.keys(result).length != 0, [result])

    return (
        <div className="wrapper">
            {hasResult && (
                <>
                    <h2 className="title-price">Cotización de Criptomoneda</h2>
                    <div className="result">
                        <img src={`https://cryptocompare.com/${result.IMAGEURL}`} alt="Imagen Criptomoneda" />
                        <div>
                            <p>Precio de Moneda: <span>{result.PRICE}</span></p>
                            <p>Precio más alto del día: <span>{result.HIGHDAY}</span></p>
                            <p>Precio más bajo del día: <span>{result.LOWDAY}</span></p>
                            <p>Valoracipon últimas 24 hrs: <span>{result.CHANGEPCT24HOUR}</span></p>
                            <p>Última Actualización: <span>{result.LASTUPDATE}</span></p>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}
