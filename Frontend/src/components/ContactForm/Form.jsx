import React, { useState } from 'react'
import Button from '../Button/Button'
// import axios from 'axios'
// import backend from '../../../ApiEndpoint/endpoint'
import { addContact  } from '../../../ApiCall/ApiCall'

const Form = ({handleAdd}) => {
  const [formData,setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  })

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await addContact(formData);
      if(response.status === 201){
        alert('Contact Added')
      }
      // console.log(response);
      handleAdd()
    } catch (error) {
      alert(error)
      
    }

    setFormData({ name: "", email: "", phone: "" });
   
  }
  return (
    <div className='flex flex-col justify-center items-center gap-4 mb-4'>
       <h3 className='text-2xl font-semibold text-amber-500 '>Add New Contact</h3>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4  justify-start'>
        <label className='flex gap-10 items-center text-lg font-semibold text-gray-100'>
          Name: 
          <input   
            type='text' 
            placeholder='Write name'
            className='bg-gray-400 p-2 rounded'
            required
            value={formData.name}
            onChange={(e) => setFormData({...formData,name: e.target.value})}
            />
        </label>
        <label className='flex gap-11 items-center text-lg font-semibold text-gray-100'>
          Email: 
          <input 
            type='email' 
            placeholder='Write email'
            className='bg-gray-400 p-2 rounded'
            required
            value={formData.email}
            onChange={(e) => setFormData({...formData,email: e.target.value})}
            />
        </label>
        <label className='flex gap-2 items-center text-lg font-semibold text-gray-100'>
          Phone No: 
          <input 
            type='tel' 
            placeholder='Write phone number'
            className='bg-gray-400 p-2 rounded'
            required
            value={formData.phone}
            onChange={(e) => setFormData({...formData,phone: e.target.value})}
            />
        </label>
        

        <Button type='submit' className='bg-blue-500 py-2 w-fit px-3 text-white rounded'>
          Add Contact
        </Button>
      </form>
    </div>
  )
}

export default Form