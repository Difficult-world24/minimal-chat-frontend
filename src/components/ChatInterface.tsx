import { TriangleDownIcon } from '@chakra-ui/icons'
import { Avatar, Button, Menu, MenuButton, MenuItem, MenuList, Stack, Text, Textarea } from '@chakra-ui/react'
import Message from './Chat/Message'
import DateBadge from './Chat/DateBadge'

const ChatInterface = () => {
    return (
        <Stack direction={'column'} gap={'0'} bg={'gray.200'} h={'100%'} className='rounded-lg' w={'100%'}>
            {/* Header */}
            <Stack shadow={'md'} justifyContent={'space-between'} direction={'row'} alignItems={'center'} w={'100%'} className='p-2 px-4 rounded-tl-lg rounded-tr-lg' bg={'gray.400'}>
                <Stack direction={'row'} justifyContent={'flex-start'} gap={'4'} alignItems={'center'}>
                    <Avatar name={'Kartik Sharma'} />
                    <Stack justifyContent={'flex-start'} gap={0} alignItems={'flex-start'} direction={'column'}>
                        <Text fontWeight={600} mb={'0'} color={'white'}>Kartik</Text>
                        <Text fontWeight={600} fontSize={'smaller'} color={'gray.100'}>Typing...</Text>
                    </Stack>
                </Stack>
                <Menu>
                    <MenuButton>
                        <TriangleDownIcon color={'gray.100'} />
                    </MenuButton>
                    <MenuList>
                        <MenuItem>Delete Conversation</MenuItem>
                        <MenuItem>Archieve</MenuItem>
                    </MenuList>
                </Menu>5
            </Stack>
            {/* Main Section */}
            <Stack overflow={'auto'} bg={'white'} className='border gap-2 py-4 px-3' h={'100%'} w={'100%'}>
                {/* Message Card */}
                <Message isSender />

                <Message isSender />
                <Message isSender />
                <DateBadge />
                <Message isSender />
                <DateBadge />
                <Message isSender />
                <Message />
                <DateBadge />
                <Message isSender />
                <Message />
                <Message isSender />
                <Message isSender />
                <Message isSender />
                <Message isSender />
            </Stack>
            <Stack shadow={'md'} justifyContent={'space-between'} direction={'row'} alignItems={'flex-end'} w={'100%'} className='p-2 px-4 rounded-bl-lg rounded-br-lg' bg={'gray.200'}>
                <Textarea placeholder='Type Message' rows={2} borderColor={'gray.400'} resize={'none'} />
                <Button>Send</Button>
            </Stack>
        </Stack>
    )
}

export default ChatInterface