import { PlusSquareIcon } from '@chakra-ui/icons';
import { Avatar, Button, Stack, Text } from '@chakra-ui/react'
import { useAddFriendMutation } from '../../services/friends/friends';


interface UserCardPropsI {
    username: string;
    email: string;
    id: number;
    alreadyFriends?: boolean;
}

const UserCard = ({ id, username, email, alreadyFriends }: UserCardPropsI) => {
    const [sendFriendRequest, {
        isLoading: processingRequest,
    }] = useAddFriendMutation()

    return (
        <>
            <Stack key={id} alignItems={'center'} direction={'row'} justifyContent={'space-between'} className='w-full p-2'>
                <Stack direction={'row'} justifyContent={'flex-start'} gap={'4'} alignItems={'center'}>
                    <Avatar name={username} />
                    <Stack justifyContent={'flex-start'} className='gap-1' alignItems={'flex-start'} direction={'column'}>
                        <Text fontWeight={600}>{username}</Text>
                        <Text color={'GrayText'}>{email}</Text>
                    </Stack>
                </Stack>
                {
                    alreadyFriends &&
                    <Button onClick={async () => {
                        await sendFriendRequest({ friendId: id })
                    }} isLoading={processingRequest} colorScheme={'green'} rightIcon={<PlusSquareIcon />}>Add</Button>

                }
            </Stack>
        </>
    )
}

export default UserCard