import './App.css'
import { Counter, FavoriteColor } from './components/Hooks'
import { MyCar, MyCars} from './components/myCar'
import { FormSelected, MultipleInput, MyForm, MyFormSubmit, TextArea } from './components/MyForm'
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
        <MultipleInput />
        <br />
        <FavoriteColor />
        <Counter />
      </div>

    </>
  )
}

export default App
