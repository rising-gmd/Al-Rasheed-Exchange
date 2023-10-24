import { Blockquote, Modal } from '@mantine/core'
import React from 'react'
import { IconInfoCircle } from '@tabler/icons-react';

const AboutModal = ({ opened, close }) => {
    return (
        <Modal
            opened={opened}
            onClose={close}
            title="About Us"
            centered={true}
            overlayProps={{
                backgroundOpacity: 0.55,
                blur: 3,
            }}

        >
            <Blockquote m={'xs'} iconSize={24} color="blue" radius="md" icon={<IconInfoCircle size={24} />} mt={12}>
                Al Rasheed International Exchange is a renowned financial institution with a strong presence in Muscat, Oman, Iran, and the United Arab Emirates. Our branches in these strategic locations provide a wide range of foreign exchange and remittance services, making us a trusted partner for currency exchange and money transfer needs in the Middle East.
            </Blockquote>
        </Modal>
    )
}

export default AboutModal