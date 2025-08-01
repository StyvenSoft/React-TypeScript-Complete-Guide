import MenuItem from "./components/MenuItem";
import OrderContents from "./components/OrderContent";
import { menuItems } from "./data/db"
import useOrder from "./hooks/useOrdet";
import OrderTotal from "./components/OrderTotal";
import TipPercentageForm from "./components/TipPercentageForm";

function App() {

  const { order, addItem, removeItem, tip, setTip, placeOrder } = useOrder()

  return (
    <>
      <header className="bg-sky-950 py-5">
        <h1 className="text-center text-2xl text-white">Calculadora de Propinas y consumo</h1>
      </header>
      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        <div className="p-5">
          <h2 className="text-4xl font-black">Menú</h2>
          <div className="space-y-3 mt-10">
            {menuItems.map(item => (
              <MenuItem
                key={item.id}
                item={item}
                addItem={addItem}
              />
            ))}
          </div>
        </div>
        <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
          {order.length > 0 ? (
            <>
              <OrderContents
                order={order}
                removeItem={removeItem}
              />
              <TipPercentageForm
                setTip={setTip}
                tip={tip}
              />
            </>
          ) : (
            <p className="text-center">La order esta vacia</p>
          )}
          <OrderTotal
            order={order}
            tip={tip}
            placeOrder={placeOrder}
          />
        </div>
      </main>
    </>
  )
}

export default App
