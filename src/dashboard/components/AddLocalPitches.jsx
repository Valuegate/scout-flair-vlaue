import { Box, Button, Text, Spinner } from '@chakra-ui/react'
import { useState } from 'react';
import InputValue from './InputValue'
import axios from 'axios'
import Swal from 'sweetalert2';

const AddLocalPitches = ({onClose}) => {

     const [loading, setLoading] = useState(false);
     const [name, setName] = useState();
     const [address, setAddress] = useState();
     const [lga, setLga] = useState();
     const [latitude, setLatitude] = useState();
     const [longitude, setLongitude] = useState();
     const [surface, setSurface] = useState();
     const [state, setState] = useState();
     const [width, setWidth] = useState();  
    
    const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
     const input= {
        name: name,
        address: address,
        state: state,
        lga: lga,
        latitude: latitude,
        longitude: longitude,
        surface: surface,
        width: width,
    }
    

    try {
      const headers= {
        Authorization: `Bearer ${JSON.parse(sessionStorage.getItem('token'))}`,
        'Access-Control-Allow-Origin': '*',
        'Content-type': 'Application/json',
        'Access-Control-Allow-Headers':
          'x-access-token, Origin, X-Requested-With, Content-Type, Accept',
      };
      const response = await axios.post('https://scoutflair.top:8080/api/v1/pitches/addLocalPitches', input,{ headers });
      onClose();
       Swal.fire({
  title: 'Success',
  text: response.data.message,
  icon: 'sucess',
})
      setLoading(false)
    } catch (error) {
      setLoading(false)
       Swal.fire({
  title: 'Error',
  text: error,
  icon: 'error',
})
    }
  };

  return (
    <Box w='full' h='100%' display='flex' justifyContent='space-between' p='1rem'  flexDirection='column' >
      <form style={{width:'100%',height:'100%',display:'flex',flexDirection:'column',justifyContent:'space-between'}} onSubmit={handleSubmit}>
        <Box w={["full",'100%']}>
            <Text fontSize='28px' fontWeight='700' >Add Local Pitch</Text>
            <Box mt='1rem'>
              <InputValue placeholder='name' name='name' value={name} onChange={(e)=>setName(e.target.value)}  text='Name:'/>
               <InputValue placeholder='address' name='address' value={address} onChange={(e)=>setAddress((e).target.value)}  text='Address:'/>
               <InputValue placeholder='state' name='state' value={state} onChange={(e)=>setState(e.target.value)}  text='State:'/>
               <InputValue placeholder='lga' name='lga' value={lga} onChange={(e)=>setLga(e.target.value)}  text='LGA:'/>
               <InputValue placeholder='latitude' name='latitude' value={latitude} onChange={(e)=>setLatitude(e.target.value)}  text='Latitude:'/>
               <InputValue placeholder='surface' name='surface' value={surface} onChange={(e)=>setSurface(e.target.value)}  text='Surface:'/>
               <InputValue placeholder='width' name='width' value={width} onChange={(e)=>setWidth(e.target.value)}  text='Width:'/>
               <InputValue placeholder='longitude' name='longitude' value={longitude} onChange={(e)=>setLongitude(e.target.value)}  text='Longitude:'/>
            </Box>
        </Box>
        <Button type='submit' onClick={handleSubmit} mt='1rem' >{loading? <Spinner/>:'Submit'}</Button>
        </form>
    </Box>
  )
}

export default AddLocalPitches