import { Box, Heading, Text} from '@chakra-ui/react'

interface Props {
    // icon?: ReactNode | JSX.Element | JSX.Element[] | ReactElement
    icon?: string
    title: string;
    text: string;
}

export const FeatureCard: React.FC<Props> = ({icon, title, text}) =>{
  return (
    <Box textAlign='center' maxW='280px' m='2rem auto' p='2rem' border='1px solid #fafafa' borderBottom="1px solid rgba(68,85,103,.11)" boxShadow='1px 1px 3px -3px #000'>
        <Box display='flex' justifyContent='center'>
        <img src={icon}  width='30%' />
        </Box>
        <Box my='2rem'><Heading>{title}</Heading> </Box>
        <Box textAlign='justify' fontSize='1.5rem'>
            <Text>{text}</Text>
        </Box>

    </Box>
  )
}
