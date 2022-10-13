import React from 'react';
import { Box, Title } from './HomeView.styled';
import { ImHappy } from "react-icons/im";


const HomeView = () => (
    <Box>
        <Title>
            Welcome page of our service<ImHappy style={{paddingLeft: '10px', color: 'darkgreen'}}/>
        </Title>
    </Box>
)

export default HomeView;