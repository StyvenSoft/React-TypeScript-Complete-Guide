import { useFetch } from './useFetch'
import './App.css'

function App() {
  const { data, loading, error, handleCancelRequest } = useFetch('https://jsonplaceholder.typicode.com/users')

  return (
    <div className='App'>
      <h1>Data Feching</h1>
      <div className='card'>
        <ul>
          {error && <li>Error: {error}</li>}
          {loading && <li>Loading...</li>}
          {data?.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
      <button onClick={handleCancelRequest}>Cancel</button>
    </div>
  )
}

export default App
