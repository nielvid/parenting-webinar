import { ReactNode } from 'react'
import { Box } from '@chakra-ui/react'
import Footer from '../components/Footer'

export default function ContentWrapper({ children }: { children: ReactNode }) {
	return (
		<Box>
			{/* <Navbar /> */}
			<Box
				w="100%"
			>
				{children}
			</Box>
			<Footer />
		</Box>
	)
}
