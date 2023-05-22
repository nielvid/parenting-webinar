import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from './assets/theme'
import Home from './pages/home/Home'
import PageWrapper from './layouts/PageWrapper'

function App() {
	return (
		<BrowserRouter>
			<ChakraProvider theme={theme}>
				<Routes>
					<Route
						path="/"
						element={
							<PageWrapper>
								<Home />
							</PageWrapper>
						}
					/>
				</Routes>
			</ChakraProvider>
		</BrowserRouter>
	)
}

export default App
