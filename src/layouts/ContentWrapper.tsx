import { ReactNode } from 'react'
import { Box } from '@chakra-ui/react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function ContentWrapper({ children }: { children: ReactNode }) {
	return (
		<Box>
			<Navbar />
			<Box
				w="100%"
				
				py='3rem'
			>
				{children}
			</Box>
			<Footer />
		</Box>
	)
}
