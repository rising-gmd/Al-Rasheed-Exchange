import classes from './Companies.module.css';
import { Image, Text } from '@mantine/core'
import threeM from "../assets/logos/3m.svg"
import barstoo from "../assets/logos/barstool-store.svg"
import budweiser from "../assets/logos/budweiser.svg"
import buzzfeed from "../assets/logos/buzzfeed.svg"
import forbes from "../assets/logos/forbes.svg"
import macys from "../assets/logos/macys.svg"
import menshealth from "../assets/logos/menshealth.svg"
import mrbeat from "../assets/logos/mrbeast.svg"
import { withNamespaces } from 'react-i18next';

const Companies = ({ t }) => {

    return (

        <div className={classes.logos} id='#companies'>

            <Text className={classes.companyTitle}>{t('TRUSTED BY OVER 1K+ COMPANIES')}</Text>

            <div className={classes.logosSlide}>
                <img src={threeM} />
                <img src={barstoo} />
                <img src={budweiser} />
                <img src={buzzfeed} />
                <img src={forbes} />
                <img src={macys} />
                <img src={menshealth} />
                <img src={mrbeat} />
            </div>

            <div className={classes.logosSlide}>
                <img src={threeM} />
                <img src={barstoo} />
                <img src={budweiser} />
                <img src={buzzfeed} />
                <img src={forbes} />
                <img src={macys} />
                <img src={menshealth} />
                <img src={mrbeat} />
            </div>

        </div>

    )
}

export default withNamespaces()(Companies);