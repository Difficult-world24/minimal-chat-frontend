import { useState } from 'react'
import { useAppSelector } from '../../app/hooks'
import { Avatar, Box, Input, Spinner, Stack, Text } from '@chakra-ui/react';

const FriendsList = () => {
    const { user } = useAppSelector(state => state.authUser);
    const [loading,] = useState(false)
    return (
        <Box className='flex flex-col justify-start items-start gap-2 h-full w-full'>
            <Input placeholder='Search...' />
            <Box h={'100%'} overflow={'auto'} w={'100%'}>
                {
                    loading ?
                        <div className='flex items-center justify-center h-full w-full'>
                            <Spinner />
                        </div>
                        :
                        <>
                            {
                                user?.Friends.map(({ friend, friendId }) => {
                                    return <Stack key={friendId} className='border border-x-0 p-4 hover:cursor-pointer hover:bg-slate-100' direction={'row'} justifyContent={'flex-start'} gap={'8px'} alignItems={'center'} w={'100%'}>
                                        <Avatar name={friend.username} />
                                        <div className='w-full flex-col items-start justify-start gap-2'>
                                            <Text color={'gray.700'} fontWeight={600}>
                                                {friend.username}
                                            </Text>
                                            <Text color={'gray.400'} fontSize={'small'}>Hey There</Text>
                                        </div>
                                    </Stack>
                                })
                            }
                        </>
                }
            </Box>

        </Box>
    )
}

export default FriendsList