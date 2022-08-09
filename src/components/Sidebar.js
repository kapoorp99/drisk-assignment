import { Box, Heading } from '@chakra-ui/react'
import React, { useState } from 'react'
import { ChevronRight, ChevronLeft, FileMinus, DollarSign, Command, Link, Umbrella } from 'react-feather'

function Sidebar() {
    const [toggle, setToggle] = useState(false)
    return (
        <Box
            m='8' p='6'
            borderRadius='md'
            minW={'40px'} h='80vh' display='flex'
            flexDir={'column'}
            justifyContent='space-between'
            alignItems='center'
            bgColor='black' color='white'>
            <Box mt={'4'} display={'flex'} w={toggle ? ('200px') : ('')} flexDir='column' gap='15px'>
                <Box display='flex' alignItems='center' ml={toggle ? ('2') : ('')} gap='10px'>
                    <Command />
                    <Heading fontSize='md' display={toggle ? ('block') : ('none')}>Dashboard</Heading>
                </Box>
                <Box display='flex' alignItems='center' gap='10px' ml={toggle ? ('2') : ('')}>
                    <Link />
                    <Heading fontSize='md' display={toggle ? ('block') : ('none')}>Link Exchange</Heading>
                </Box>
                <Box display='flex' alignItems='center' gap='10px' ml={toggle ? ('2') : ('')}>
                    <Umbrella />
                    <Heading fontSize='md' display={toggle ? ('block') : ('none')}>Buy Cover</Heading>
                </Box>
                <Box display='flex' alignItems='center' gap='10px' ml={toggle ? ('2') : ('')}>
                    <FileMinus />
                    <Heading fontSize='md' display={toggle ? ('block') : ('none')}>All Covers</Heading>
                </Box>
                <Box display='flex' alignItems='center' gap='10px' ml={toggle ? ('2') : ('')}>
                    <DollarSign />
                    <Heading fontSize='md' display={toggle ? ('block') : ('none')}>All Claims</Heading>
                </Box>
            </Box>
            <Box>
                {toggle ? (
                    <ChevronLeft onClick={() => {
                        setToggle((ps) => !ps)
                    }} />
                ) : (
                    <ChevronRight onClick={() => {
                        setToggle((ps) => !ps)
                    }} />
                )}
            </Box>
        </Box>
    )
}

export default Sidebar