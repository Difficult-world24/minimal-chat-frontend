import { IconButton, Tooltip } from '@chakra-ui/react'
import React from 'react'

const SideBarButton = ({ active, icon, title, onClick }: { active: boolean; icon: React.ReactElement; title: string; onClick: () => void; }) => {
    return (
        <Tooltip hasArrow label={title} placement='right'>
            <IconButton
                onClick={onClick}
                colorScheme={active ? 'teal' : 'gray'}
                aria-label={title}
                size='lg'
                icon={icon}
            />
        </Tooltip>
    )
}

export default SideBarButton