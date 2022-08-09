import { Box, Button, Collapse, ScaleFade, Text } from '@chakra-ui/react'
import React from 'react'
import { ChevronDown, ChevronUp } from 'react-feather'

function FAQ() {
    const [show, setShow] = React.useState(false)
    const handleToggle = () => setShow(!show)

    return (
        <ScaleFade
            initialScale={0.9}
            in="true">
            <Box
            m='auto'
                borderRadius='md'
                pt='2'
                alignItems={'center'}
                display='flex' flexDir={'column'} maxW='90%' mt='5' bgColor='#F4F4F4'>
                <Box borderRadius='md' display='flex' justifyContent='space-between' alignItems={'center'} 
                borderBottom={show ? ("") : ('5px solid #7879F1')} w='100%' fontWeight='bold'>
                    <Text ml='2'>
                        Are there any hidden T&C to this deal?
                    </Text>
                    <Button size='sm' onClick={handleToggle}>
                        {show ? <ChevronUp /> : <ChevronDown />}
                    </Button>
                </Box>

                {show ? (
                    <Text p='2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                        passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
                )
                    : ("")}
            </Box>
        </ScaleFade>
    )
}

export default FAQ