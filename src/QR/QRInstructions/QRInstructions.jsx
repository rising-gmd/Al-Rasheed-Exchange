import React from 'react'
import classes from './QRInstructions.module.css';
import { Button, List, Text } from '@mantine/core';
import { IconPlayerPlay, IconVideo } from '@tabler/icons-react';

const QRInstructions = () => {
    return (
        <div className={classes.instContainer}>
            <Text className={classes.insTitle} fz={"24px"} fw={500}>Scan this QR Code from your Mobile</Text>
            <List type='ordered' spacing={16} mt={16}>
                <List.Item>Open a QR code scanner app or use your device's camera.</List.Item>
                <List.Item>Position the camera to capture the QR code.</List.Item>
                <List.Item>Scan the QR code.</List.Item>
                <List.Item>Result could include visiting a website or accessing information.</List.Item>
            </List>
            <Button size='md' className={classes.control} mt={'xl'} rightSection={<IconPlayerPlay size={18} style={{ marginTop: 4 }} />}><a href="https://www.youtube.com/shorts/ULlRNdam4Pw" target="_blank" style={{ textDecoration: 'none', color: 'white' }}>Watch Video guide</a></Button>
        </div>
    )
}

export default QRInstructions