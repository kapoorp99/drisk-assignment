import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
import { ChevronDown, Headphones, User } from 'react-feather'

function Header() {
    return (
        <Box
            m='2'
            p='2'
            display='flex'
            bgColor='white'
            color='black'
            justifyContent='space-between'
            alignItems={'center'}>
            <Box>
                <Heading>Assignment</Heading>
            </Box>
            <Box display='flex' gap='5' alignItems={'center'}>
                <Box>
                    <Headphones />
                </Box>
                <Box>
                    <User />
                </Box>
                <ChevronDown />
            </Box>
        </Box>
    )
}

export default Header