import React,{useState,useEffect} from 'react'
import { deleteContact, fetchContacts } from '../../../ApiCall/ApiCall';
import ContactCard from '../ContactCard/ContactCard';
import Button from '../Button/Button';

const ContactList = ({reloadflag}) => {
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
  },[page,reloadflag])


  const handleDelete = async (id) => {
    try {

        const response = await deleteContact(id);
        alert(response.data.data.messsage);
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
    <div className='flex flex-col items-center gap-5'>
        <h3 className='text-2xl font-semibold text-amber-500 '>Saved Contacts</h3>

        <ol className='space-y-3'>
            {
                contacts.length > 0 ? (
                    contacts.map(contact => (
                        <ContactCard 
                            key={contact._id} 
                            contact={contact} 
                            handleDelete={() => handleDelete(contact._id)}

                        />
                    ))
                ) : (
                    <p>No Contacts Found</p>
                )
            }
        </ol>

        <div>
            <Button 
                className='bg-blue-500 py-2 w-fit px-3 text-white rounded' 
                onClick={handlePrevious} 
                disabled={page === 1}
            >
                Prev
            </Button>
            <span className='bg-gray-200 px-3 py-2 m-2 rounded font-semibold'>{`${page} / ${totalPages}`}</span>
            <Button 
                className='bg-blue-500 py-2 w-fit px-3 text-white rounded'
                onClick={handleNext} 
                disabled={page === totalPages}
            >
                Next
            </Button>
        </div>
    </div>
  )
}

export default ContactList