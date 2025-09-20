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
    <div className='space-y-3 bg-gray-600'>
      <Header/>
     
      <Form handleAdd={reloadContacts}/>
      <h3 className='text-xl font-semibold text-blue-500 '>Saved Contacts</h3>
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