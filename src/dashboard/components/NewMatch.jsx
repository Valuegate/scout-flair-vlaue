import { Box, Button, Text, } from '@chakra-ui/react'
import InputValue from './InputValue'

const NewMatch = () => {
  return (
    <Box w='full' h='100%' display='flex' justifyContent='space-between' p='1rem'  flexDirection='column' >
        <Box w={["full",'100%']}>
            <Text fontSize='28px' fontWeight='700' >Add New Match</Text>
            <Box mt='1rem'>
                <InputValue text='Home team:' name='Home team' value=''
          placeholder='Home team' />
           <InputValue text='Away team:' name='Away team' value=''
          placeholder='Away team' />
          <InputValue text='Time' value='' name='time'
          type='time' placeholder='Select time'/>
                <InputValue text='Date' value='' name='date'
          type='date' placeholder='DD/MM/YYYY'/>
                <InputValue text='Competition' value='' name='competition'
           placeholder='Competition' />
                <InputValue text='Refree' value='' name='refree'
           placeholder='name' />
           <InputValue text='Stadium/Pitch' value='' name='stadium'
           placeholder='name' />
            </Box>
        </Box>
        <Box w={["full",'100%']} mt='1rem'>
            <Text>Home Logo</Text>
            <input
            id="file"
            type="file"
            name='file'
            accept="image/*"
            onChange=''
            />
        </Box>
        <Box w={["full",'100%']} mt='1rem' >
            <Text>Away Logo</Text>
            <input
            id="file"
            type="file"
            name='file'
            accept="image/*"
            onChange=''
            />
        </Box>
        {/* {preview && (
  <Box shadow='md' mt='1rem'  ><img src='' alt="Upload preview" /></Box>
)} */}
    <Button type='submit' onClick='' mt='1rem' >Submit</Button>
    </Box>
  )
}

export default NewMatch