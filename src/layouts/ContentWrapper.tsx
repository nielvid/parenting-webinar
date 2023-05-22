import { ReactNode } from 'react'
import { Box } from '@chakra-ui/react'

export default function ContentWrapper({ children }: { children: ReactNode }) {
	return (
		<Box>
			<Box
				w="100%"
			>
				{children}
			</Box>
		</Box>
	)
}
