import { Affix, Button, ThemeIcon, Transition } from '@mantine/core'
import { useWindowScroll } from '@mantine/hooks';
import { IconBrandWhatsapp } from '@tabler/icons-react'
import React from 'react'

const Whatsapp = () => {

    const [scroll, scrollTo] = useWindowScroll();


    return (
        <>
            <Affix position={{ bottom: 20, right: 20 }}>
                <Transition transition="slide-up" mounted={scroll.y > 0}>
                    {(transitionStyles) => (
                        <a href="https://wa.me/971544282060" target='_blank'>
                            <ThemeIcon
                                radius={56}
                                size={56}
                                color='rgb(20, 198, 86)'
                                style={transitionStyles}
                            >
                                <IconBrandWhatsapp size={28} />
                            </ThemeIcon>
                        </a>
                    )}
                </Transition>
            </Affix>
        </>
    )
}

export default Whatsapp