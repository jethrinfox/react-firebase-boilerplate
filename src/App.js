import React, { useContext } from 'react'
import Header from './components/Header'
import SignIn from './components/SignIn';
import SignOut from './components/SignOut';
import { GlobalContext } from './context/GlobalState';


function App() {

  const { user } = useContext(GlobalContext)

  return (
    <div className="App">
      <Header />
      <main>

        {user ? <SignOut /> : <SignIn />}

      </main>
    </div>
  );
}

export default App;
