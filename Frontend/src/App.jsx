// import { useState } from 'react'
import Button from './components/Button/Button'
import Form from './components/ContactForm/Form'
import ContactList from './components/ContactList/ContactList'


function App() {
  

  return (
    <div>
      <Form />
      <ContactList />
    </div>
  )
}

export default App


/*
<Button onClick={() => alert('Clicked!')}>
        Add Contact
      </Button>
*/