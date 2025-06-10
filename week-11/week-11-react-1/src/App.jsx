
import { useState , useRef} from 'react';
import './App.css'
import { usePrev } from './hooks/use-prev';

function useDebounce(originalFn) {

  const currentClock = useRef();

  const fn = () => {
    clearInterval(currentClock.current);
    currentClock.current = setTimeout(originalFn, 200)
  }

  return fn;

}

function App() {
  function sendDataToBackend() {
    fetch("api.amazom.com/search/")
  }

  const debouncedFn = useDebounce(sendDataToBackend);
  return (
    <>
      <input type="text" onChange={debouncedFn}/>
    </>
  )
}



export default App;