import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Guitar from './components/Guitar'
import { db } from './data/db'

function App() {

  const [data, setData] = useState(db);
  const [cart, setCart] = useState([])

  function addToCart(item) {
    console.log('Agregando');
    const intemExists = cart.findIndex(guitar => guitar.id === item.id)
    if (intemExists >= 0) {
      console.log('Existe');
      const updateCart = [...cart]
      updateCart[intemExists].quantity++
      setCart(updateCart)
    } else {
      item.quantity = 1
      setCart([...cart, item])
    }
  }

  return (
    <>
      <Header 
        cart={cart}
      />

      <main class="container-xl mt-5">
        <h2 class="text-center">Nuestra Colección</h2>

        <div class="row mt-5">
          {data.map((guitar) => (
            <Guitar
              key={guitar.id}
              guitar={guitar}
              setCart={setCart}
              addToCart={addToCart}
            />
          ))}
        </div>
      </main>

      <footer class="bg-dark mt-5 py-5">
        <div class="container-xl">
          <p class="text-white text-center fs-4 mt-4 m-md-0">GuitarLA - Todos los derechos Reservados</p>
        </div>
      </footer>
    </>
  )
}

export default App
