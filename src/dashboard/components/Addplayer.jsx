import React,{useState} from 'react'
import { Box, Text, Button, Spinner } from '@chakra-ui/react'
import InputValue from '../components/InputValue'
// import { Addplayers } from '../../api/UserInformation'
import Swal from 'sweetalert2'
import axios from 'axios'

const Addplayers = () => {
    const userTypes = JSON.parse(localStorage.getItem('userType'));

    const [loading, setLoading] = useState(false);

    const [address, setAddress] = useState('');
    const [allergies, setAllergies] = useState('');
    const [dob, setDob] = useState("");
    const [currentTeam, setCurrentTeam] = useState('');
    const [email, setEmail] = useState('');
    const [experience,setExperience] = useState('');
    const [fullName, setFullName] = useState('');
    const [healthStatus, setHealthStatus] = useState('');
    const [height, setHeight] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [injuryStatus, setInjuryStatus] = useState('');
    const [jerseyNumber, setJerseyNumber] = useState('');
    const [location, setLocation]= useState('');
    const [nationality, setNationality] = useState('');
    const [nin, setNin] = useState('');
    const [phone, setPhone] = useState('');
    const [position, setPosition] = useState('');
    const [prefferedFoot, setPrefferedFoot] = useState('');
    const [weight, setWeight] = useState('');
    const [userType, setUserType] = useState('');

    

      const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
     const input= {
       address: address,
  allergies: allergies,
  appearances: 0,
  biography:' biography',
  currentTeam: currentTeam,
  dob: dob,
  email: email,
  experience: experience,
  fullName: fullName,
  goalScored: 0,
  healthStatus: healthStatus,
  height: height,
  imageUrl: imageUrl,
  injuryStatus: injuryStatus,
  jerseyNumber: jerseyNumber,
  licenceNumber: 'licenceNumber',
  location: location,
  nationality: nationality,
  nin: nin,
  phone: phone,
  position: position,
  preferredFoot: prefferedFoot,
  thisSeason: 'string',
  weight: weight
    }

    try {
      const headers= {
        Authorization: `Bearer ${JSON.parse(sessionStorage.getItem('token'))}`,
        'Access-Control-Allow-Origin': '*',
        'Content-type': 'Application/json',
        'Access-Control-Allow-Headers':
          'x-access-token, Origin, X-Requested-With, Content-Type, Accept',
      };
      const response = await userTypes==='COACH'? axios.post('https://scoutflair.top:8080/api/v1/profile/coach/createPlayer', input,{ headers }) : axios.post('https://scoutflair.top:8080/api/v1/profile/admin/createPlayer', input,{ headers });
      
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
  text: error.error,
  icon: 'error',
})
    }
  };
       
 
  return (
    <Box>
         <Box p='1rem' borderRadius='8px' bg='white' alignItems='center' display='flex' justifyContent='space-between' >
            <Box border='1px solid #333' p='.5rem' alignItems='center' display='flex'>
                <Text>Player &nbsp;</Text>
                <Text display='inline-block' fontWeight='700' borderLeft='1px solid #333'>&nbsp;{userType==='Admin'?'Add User':'Add Player'}</Text>
            </Box>
        </Box>   
         <form onSubmit={handleSubmit}>
        <Box w='full' display='flex' flexDir={['column','row']} p='1rem' justifyContent='space-between' >
           

            <Box w={['full','50%']}  p='1rem 2rem' mt='1rem' >
                <Text fontWeight='700'>Basic Information</Text>
                <Box  borderRadius='8px' mt='.5rem' p='1rem' bg='#fff'>
                    <InputValue placeholder='Name' name="fullName"
          value={fullName}
          onChange={(e)=>{setFullName(e.target.value)}} text='Full Name:'/>
                    <InputValue placeholder='Nigeria'  name="location"
                    value={location}
                    onChange={(e)=>{setLocation(e.target.value)}} text='Place of Birth:'/>
                    <InputValue placeholder='Nationality' name="nationality"
                    value={nationality}
                    onChange={(e)=>{setNationality(e.target.value)}} text='Nationality:'/>
                    {userTypes==='Admin'&& <InputValue placeholder='User Type' name="UserType" value={userType} onChange={(e)=>{setUserType(e.target.value)}} text='User Type:'/>
                    }
                    <InputValue type='date' placeholder='dob' name="dob" value={dob} onChange={(e)=>{setDob(e.target.value)}} text='Date of Birth:'/>
                    <InputValue placeholder='number' name="jerseyNumber" value={jerseyNumber} onChange={(e)=>{setJerseyNumber(e.target.value)}} text='Jersey Number:'/>
                    <InputValue placeholder='number' name='currentTeam' value={currentTeam} onChange={(e)=>{setCurrentTeam(e.target.value)}}  text='Current Team:'/>
                    <InputValue placeholder='number' name='position' value={position} onChange={(e)=>{setPosition(e.target.value)}}  text='Position:'/>
                    <InputValue placeholder='Experience' name='experience' value={experience} onChange={(e)=>{setExperience(e.target.value)}}  text='Experience:'/>
                </Box>
                <Text mt='1rem' fontWeight='700'>Contact Information</Text>
                <Box  borderRadius='8px' mt='.5rem' p='1rem' bg='#fff'>
                    <InputValue placeholder='Enter your address here' name='address' value={address} onChange={(e)=>{setAddress(e.target.value)}}  text='Address:'/>
                    <InputValue placeholder='090 35 95 6558'  text='Phone Number:' name='phone' value={phone} onChange={(e)=>{setPhone(e.target.value)}} />
                    <InputValue placeholder='Enter your email address'   text='Email Address:' name='email' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                </Box>
                <Text mt='1rem' fontWeight='700'>Player's Preferences</Text>
                <Box  borderRadius='8px' mt='.5rem' p='1rem' bg='#fff'>
                    <InputValue placeholder='NIN'  text='National Identity Card Number (NIN):' name='nin' value={nin} onChange={(e)=>{setNin(e.target.value)}} />
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
                    value={imageUrl}
                    onChange={(e)=>{setImageUrl(e.target.value)}}
                    />
                </Box>
                <Text mt='1rem' fontWeight='700'>Physical Attributes</Text>
                <Box  borderRadius='8px' mt='.5rem' p='1rem' bg='#fff'>
                    <InputValue placeholder='Enter height in meters'  text='Height (cm):' name='height' value={height} onChange={(e)=>{setHeight(e.target.value)}} />
                    <InputValue placeholder='Enter weight in kilograms'  text='Weight (Kg):' name='weight' value={weight} onChange={(e)=>{setWeight(e.target.value)}} />
                    <InputValue placeholder='Dominant Foot'   text='Dominant Foot (Right, Left, or Both):' name='prefferedFoot' value={prefferedFoot} onChange={(e)=>{setPrefferedFoot(e.target.value)}} />
                </Box>
                <Text mt='1rem' fontWeight='700'>Medical Information</Text>
                <Box  borderRadius='8px' mt='.5rem' p='1rem' bg='#fff'  >
                    <InputValue placeholder='Fit & healthy'  text='Current Health Status:' name='healthStatus' value={healthStatus} onChange={(e)=>{setHealthStatus(e.target.value)}}/>
                    <InputValue placeholder='None'  text='Existing Injuries or Medical Conditions:' name='injuryStatus' value={injuryStatus} onChange={(e)=>{setInjuryStatus(e.target.value)}} />
                    <InputValue placeholder='None'   text='Allergies:' name='allergies' value={allergies} onChange={(e)=>{setAllergies(e.target.value)}}/>
                </Box>
                <Box w='full' display='flex' mt='1rem' justifyContent='flex-end'>
                    <Button bg='#E5AA42' color='#fff' w='30%' p='.75rem' cursor='pointer'  type="submit" disabled={loading&&true} _hover={{color:'#000'}} >{loading?<Spinner/>:'Save'}</Button>
                </Box>
            </Box>      

                
        </Box>
        </form>
    </Box>
  )
}

export default Addplayers