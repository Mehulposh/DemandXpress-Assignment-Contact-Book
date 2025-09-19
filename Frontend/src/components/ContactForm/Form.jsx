import React, { useState } from 'react'
import Button from '../Button/Button'
import axios from 'axios'
import backend from '../../../ApiEndpoint/endpoint'

const Form = () => {
  const [formData,setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  })

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${backend.endpoint}`,formData);
      console.log(response);
      
    } catch (error) {
      console.log(error);
      
    }

    setFormData({ name: "", email: "", phone: "" });
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name: 
          <input   
            type='text' 
            placeholder='Write name'
            value={formData.name}
            onChange={(e) => setFormData({...formData,name: e.target.value})}
            />
        </label>
        <label>
          Email: 
          <input 
            type='email' 
            placeholder='Write email'
            value={formData.email}
            onChange={(e) => setFormData({...formData,email: e.target.value})}
            />
        </label>
        <label>
          Phone No: 
        </label>
        <input 
            type='number' 
            placeholder='Write phone number'
            value={formData.phone}
            onChange={(e) => setFormData({...formData,phone: e.target.value})}
            />

        <Button type='submit'>
          Add Contact
        </Button>
      </form>
    </div>
  )
}

export default Form