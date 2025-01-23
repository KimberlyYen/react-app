import ListGroup from './components/ListGroup'
import Button from './components/Button'
import Alert from './components/Alert'
import { useState } from 'react'

const App = () => {

  const items = ['Tokyo', 'London', 'Taipei', 'France', 'Italy']
  
  const [visible, setVisible] = useState(false)


  return (
    <div>
      <ListGroup items={ items } heading={"Cities"}/>

      { visible && <Alert onClose={() => setVisible(false) }/> }
      <Button
      onClick={ () => setVisible(true) }
      >
        My Button
      </Button>
    </div>
  )
}

export default App

