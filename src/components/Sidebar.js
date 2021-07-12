import React from 'react'
import '../css/Sidebar.css'
import SidebarOption from './SidebarOption'
import HomeIcon from '@material-ui/icons/Home'
import SearchIcon from '@material-ui/icons/Search'
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic'
import { useDataLayerValue } from '../DataLayer'

const Sidebar = () => {
    const [{ playlists }] = useDataLayerValue()
    return (
        <div className="sidebar">
            <img
                className="sidebar__logo"
                src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
                alt="sidebar-logo"
            />
            <SidebarOption title="Home" Icon={HomeIcon} />
            <SidebarOption title="Search" Icon={SearchIcon} />
            <SidebarOption title="Your Library" Icon={LibraryMusicIcon} />

            <br />
            <strong className="sidebar__title">PLAYLISTS</strong>
            <hr />
            <div className="sidebar__playlist">
                {
                    playlists?.items?.map(playlist => <SidebarOption title={playlist.name} />)
                }
            </div>



        </div>
    )
}

export default Sidebar
