import './App.css'
import { MyCar, MyCars} from './components/myCar'
import { MyForm, MyFormSubmit } from './components/MyForm'
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
        <MyForm />
        <MyFormSubmit />
      </div>

    </>
  )
}

export default App
