import React from 'react'
import '../css/SidebarOption.css'

const SidebarOption = ({ title, Icon }) => {
    return (
        <div className="sidebarOption">
            {Icon && <Icon className="sidebarOption__icon" />}
            {Icon ? <h4>{title}</h4> : <h4>{title}</h4>}
        </div>
    )
}

export default SidebarOption
