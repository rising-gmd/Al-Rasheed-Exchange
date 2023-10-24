import { Paper, Title } from '@mantine/core'
import React, { useMemo } from 'react'
import classes from './Location.module.css';
import { GoogleMap, MarkerF, useLoadScript } from '@react-google-maps/api';

const Location = () => {

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_KEY,
    });

    const center = useMemo(() => ({ lat: 23.572790, lng: 58.408210 }), []);

return (
    <>
        <Paper className={classes.mapParent}>
            {!isLoaded === true ? (<h1>Loading...</h1>) : (
                <GoogleMap
                    mapContainerClassName={classes.map}
                    center={center}
                    zoom={16}
                >
                    <MarkerF position={{ lat: 23.572790, lng: 58.408210 }} />
                </GoogleMap>
            )}
        </Paper>
    </>
)
}

export default Location