import './App.css'
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
      </div>

    </>
  )
}

export default App
