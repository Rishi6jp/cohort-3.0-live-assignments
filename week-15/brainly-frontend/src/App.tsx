
import './App.css'
import { Button } from './components/ui/Button'
import { PlusIcon } from './icons/PlusIcon'

function App() {

  return (
    <div>
      <Button variant='secondary' size='md' startIcon={<PlusIcon size="lg"/>} title="share"/>
    </div>
  )
}

export default App
