import Login from './Login'
import Login2 from './Login2'
function App () {
  const isLoggedIn = true
  if (isLoggedIn) {
    return <Login />
  }
  return <Login2 />
}

export default App
