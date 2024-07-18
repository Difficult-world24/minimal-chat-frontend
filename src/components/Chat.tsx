import { Badge, Tab, TabIndicator, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import FriendsList from './Chat/FriendsList'
import Conversations from './Chat/Conversations'

const Chat = () => {
    return (
        <Tabs shadow={'md'} bgColor={'InfoBackground'} variant={'unstyled'} className=' p-3 rounded-tr-md rounded-br-md' h={'100%'}>
            <TabList>
                <Tab>Chats <Badge rounded={'full'} colorScheme='red' ml={'4px'}>1+</Badge> </Tab>
                <Tab>Friends</Tab>
                <Tab>Archived</Tab>
            </TabList>
            <TabIndicator mt='-1.5px' height='2px' bg='blue.500' borderRadius='1px' />

            <TabPanels className='h-full'>
                <TabPanel className='h-full'>
                    <Conversations />
                </TabPanel>
                <TabPanel className='h-full'>
                    <FriendsList />
                </TabPanel>
                <TabPanel>
                    <p>three!</p>
                </TabPanel>
            </TabPanels>
        </Tabs>
    )
}

export default Chat