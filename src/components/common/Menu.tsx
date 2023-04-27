import { Box, } from '@chakra-ui/react'
import MenuItem from './MenuItem'


type Props = {
    bg?: string
    color: string
    width?: string
    height?: string
    large?: string
    show?: string
    my?: string
    pt?: string
    top?: string
}

export default function Menu(props: Props) {
  return (
    <Box position={{base: 'absolute', lg: 'relative'}} top={{base:'85px', lg: 0}} right='1px' zIndex='100' display={{base: props.show, lg: props.large}}>
        <Box as='nav'
				color={props.color}
				bg={props.bg}
                width={props.width}
                height={props.height}
			>
                <MenuItem my={props.my} pt={props.pt}/>

			</Box>
    </Box>
  )
}
