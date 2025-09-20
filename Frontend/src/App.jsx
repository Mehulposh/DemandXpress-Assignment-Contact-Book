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
    <div className='space-y-3 bg-gray-600 h-full p-2'>
      <Header/>
     
      <Form handleAdd={reloadContacts}/>
      <ContactList reloadflag={refresh}/>
    </div>
  )
}

export default App


