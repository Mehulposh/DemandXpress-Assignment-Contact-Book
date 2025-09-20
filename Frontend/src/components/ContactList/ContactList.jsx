import React,{useState,useEffect} from 'react'
import { deleteContact, fetchContacts } from '../../../ApiCall/ApiCall';
import ContactCard from '../ContactCard/ContactCard';
import Button from '../Button/Button';

const ContactList = () => {
  const [contacts, setContacts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const limit = 10;

  const fetchData = async (page,limit) => {
        try {
            const response = await fetchContacts(page,limit);
            setContacts(response.data.data || []);
            setTotalPages(response.data.totalPages || 1);

        } catch (error) {
            console.log(error);
            
        }
    };


  useEffect( () => {

    fetchData(page,limit);
  },[page])


  const handleDelete = async (id) => {
    try {
        const response = await deleteContact(id);
        console.log(response);
        
        fetchData(page,limit);
    } catch (error) {
        console.log(error);
        
    }
  }

  const handleNext = () => {
    if(page < totalPages) {
        setPage(page + 1)
    }
  }

   const handlePrevious = () => {
    if(page > 1) {
        setPage(page - 1)
    }
  }
  return (
    <div>
        <ol>
            {contacts.map(contact => (
            <ContactCard key={contact._id} contact={contact} handleDelete={() => handleDelete(contact._id)}/>
            ))}
        </ol>

        <div>
            <Button onClick={handlePrevious} disabled={page == 1}>Prev</Button>
            <span>{page}</span>
            <Button onClick={handleNext} disabled={page === totalPages}>Next</Button>
        </div>
    </div>
  )
}

export default ContactList