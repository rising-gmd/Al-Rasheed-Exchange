import { Paper } from '@mantine/core'
import React from 'react'
import classes from './QRCard.module.css';


const QRCard = () => {
    return (
        <div className={classes.qrCardParent}>
            <Paper className={classes.card} shadow='lg' radius={'lg'}> </Paper>
        </div>
    )
}

export default QRCard