import React from 'react'
import Button from '../Button/Button'



const ContactCard = ({contact,handleDelete}) => {    
    
  return (
    <li className='bg-gray-200 rounded flex justify-between items-center py-3 px-3'>
       <strong>
         {contact.name} | {contact.email} | {contact.phone}
       </strong> 

       <Button 
        className='bg-blue-500 py-2 w-fit px-3 text-white rounded' 
        onClick= {handleDelete}>Delete</Button>
    </li>
  )
}

export default ContactCard