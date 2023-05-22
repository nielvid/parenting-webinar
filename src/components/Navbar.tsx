import { Link } from 'react-router-dom'
import { Box, Heading, } from '@chakra-ui/react'



export default function Navbar() {
	
	return (
		<Box
			width="100%"
			height="120px"
			position="relative"
			alignContent="center"
			display="flex"
			justifyContent="center"
			// flexDirection={{ base: 'column', lg: 'row' }}
			// padding="2rem 0"
			fontSize="1.6rem"
			bg="#fff"
			color="#fff"
			borderBottom="1px solid rgba(68,85,103,.11)"
			boxShadow='1px 1px 3px -3px #000'
			px='4%'
			py='3rem'
		>
			<Box>
				<Box>
					{/* <Image src={MenuIcon} alt="close icon" /> */}
					{/* <div className="hamburger">hello</div> */}
					{/* <Image
						src={CloseIcon}
						alt="close icon"
						sx={{ marginBottom: '5rem' }}
					/> */}
				</Box>
				<Box>
						<Heading color="#808000"  fontSize={{base:'3rem', lg:'6rem'}} fontWeight='900'><Link to="/">Parenting Webinar</Link></Heading>
				</Box> 
			</Box>

			
			

			
		</Box>
	)
}
