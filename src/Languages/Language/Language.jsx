import React from 'react'
import { Avatar, Image, Menu } from '@mantine/core'
import i18n from '../../i18n';
import { withNamespaces } from 'react-i18next'; 

const Language = ({ item, setSelected, t }) => {

    function changeLanguage() {
        setSelected(item)
        i18n.changeLanguage(item.lang)
    }

    return (
        <Menu.Item leftSection={<Avatar src={item.image} size={18} />} onClick={() => changeLanguage(item)}>
            {t(item.label)}
        </Menu.Item>
    )
}

export default withNamespaces()(Language)