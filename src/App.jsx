import '@mantine/core/styles.css';
import { Box, MantineProvider } from '@mantine/core';
import { theme } from "./theme.js";
import Header from './Header/Header.jsx';
import Hero from './Hero/Hero.jsx';
import Features from './Features/Features.jsx';
import Contact from './Contact/Contact.jsx';
import Location from './Contact/Location/Location.jsx';
import Footer from './Footer/Footer.jsx';
import QR from './QR/QR.jsx';
import Companies from './Companies/Companies.jsx';
import Gallary from './Gallary/Gallary.jsx';
import { useWindowScroll } from '@mantine/hooks';
import Whatsapp from './Whatsapp/Whatsapp.jsx';
import { withNamespaces } from 'react-i18next';
import { useEffect } from 'react';
import i18n from './i18n.js';

const App = ({ t }) => {

  useEffect(() => {
    i18n.changeLanguage("ar")
  }, [])

  return (
    <MantineProvider theme={theme}>
      <>
        <Whatsapp />
        <Header />
        <Hero />
        <Companies />
        <QR />
        <Features />
        <Gallary />
        <Contact />
        <Footer />
      </>
    </MantineProvider>
  )
}

export default withNamespaces()(App)