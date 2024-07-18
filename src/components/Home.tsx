import { Grid, GridItem } from "@chakra-ui/react"
import Chat from "./Chat"
import ChatInterface from "./ChatInterface"

const Home = () => {
    return (
        <>
            <Grid
                h='100%'
                w={'100%'}
                templateAreas={`"tabs main"
                  "tabs main"`}
                gridTemplateRows={'1fr 1fr'}
                columnGap={'16px'}
                gridTemplateColumns={'390px 1fr'}
            >
                {/* Sidebar */}
                <GridItem area={'tabs'}>
                    <Chat />
                </GridItem>
                <GridItem className="px-0 pr-4 py-4" area={'main'}>
                    <ChatInterface />
                </GridItem>
            </Grid>
        </>
    )
}

export default Home