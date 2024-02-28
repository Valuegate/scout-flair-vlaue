import React,{useState} from 'react'
import { Box, Text, Button, Spinner } from '@chakra-ui/react'
import InputValue from '../components/InputValue'
import { useQuery } from 'react-query'
import {GetAcademy } from '../../api/UserInformation'
import axios from 'axios'

const AddFootballClub = () => {
    const { data} = useQuery('myData', GetAcademy);
    
        const [loading, setLoading] = useState(false)
    
    const initialFormState = {
      name:data?.name,
      founded:data?.founded,
      coach:data?.coach,
      country:data?.country,
      state:data?.state,
      lga:data?.lga,
      playersCount:data?.playersCount,
      completedCount:data?.completedCount,
      winCount:data?.winCount,
      lost:data?.lost,
      imageUrl:data?.imageUrl,
      logoUrl:data?.logoUrl,
      longitude:data?.longitude,
      latitude:data?.latitude,
      description:data?.description,
      address:data?.address,
      phone:data?.phone,
      email:data?.email,
      website:data?.website,
    }

  // Use a single state object to hold all input field values
  const [formState, setFormState] = useState(initialFormState);

    

    const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevFormState) => ({
      ...data,
      [name]: value,
    }));
  };
    
    const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target);
    const newAcademy = Object.fromEntries(formData.entries());
    

    try {
      const headers= {
        Authorization: `Bearer ${JSON.parse(sessionStorage.getItem('token'))}`,
        'Access-Control-Allow-Origin': '*',
        'Content-type': 'Application/json',
        'Access-Control-Allow-Headers':
          'x-access-token, Origin, X-Requested-With, Content-Type, Accept',
      };
      const response = await axios.post('https://scoutflair.top:8080/api/v1/est/fc/addFootballClub', newAcademy,{ headers });
      alert('Data posted successfully:', response.data);
      setLoading(false)
      // Handle success, reset form, show success message, etc.
    } catch (error) {
      setLoading(false)
      console.error('Error posting data:', error);
      // Handle error, show error message, etc.
    }
  };
  return (
    <Box>
         <Box p='1rem' borderRadius='8px' bg='white' alignItems='center' display='flex' justifyContent='space-between' >
            <Box border='1px solid #333' p='.5rem' alignItems='center' display='flex'>
                <Text>Football Club &nbsp;</Text>
                <Text display='inline-block' fontWeight='700' borderLeft='1px solid #333'>&nbsp;Add Football Club</Text>
            </Box>
        </Box>   
         <form onSubmit={handleSubmit}>
        <Box w='full' display='flex' flexDir={['column','row']} p='1rem' justifyContent='space-between' >
           

            <Box w={['full','50%']}  p='1rem 2rem' mt='1rem' >
                <Text fontWeight='700'>Basic Information</Text>
                <Box  borderRadius='8px' mt='.5rem' p='1rem' bg='#fff'>
                    <InputValue placeholder='Club Name' name="name"
                    value={formState.name}
                    onChange={handleInputChange} text='Club Name:'/>
                    <InputValue placeholder='Year Founded'  name="founded"
                    value={formState.founded}
                    type='date'
                    onChange={handleInputChange} text='Year Founded:'/>
                    <InputValue placeholder='number' name="coach" value={formState.coach} onChange={handleInputChange} text='Club Coach:'/>
                    <InputValue placeholder='number' name='country' value={formState.country} onChange={handleInputChange}  text='Country:'/>

                    <InputValue placeholder='number' name='state' value={formState.state} onChange={handleInputChange}  text='State:'/>
                    
                    <InputValue placeholder='number' name='lga' value={formState.lga} onChange={handleInputChange}  text='Local Government Area(LGA):'/>
                    
                </Box>
                <Text mt='1rem' fontWeight='700'>Contact Information</Text>
                <Box  borderRadius='8px' mt='.5rem' p='1rem' bg='#fff'>
                    <InputValue placeholder='Enter your address here' name='address' value={formState.address} onChange={handleInputChange}  text='Address:'/>
                    <InputValue placeholder='090 35 95 6558'  text='Phone Number:' name='phone' value={formState.phone} onChange={handleInputChange} />
                    <InputValue placeholder='Enter your email address'   text='Email Address:' name='email' value={formState.email} onChange={handleInputChange}/>
                    <InputValue placeholder='Enter your  address'   text='Web Address:' name='website' value={formState.website} onChange={handleInputChange}/>
              
                </Box>
                <Text mt='1rem' fontWeight='700'>Club Statistics</Text>
                <Box  borderRadius='8px' mt='.5rem' p='1rem' bg='#fff'>
                    <InputValue placeholder='Number of players' name='playersCount' value={formState.playersCount} onChange={handleInputChange}  text='Has Graduated:'/>
                    <InputValue placeholder='Has Competed'  text='Has Competed:' name='completedCount' value={formState.completedCount} onChange={handleInputChange} />
                    <InputValue placeholder='Has Won'   text='Has Won:' name='winCount' value={formState.winCount} onChange={handleInputChange}/>
                     <InputValue placeholder='Has Lost'   text='Have Lost:' name='lostCount' value={formState.lostCount} onChange={handleInputChange}/>
                </Box>
                
            </Box>
            <Box w={['full','50%']}  p='1rem 2rem' mt='1rem' >
                <Text fontWeight='700'>Profile Photo</Text>
                <Box  borderRadius='8px' mt='.5rem' p='.5rem' bg='#fff'>
                    <InputValue 
                    placeholder='Profile Picture Url' 
                    //type='file' 
                    text='Add Image'
                    name='profilePhoto' 
                    value={formState.profilePhoto}
                    onChange={handleInputChange}
                    />
                </Box>
                <Text fontWeight='700'>Club Logo</Text>
                <Box  borderRadius='8px' mt='.5rem' p='.5rem' bg='#fff'>
                    <InputValue 
                    placeholder='Logo Url' 
                    //type='file' 
                    text='Add Club Logo'
                    name='logoUrl' 
                    value={formState.logoUrl}
                    onChange={handleInputChange}
                    />
                </Box>
                 
               
               
                <Text mt='1rem' fontWeight='700'>More Club Information</Text>
                <Box  borderRadius='8px' mt='.5rem' p='1rem' bg='#fff'>
                    <InputValue placeholder='Enter longitude'  text='Geo-Location Longitude:' name='longitude' value={formState.longitude} onChange={handleInputChange} />
                    <InputValue placeholder='Enter latitude'  text='Geo-Location Latitude:' name='latitude' value={formState.latitude} onChange={handleInputChange} />
                    <InputValue placeholder='Club Description'   text='Club Description:' name='description' value={formState.description} onChange={handleInputChange} />
                </Box>
               
                <Box w='full' display='flex' mt='1rem' justifyContent='flex-end'>
                    <Button bg='#E5AA42' color='#fff' w='30%' p='.75rem' cursor='pointer'  type="submit"  _hover={{color:'#000'}} >{loading?<Spinner/>:'Save'}</Button>
                </Box>
            </Box>      

                
        </Box>
        </form>
    </Box>
  )
}

export default AddFootballClub