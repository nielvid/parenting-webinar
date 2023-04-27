// 1. Import the utilities
import { extendTheme } from '@chakra-ui/react'

// 2. Update the breakpoints as key-value pairs
const breakpoints = {
	xs: '320px',
	sm: '576px', // or 480px landscape phones
	md: '768px', //tablets
	lg: '992px', //laptop
	xl: '1200px', //desktop
	'2xl': '1536px',
}

const colors = {
	brand: {
		purple: '#4300c2',
		200:'#6f58e2',
		pink: '#e31d79',
		dark:'#323232',
		ash: '#f3f4f5',
		black2:'#2e2e2e',
		700: '#2a69ac',
		green: '#16c142',
		dmenu: '#f6f4fb',
		offWhite: '#fafafa'
	},
}
// 3. Extend the theme
export const theme = extendTheme({ breakpoints, colors })
