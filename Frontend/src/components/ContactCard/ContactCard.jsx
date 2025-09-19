import React from 'react'
import Button from '../Button/Button'



const ContactCard = ({contact,handleDelete}) => {    
    
  return (
    <li>
       <strong>
         {contact.name} | {contact.email} | {contact.phone}
       </strong> 

       <Button onClick= {handleDelete}>Delete</Button>
    </li>
  )
}

export default ContactCard