import { Box,Text} from '@chakra-ui/react'


export default function Footer() {
  return (
    <>
    {/* <Box as='div' bg='brand.ash' color='#000' mt='2rem'  pt='6rem' pb='5rem' display='grid' gridTemplateColumns={{base: 'auto',sm:'auto auto', lg:'auto auto auto auto'}} columnGap='1rem' rowGap='1rem' px={{ base: '5%', lg: '4%' }} fontSize='1.5rem'>
        <Box>
            <Box width='130px' h='50px' border='2px solid #fff' p='1rem 0'><Heading>PaeBeel</Heading> </Box>
            <Box maxW='360px' textAlign='justify'>
               <Text as='h6'>Paebeel is an All-in-One bills payment platform.
               We are Nigeria’s top bill payment platform providing seamless, easy and fast online payment solution.
        </Text>
            </Box>
            <hr />
           
        </Box>
         <Box>
            <h3>Features</h3>
            <Box>
                <p>Payments</p>
            </Box>
         </Box>
          <Box>
            <h3>Quick Links</h3>
            <UnorderedList>
               <ListItem ><Link to="/" >About</Link></ListItem>
               <ListItem ><Link to="/" >FAQ</Link></ListItem>
              <ListItem ><Link to="/" >Jobs</Link></ListItem>
                 <ListItem ><Link to="/" >Privacy Policy</Link></ListItem>
                  <ListItem ><Link to="/" >T & C</Link></ListItem>
                   <ListItem ><Link to="/" >Cookies</Link></ListItem>
            </UnorderedList>
          </Box>
           <Box>
            <h3>Support</h3>
            <Box>
            <Box>
            <Text mb='2rem' >Address: 7/8, Babatope Close,<br />Igando, Lagos - Nigeria </Text>
            </Box>
            <Text mb='2rem'>Mail: support@paebeel.com</Text>
             <Text as='h5' mt='1rem'>Telephone/WhatsApp:</Text>
              <Text mb='2rem'>08067950766</Text>
            </Box>
           </Box>

    </Box> */}
    <Box bg='#000' color='#fff' py='2rem' fontSize='1.5rem'>
      <Text textAlign='center' >&copy;2023 Phil Ikponmwosa. All rights reserved</Text>
    </Box>
    </>
  )
}
