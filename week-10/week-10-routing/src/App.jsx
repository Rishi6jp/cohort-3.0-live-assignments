
import './App.css'
import { useState , useRef} from 'react'

// a clock with a start and stop button
function App() {
    const [currentCount, setCurrentCount] = useState(0)
    let timer = useRef();

    function startClock() {
        let value = setInterval(function(){
            setCurrentCount(c=> c+1)
        },1000);
        timer.current = value;
    }

    function stopClock() {
        console.log(timer.current);
        clearInterval(timer.current);
    }
  

  return (
    <div>
      {currentCount}
      <br />
      <button onClick={startClock}>start</button>
      <button onClick={stopClock}>stop</button>

    </div>
  )
}

export default App