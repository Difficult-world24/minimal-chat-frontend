import { Heading, Text } from "@chakra-ui/react"
import { useAppSelector } from "../app/hooks"

const Home = () => {
    const { user } = useAppSelector(state => state.authUser)
    return (
        <>
            <div className="flex w-full flex-col h-full gap-2 items-center justify-center">
                <Heading className="text-slate-600">Welcome!</Heading>
                <Text className="text-slate-400 text-lg">{user?.email}</Text>
            </div>
        </>
    )
}

export default Home