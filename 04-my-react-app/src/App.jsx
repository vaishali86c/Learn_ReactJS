import './App.css'
import { MyCar, MyCars} from './components/myCar'
import { FormSelected, MyForm, MyFormSubmit, TextArea } from './components/MyForm'
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
        <TextArea />
        <hr />
        <FormSelected />
      </div>

    </>
  )
}

export default App
