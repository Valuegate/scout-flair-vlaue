import React,{useState,} from 'react'
// import {useQuery} from 'react-query'
// import { Verify } from '../../api/UserInformation'
import {Box,Text, Spinner, Button } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import Swal from 'sweetalert2';

const VerifyEmail = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    
const handleSubmit = ()=>{
        //e.preventDefault();
        
const email=JSON.parse(sessionStorage.getItem('email'));
const mail = email.replace('@','%40')
      
   const input = {
    email: email,
    };
    setLoading(true);

    axios({
      method: 'get',
      responseType: 'json', 
      url: `https://scoutflair.top:8080/scoutflair/v1/signup/reSendVerificationMail?email=${mail}`,
      headers:{
        Authorization: `Bearer ${JSON.parse(sessionStorage.getItem('token'))}`
      },
     data: input,
    })
      .then(response => {
        setLoading(false);
       
          navigate('/login')
         
   
      })
      .catch(err => {
        console.log(err?.response)
        setLoading(false);
         Swal.fire({
  title: 'Error',
  text: err?.response?.data,
  icon: 'error',
})
      });
    }

  //const { data,  isLoading } = useQuery(['recoverData', mail], () => Verify(mail));

  return (
    <Box w='full' h='100vh' display='flex' bg='#000' color='#fff' alignItems='center' justifyContent='center'  >
        <Box w='50%' h='50%' flexDirection='column' boxShadow='md' p='1rem' display='flex' alignItems='center' justifyContent='center' >
          <Text>Your Email is been Verified. </Text>
          <Text fontSize='' mt='.5rem' >Proceed  to your mail to complete your verification...</Text>
            <Text mt='.5rem'>{loading?<Spinner/>: 'Proceed to your mail to get your token'}</Text>
            <Button mt='.5rem' onClick={handleSubmit} >Verify</Button>
        </Box>
    </Box>
  )
}

export default VerifyEmail