import { ReactNode } from 'react'
import { Box } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'
import ContentWrapper from './ContentWrapper'

function PageWrapper({ children }: { children: ReactNode }) {
	return (
		<Box w="100%" h="100%" bg='#000'>
			<ContentWrapper >
				{children}
				<Outlet />
			</ContentWrapper>
		</Box>
	)
}

export default PageWrapper
