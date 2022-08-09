import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import Card from './Card'
import FAQ from './FAQ'
import { MessageSquare, PhoneCall, Mail, Twitch } from 'react-feather'

function Content() {
    return (
        <Box
            m='2' p='2' w='100%'>
            <Heading>Frequently Asked Questions</Heading>
            <Text>Got a burning question that you need answered pronto? Just click on one of the sections below to find the answer.</Text>
            <Box h='300px' overflowY={'auto'} w='100%' overflowX='hidden' >
                <FAQ />
                <FAQ />
                <FAQ />
                <FAQ />
            </Box>
            <Box mt='4'>
                <Heading>Get in touch with us</Heading>
                <Box
                    m='2'
                    display='flex'
                    justifyContent='center' alignItems={'center'} gap='25px' flexWrap='wrap' w='100%'>
                    <Card heading="Chat with us" subheading="Get response in 2-3 minutes." icon={<MessageSquare />} />
                    <Card heading="Request a call" subheading="Get call back in 10-15 minutes." icon={<PhoneCall />} />
                    <Card heading="Write to us" subheading="send us an email at " icon={<Mail />} />
                    <Card heading="Drop your feedback" subheading="Let us know what we are doing right and what we can improve." icon={<Twitch />} />
                </Box>
            </Box>
        </Box>
    )
}

export default Content