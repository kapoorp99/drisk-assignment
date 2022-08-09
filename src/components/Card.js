import { Box, Circle, Heading, Text } from '@chakra-ui/react'
import React from 'react'

function Card(props) {
    return (
        <Box
            borderRadius={'2xl'}
            boxShadow='xl'
            minW='240px' minH='250px'
            w='240px' h='250px' display='flex'
            justifyContent={'center'}
            alignItems='center' flexDir={'column'}
            p='2'>
            <Circle
            m='1'
                w='78px' h='78px'
                bgGradient='linear(to-l,rgba(202, 204, 255, 1),rgba(165, 164, 255, 1))'>
                    {props?.icon}
            </Circle>
            <Heading
            fontSize={'md'} textAlign='center'>{props?.heading}</Heading>
            <Text
            m='1' fontSize={'sm'} textAlign='center'>{props?.subheading}</Text>
        </Box>
    )
}

export default Card