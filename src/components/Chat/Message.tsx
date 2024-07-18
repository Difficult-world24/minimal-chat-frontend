import { Box, Stack, Text } from '@chakra-ui/react'
interface MessagePropsInterface {
    isSender?: boolean;
}
const Message = ({ isSender }: MessagePropsInterface) => {
    return (
        <Stack alignItems={'center'} direction={'row'} justifyContent={isSender ? 'flex-end' : 'flex-start'} p={'4px'} w={'100%'}>
            <Box shadow={'sm'} borderBottomLeftRadius={!isSender ? '0px !important' : 'inherit'} borderBottomRightRadius={isSender ? '0px !important' : 'inherit'} maxWidth={'400px'} gap={'10px'} display={'flex'} flexDirection={'column'} alignItems={'flex-end'} justifyContent={'flex-end'} rounded={'xl'} p={'12px'} bg={isSender ? 'gray.300' : 'gray.600'}>
                <Text fontSize={'medium'} color={isSender ? 'gray.900' : 'gray.50'}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus porro tempora quia ut vitae, nostrum iusto voluptates fugit, ea illum perspiciatis, minima quasi eligendi molestias odio consequatur quidem cupiditate numquam?
                </Text>
                <Text fontSize={'small'} color={isSender ? 'gray.600' : 'gray.200'}>1:29PM</Text>
            </Box>
        </Stack>
    )
}

export default Message