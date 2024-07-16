import { SearchIcon } from '@chakra-ui/icons'
import { Box, Button, Container, Input, InputGroup, InputLeftElement, InputRightElement } from '@chakra-ui/react'
import { useState } from 'react'
import { useSearchFriendsMutation } from '../../services/friends/friends'
import SearchResult from './SearchResult'

const Search = () => {
    const [search, setSearch] = useState('');
    const [searchUsers, {
        isLoading,
        isSuccess,
        data
    }] = useSearchFriendsMutation()
    const searchResults = data?.data || []
    return (
        <Container className='h-full flex items-center justify-center'>
            <Box w={[500]} className='border p-3 rounded-md shadow-md flex flex-col justify-center items-stretch gap-2'>
                <InputGroup>
                    <InputLeftElement pointerEvents='none'>
                        <SearchIcon />
                    </InputLeftElement>
                    <Input value={search} onChange={(event) => {
                        setSearch(event.target.value)
                    }} isDisabled={isLoading} type='text' placeholder='Search for a Friend' />
                    <InputRightElement width={'4.5rem'}>
                        <Button onClick={() => {
                            searchUsers({
                                username: search
                            })
                        }}>Search</Button>
                    </InputRightElement>
                </InputGroup>
                <Box className='min-h-[500px]'>
                    <SearchResult data={searchResults} isLoading={isLoading} isSuccess={isSuccess} />
                </Box>
            </Box>
        </Container>
    )
}

export default Search