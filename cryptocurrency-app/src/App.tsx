import { useEffect } from "react"
import CriptoSearchForm from "./components/CriptoSearchForm"
import { useCryptoStore } from "./store"

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
        </div>
      </div>
    </>
  )
}

export default App
