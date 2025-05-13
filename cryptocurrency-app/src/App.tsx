import { useEffect } from "react"
import CriptoSearchForm from "./components/CriptoSearchForm"
import { useCryptoStore } from "./store"
import CryptoPriceDisplay from "./components/CryptoPriceDisplay"

function App() {

  const fetchCyptos = useCryptoStore((state) => state.fetchCrypto)
  useEffect(() => {
    fetchCyptos()
  }, [])

  return (
    <>
      <div className="container">
        <h1 className="title">Cryptocurrency <span>app</span></h1>
        <div className="content">
          <CriptoSearchForm />
          <CryptoPriceDisplay />
        </div>
      </div>
    </>
  )
}

export default App
