// import { useState } from 'react'
import { useState } from 'react'
import Button from './components/Button/Button'
import Form from './components/ContactForm/Form'
import ContactList from './components/ContactList/ContactList'
import Header from './components/Header/Header'


function App() {
  
  const [refresh,setRefresh] = useState(0)

  const reloadContacts = () => {
    setRefresh((prev) => prev + 1);
  }
  return (
    <div>
      <Header/>
      <Form handleAdd={reloadContacts}/>
      <ContactList reloadflag={refresh}/>
    </div>
  )
}

export default App


/*
<Button onClick={() => alert('Clicked!')}>
        Add Contact
      </Button>
*/