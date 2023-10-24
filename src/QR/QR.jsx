import React from 'react'
import classes from './QR.module.css';
import { Box, Paper, SimpleGrid, Text, Title } from '@mantine/core';
import QRInstructions from './QRInstructions/QRInstructions';
import QRCard from './QRCard/QRCard';

const QR = () => {

    return (
        <Box className={classes.qrParent} id='#qrcode'>
            <SimpleGrid
                cols={{ base: 1, sm: 2 }}
                spacing={{ base: 10, sm: 'xl' }}
                verticalSpacing={{ base: 'md', sm: 'xl' }}
            >
                <QRInstructions />
                <QRCard />
            </SimpleGrid>
        </Box>
    )
}

export default QR