import { useState } from 'react';
import { useAppSelector } from '../../app/hooks';
import { Box, Input, Spinner } from '@chakra-ui/react';
import CandidateCard from './CandidateCard';

const Conversations = () => {
    const { user } = useAppSelector(state => state.authUser);
    const [loading] = useState(false)
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
                                    return <CandidateCard key={friendId} data={friend} />
                                })
                            }
                        </>
                }
            </Box>

        </Box>
    )
}

export default Conversations