import React,{useState} from 'react'
import { Box, Text, Button, Spinner } from '@chakra-ui/react'
import InputValue from '../components/InputValue'
import { EditProfiles } from '../../api/UserInformation'
import { useMutation,useQuery } from 'react-query'
import { GetProfile } from '../../api/UserInformation'
const EditProfile = () => {
    const { data} = useQuery('myData', GetProfile);
    
    const initialFormState = {
    address:data?.address,
    allergies:data?.allergies,
    biography:data?.biography,
    currentTeam: data?.currentTeam,
    email:data?.email,
    experience:data?.experience,
    fullName:data?.fullName,
    healthStatus:data?.healthStatus,
    height:data?.height,
    imageUrl:'https://i.pravatar.cc/300',
    injuryStatus:data?.injuryStatus,
    jerseyNumber:data?.jerseyNumber,
    licenceNumber:data?.licenceNumber,
    location:data?.location,
    nationality:data?.nationality,
    nin:data?.nin,
    phone:data?.phone,
    position:data?.position,
    prefferedFoot:data?.prefferedFoot,
    weight:data?.weight,
    // Add more input fields as needed
  };

  // Use a single state object to hold all input field values
  const [formState, setFormState] = useState(initialFormState);

    
    const mutation = useMutation(EditProfiles);

    const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevFormState) => ({
      ...data,
      [name]: value,
    }));
  };
    
    const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newProfile = Object.fromEntries(formData.entries());

    try {
      await mutation.mutateAsync(newProfile);
      // Handle success
      alert('sucess')
    } catch (error) {
      // Handle error
    }
  };
  return (
    <Box>
         <Box p='1rem' borderRadius='8px' bg='white' alignItems='center' display='flex' justifyContent='space-between' >
            <Box border='1px solid #333' p='.5rem' alignItems='center' display='flex'>
                <Text>Profile &nbsp;</Text>
                <Text display='inline-block' fontWeight='700' borderLeft='1px solid #333'>&nbsp;Edit Profile</Text>
            </Box>
        </Box>   
         <form onSubmit={handleSubmit}>
        <Box w='full' display='flex' flexDir={['column','row']} p='1rem' justifyContent='space-between' >
           

            <Box w={['full','50%']}  p='1rem 2rem' mt='1rem' >
                <Text fontWeight='700'>Basic Information</Text>
                <Box  borderRadius='8px' mt='.5rem' p='1rem' bg='#fff'>
                    <InputValue placeholder='Name' name="fullName"
          value={formState.fullName}
          onChange={handleInputChange} text='Full Name:'/>
                    {/* <InputValue placeholder='Last name' name="firstName"
          value={formState.firstName}
          onChange={handleInputChange} text='Date of Birth:' type='date'/> */}
                    <InputValue placeholder='Nigeria'  name="location"
          value={formState.location}
          onChange={handleInputChange} text='Place if Birth:'/>
                    <InputValue placeholder='NgN' name="nationality"
          value={formState.nationality}
          onChange={handleInputChange}  text='Nationality:'/>
                    <InputValue placeholder='number' name="jerseyNumber" value={formState.jerseyNumber} onChange={handleInputChange} text='Jersey Number:'/>
                    <InputValue placeholder='number' name='currentTeam' value={formState.currentTeam} onChange={handleInputChange}  text='Current Team:'/>
                    <InputValue placeholder='number' name='position' value={formState.position} onChange={handleInputChange}  text='Position:'/>
                </Box>
                <Text mt='1rem' fontWeight='700'>Contact Information</Text>
                <Box  borderRadius='8px' mt='.5rem' p='1rem' bg='#fff'>
                    <InputValue placeholder='Enter your address here' name='address' value={formState.address} onChange={handleInputChange}  text='Address:'/>
                    <InputValue placeholder='090 35 95 6558'  text='Phone Number:' name='phone' value={formState.phone} onChange={handleInputChange} />
                    <InputValue placeholder='Enter your email address'   text='Email Address:' name='email' value={formState.email} onChange={handleInputChange}/>
                </Box>
                <Text mt='1rem' fontWeight='700'>Player's Preferences</Text>
                <Box  borderRadius='8px' mt='.5rem' p='1rem' bg='#fff'>
                    <InputValue placeholder='NIN'  text='National Identity Card Number (NIN):' name='nin' value={formState.nin} onChange={handleInputChange} />
                </Box>
            </Box>
            <Box w={['full','50%']}  p='1rem 2rem' mt='1rem' >
                <Text fontWeight='700'>Profile Photo</Text>
                <Box  borderRadius='8px' mt='.5rem' p='.5rem' bg='#fff'>
                    <InputValue 
                    placeholder='Image Url' 
                    //type='file' 
                    text='Add Image'
                    name='imageUrl' 
                    value={formState.imageUrl}
                    onChange={handleInputChange}
                    />
                </Box>
                <Text mt='1rem' fontWeight='700'>Physical Attributes</Text>
                <Box  borderRadius='8px' mt='.5rem' p='1rem' bg='#fff'>
                    <InputValue placeholder='Enter height in meters'  text='Height (cm):' name='height' value={formState.height} onChange={handleInputChange} />
                    <InputValue placeholder='Enter weight in kilograms'  text='Weight (Kg):' name='weight' value={formState.weight} onChange={handleInputChange} />
                    <InputValue placeholder='Dominant Foot'   text='Dominant Foot (Right, Left, or Both):' name='prefferedFoot' value={formState.prefferedFoot} onChange={handleInputChange} />
                </Box>
                <Text mt='1rem' fontWeight='700'>Medical Information</Text>
                <Box  borderRadius='8px' mt='.5rem' p='1rem' bg='#fff'  >
                    <InputValue placeholder='Fit & healthy'  text='Current Health Status:' name='healthStatus' value={formState.healthStatus} onChange={handleInputChange}/>
                    <InputValue placeholder='None'  text='Existing Injuries or Medical Conditions:' name='injuryStatus' value={formState.injuryStatus} onChange={handleInputChange} />
                    <InputValue placeholder='None'   text='Allergies:' name='allergies' value={formState.allergies} onChange={handleInputChange}/>
                </Box>
                <Box w='full' display='flex' mt='1rem' justifyContent='flex-end'>
                    <Button bg='#E5AA42' color='#fff' w='30%' p='.75rem' cursor='pointer'  type="submit" disabled={mutation.isLoading&&true} _hover={{color:'#000'}} >{mutation.isLoading?<Spinner/>:'Save'}</Button>
                </Box>
            </Box>      

                
        </Box>
        </form>
    </Box>
  )
}

export default EditProfile