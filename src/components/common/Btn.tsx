import { Button, Box } from '@chakra-ui/react'
import { ReactNode,MouseEventHandler, ReactElement } from 'react'

type ButtonProps = {
    children: ReactNode | JSX.Element | JSX.Element[] | ReactElement
    onClick?: MouseEventHandler |undefined
    bg?: string
    color?: string
}
export default function Btn({bg, color, onClick, children}: ButtonProps) {
  return (
    <>
    <Box>
        <Button  bg={bg ?? 'brand.pink'}  color={color ?? '#fff'} my='1.5rem' mx='1rem' fontSize='2rem' p='2rem 3.5rem' onClick={onClick} >{children}</Button>
    </Box>
    </>
  )
}
