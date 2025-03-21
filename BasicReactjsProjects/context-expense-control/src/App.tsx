import BudgeForm from "./components/BudgeForm"

function App() {

  return (
    <>
      <header className="bg-blue-400 py-8 max-h-72">
        <h1 className="uppercase text-center font-black text-3xl text-white">
          App planificador de Gastos
        </h1>
      </header>
      <div className="max-w-3xl mx-auto bg-white show-lg rounded-lg mt-10 p-10">
        <BudgeForm />
      </div>
    </>
  )
}

export default App
