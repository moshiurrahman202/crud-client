import './App.css'
import Users from './Components/Users'
const userInitialData = fetch("http://localhost:3000/users").then(res => res.json());
function App() {

  return (
    <>
      <h1>CRUD CLIENT</h1>
    <Users userInitialData={userInitialData}></Users>
    </>
  )
}

export default App
