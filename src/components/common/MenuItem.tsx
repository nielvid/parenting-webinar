import { Link } from 'react-router-dom'
import { Box, List, chakra } from '@chakra-ui/react'


const ListItem = chakra(List, {
	baseStyle: {
		ml: '2.5rem',
		display: {
			base: 'block',
			lg: 'inline-block',
		},
	},
})
type Margin  = {
 mr?: string
 my?: string 
 pt?: string
}
function MenuItem({mr, my, pt}: Margin) {
  return (
         <Box>
				<ListItem mr={mr} pt={pt}>
					<Link to="/">Home</Link>
				</ListItem>
				<ListItem mr={mr} my={my}>
					<Link to="/">Products</Link>
				</ListItem>
				<ListItem mr={mr} my={my}>
					<Link to="/">Services</Link>
				</ListItem>

				<ListItem mr={mr} my={my}>
					<Link to="/">Features</Link>
				</ListItem>
				<ListItem mr={mr} my={my}>
					<Link to="/">Blog</Link>
				</ListItem>
				<ListItem mr={mr} my={my}>
					<Link to="/">Login</Link>
				</ListItem>
				<ListItem mr='2rem' border='1px solid #f2eefb' borderRadius='5%' bg='#f2eefb' color='brand.purple' px='1rem' py='1rem'>
					<Link to="/">Create Account</Link>
				</ListItem>

			</Box>
  )
}

export default MenuItem