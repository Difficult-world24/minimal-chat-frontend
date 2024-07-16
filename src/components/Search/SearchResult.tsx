import { Box, Spinner, Stack, Text } from '@chakra-ui/react';
import { User } from '../../app/slices/AuthUser/type';
import UserCard from './UserCard';

interface SearchResultsPropsI {
    isLoading: boolean;
    isSuccess: boolean;
    data: User[]
}

const SearchResult = ({ isLoading, data, isSuccess }: SearchResultsPropsI) => {
    return (

        <Stack w={'100%'} className='min-h-[500px] overflow-auto h-[500px] px-2' alignItems={'center'} justifyContent={'flex-start'} direction={'column'}>
            {isLoading ? <>
                <Box className='w-full h-full flex items-center justify-center'>
                    <Spinner
                        thickness='4px'
                        speed='0.65s'
                        emptyColor='gray.200'
                        color='blue.500'
                        size='xl'
                    />
                </Box>
            </> : <>
                {
                    data.length < 1 && isSuccess ?
                        <Box className='w-full h-full flex items-center justify-center'>
                            <Text className='text-lg' color={'gray'} fontWeight={700}>No Result Found </Text>
                        </Box> :
                        data.map(({ id, email, username, alreadyFriends }) => {
                            return <UserCard id={id} alreadyFriends={alreadyFriends} email={email} username={username} />

                        })
                }
            </>}
        </Stack>
    )
}

export default SearchResult