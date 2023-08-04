import { useContext } from "react"
import "./Header.css"
import { ThemeContext } from "../../ThemeContext"
import { BiSearch } from "react-icons/bi"
import { AiOutlineUser } from "react-icons/ai"
import { TbMessages } from "react-icons/tb"
import { MdAnalytics } from "react-icons/md"
import { HiOutlineMoon } from "react-icons/hi"
import { RiSettingsLine } from "react-icons/ri"
import { HiOutlineLogout } from "react-icons/hi"

const Header = () => {
    const { DarkTheme, setDarkTheme } = useContext(ThemeContext)

    function changeTheme(){
        setDarkTheme(!DarkTheme)
    }
    return (
        <header className={`${DarkTheme && "dark"}`}>
            <div className="search-bar">
                <input type="text" placeholder="search..." />
                <BiSearch className="icon" />
            </div>

            <div className="tools">
                <AiOutlineUser className="icon" />
                <TbMessages className="icon" />
                <MdAnalytics className="icon" />

                <div className="divider"></div>

                <HiOutlineMoon className="icon" onClick={changeTheme} />
                <RiSettingsLine className="icon" />
                <HiOutlineLogout className="icon"/>

                <div className="divider"></div>

                 <div className="user">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbYE9px22HMtGqsmd6v-p9pQN_N9ZDbJaCOQ&usqp=CAU" alt="" className="profile-img" />
                 </div>

            </div>
        </header>
    )
}

export default Header
