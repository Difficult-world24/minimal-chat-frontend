import { ChatIcon, SearchIcon, SettingsIcon } from '@chakra-ui/icons'
import { Box, Grid, GridItem, Heading, Stack } from '@chakra-ui/react'
import React from 'react'
import SideBarButton from '../components/common/SideBarButton'
import { useLocation, useNavigate } from 'react-router-dom'
import { AppRouteSlugs } from '../services/routes'

const AppLayout = ({ children }: { children: React.ReactNode }) => {
    const navigate = useNavigate()
    const { pathname } = useLocation()
    return (
        <Grid
            h='100vh'
            w={'100%'}
            templateAreas={`"header header header"
                  "sidebar main main"
                  "sidebar main main"`}
            gridTemplateRows={'68px 50px 1fr'}
            gridTemplateColumns={'70px 1fr 1fr'}
        >
            <GridItem area={'header'}>
                <Box className='w-full border-b p-2 py-3 border-b-slate-300'>
                    <Stack align={'center'} className='w-full' direction={'row'} justify={'space-between'}>
                        <Heading className='text-slate-500'>Minimal Chat</Heading>
                    </Stack>
                </Box>
            </GridItem>
            <GridItem area={'sidebar'} >
                <Stack gap={'4'} className='w-full bg-slate-400 h-full p-4' align={'center'} justify={'start'} direction={'column'}>
                    <SideBarButton
                        onClick={() => navigate(AppRouteSlugs.home)}
                        title='Chat Messages'
                        active={pathname === AppRouteSlugs.home}
                        icon={<ChatIcon />}
                    />
                    <SideBarButton
                        onClick={() => navigate(AppRouteSlugs.search)}
                        active={pathname === AppRouteSlugs.search}
                        title='Search Section'
                        icon={<SearchIcon />}
                    />
                    <SideBarButton
                        onClick={() => navigate(AppRouteSlugs.settings)}
                        active={pathname === AppRouteSlugs.settings}
                        title='Search Section'
                        icon={<SettingsIcon />}
                    />
                </Stack>
            </GridItem>
            <GridItem area={'main'} >
                {children}
            </GridItem>
        </Grid>
    )
}

export default AppLayout