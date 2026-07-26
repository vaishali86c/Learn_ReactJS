import './App.css'
import Form from './components/form'
import { MyCar, MyCars} from './components/myCar'
import { MyList, UserList } from './components/myList'

function App() {

  return (
    <>
      <div className="App">
        <h1>Hello World !!</h1>
        <MyList />
        <UserList />
        <MyCar />
        <MyCars />
        <Form />
      </div>

    </>
  )
}

export default App
