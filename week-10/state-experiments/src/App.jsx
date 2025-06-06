
import './App.css'
import { useState, useContext , createContext} from 'react';

const BulbContext = createContext();

export function BulbProvider({children}) {
  const [bulbOn, setBulbOn] = useState(true);

  return <BulbContext.Provider value={{
        bulbOn,
        setBulbOn
      }}>
        {children}
      </BulbContext.Provider>

}

function App() {

  return (
    <>
      <BulbProvider>
        <LightBulb />
      </BulbProvider>
    </>
  )
}

function LightBulb() {

  return <div>
    <BulbState />
    <ToggleBulbState />
  </div>
}

function BulbState() {
  const {bulbOn} = useContext(BulbContext);

  return <div>
    {bulbOn ? "Bulb on" : "Bulb off"}
  </div>
}

function ToggleBulbState() {
  const {bublOn, setBulbOn} = useContext(BulbContext);
  function toggle(){
    setBulbOn(currentState => !currentState);
  }

  return <div>
    <button onClick={toggle} >Toggle the Bulb</button>
  </div>
}


export default App
