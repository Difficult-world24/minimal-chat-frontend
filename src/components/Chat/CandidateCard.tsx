import { Avatar, Stack, Tag, Text } from '@chakra-ui/react';
import { User } from '../../app/slices/AuthUser/type';

interface CandidateCardPropsInterface {
    data: User;
}

const CandidateCard = ({ data }: CandidateCardPropsInterface) => {
    return (
        <Stack key={data.id} className='border border-x-0 gap-3 p-4 hover:cursor-pointer hover:bg-slate-100' direction={'row'} justifyContent={'flex-start'} alignItems={'center'} w={'100%'}>
            <Avatar name={data.username} />
            <div className='w-full flex-row flex items-start justify-start gap-2'>
                <div className="flex flex-col justify-between items-start gap-1 w-full">
                    <Text color={'gray.800'} fontWeight={600}>
                        {data.username}
                    </Text>
                    <Text color={'gray.800'} fontWeight={600} fontSize={'small'}>Hello? How are you?</Text>
                </div>
                <div className="flex min-w-[60px] flex-col justify-start items-end gap-2">
                    <Text color={'gray.400'} fontSize={'smaller'}>10:39 PM</Text>
                    <Tag borderRadius={'full'} size={'sm'} colorScheme='blue'>1</Tag>
                </div>
            </div>
        </Stack>
    )
}

export default CandidateCard