import { useContext, useState } from "react"
import "./Content.css"
import { ThemeContext } from "../../ThemeContext"
import { FiSettings, FiTwitter } from "react-icons/fi"
import { RiChat1Line, RiChat3Line, RiFolderSettingsFill, RiListSettingsLine, RiMailSettingsLine, RiSettingsLine, RiToolsLine, RiUserSettingsLine } from "react-icons/ri"
import { RxCardStackMinus } from "react-icons/rx"
import Card from "../CardTemplate/Card"
import { AiFillControl, AiOutlineEdit, AiOutlineLike, AiOutlineUserSwitch, AiOutlineUsergroupAdd, AiOutlineWhatsApp } from "react-icons/ai"
import Analytics from "../AnalyticsTemplare/Analytics"
import img from '../../illustration.webp';
import { GenIcon } from "react-icons"
import { BiLogoInstagram, BiSolidBasketball } from "react-icons/bi"
import CicularProgress from "../CicularProgress/CicularProgress"

const Content = () => {
  const { DarkTheme } = useContext(ThemeContext)

  const [value_i] = useState(Math.floor(Math.random() * 100))
  const [value_i_offset] = useState(
    315 - (value_i / 100) * 315
  )

  const [value_ii] = useState(Math.floor(Math.random() * 100))
  const [value_ii_offset] = useState(
    315 - (value_ii / 100) * 315
  )

  return (
    <div className={`content ${DarkTheme && "dark"}`}>
      <div className="row header">
        <FiSettings className="cog" />

        {/* <h1 className="txt-head"> Current Notifications</h1> */}

        <div className="divider"></div>

        <div className="notificatinos">

          < RiChat1Line />
          < RiChat1Line />
          < RiChat1Line />
          < RiChat1Line />
          < RiChat1Line />

        </div>

        <svg
          className="bg-waves"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
          xmlns="http://www.w3.org/2000/svg"
          style={{ fill: '#ffffff', width: '289%', height: 200, transform: 'scaleX(-1)' }}
        >
          <path
            d="M0 0v46.29c47.79 22.2 103.59 32.17 158 28 70.36-5.37 136.33-33.31 206.8-37.5 73.84-4.36 147.54 16.88 218.2 35.26 69.27 18 138.3 24.88 209.4 13.08 36.15-6 69.85-17.84 104.45-29.34C989.49 25 1113-14.29 1200 52.47V0z"
            opacity=".25"
          />
          <path
            d="M0 0v15.81c13 21.11 27.64 41.05 47.69 56.24C99.41 111.27 165 111 224.58 91.58c31.15-10.15 60.09-26.07 89.67-39.8 40.92-19 84.73-46 130.83-49.67 36.26-2.85 70.9 9.42 98.6 31.56 31.77 25.39 62.32 62 103.63 73 40.44 10.79 81.35-6.69 119.13-24.28s75.16-39 116.92-43.05c59.73-5.85 113.28 22.88 168.9 38.84 30.2 8.66 59 6.17 87.09-7.5 22.43-10.89 48-26.93 60.65-49.24V0z"
            opacity=".5"
          />
          <path d="M0 0v5.63C149.93 59 314.09 71.32 475.83 42.57c43-7.64 84.23-20.12 127.61-26.46 59-8.63 112.48 12.24 165.56 35.4C827.93 77.22 886 95.24 951.2 90c86.53-7 172.46-45.71 248.8-84.81V0z" />
        </svg>

      </div>

      <div className="row header">
        <Card Icon={AiOutlineUsergroupAdd} title="Followers" value="None :)" />
        <Card Icon={RiChat3Line} title="Messages" value="+ 0" />
        <Card Icon={AiOutlineLike} title="Likes" value="+ 0" />
        <Card Icon={RxCardStackMinus} title="Earnings" value="$ 0.0" />

        <svg
          className="bg-waves"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
          xmlns="http://www.w3.org/2000/svg"
          style={{ fill: '#ffffff', width: '289%', height: 200, transform: 'scaleX(-1)' }}
        >
          <path
            d="M0 0v46.29c47.79 22.2 103.59 32.17 158 28 70.36-5.37 136.33-33.31 206.8-37.5 73.84-4.36 147.54 16.88 218.2 35.26 69.27 18 138.3 24.88 209.4 13.08 36.15-6 69.85-17.84 104.45-29.34C989.49 25 1113-14.29 1200 52.47V0z"
            opacity=".25"
          />
          <path
            d="M0 0v15.81c13 21.11 27.64 41.05 47.69 56.24C99.41 111.27 165 111 224.58 91.58c31.15-10.15 60.09-26.07 89.67-39.8 40.92-19 84.73-46 130.83-49.67 36.26-2.85 70.9 9.42 98.6 31.56 31.77 25.39 62.32 62 103.63 73 40.44 10.79 81.35-6.69 119.13-24.28s75.16-39 116.92-43.05c59.73-5.85 113.28 22.88 168.9 38.84 30.2 8.66 59 6.17 87.09-7.5 22.43-10.89 48-26.93 60.65-49.24V0z"
            opacity=".5"
          />
          <path d="M0 0v5.63C149.93 59 314.09 71.32 475.83 42.57c43-7.64 84.23-20.12 127.61-26.46 59-8.63 112.48 12.24 165.56 35.4C827.93 77.22 886 95.24 951.2 90c86.53-7 172.46-45.71 248.8-84.81V0z" />
        </svg>

      </div>

      {/* <span className="section-title"> Brief Overiew </span> */}

      <div className="row square">
        <Analytics chart_i />
      </div>

      <div className="row square">
        <Analytics chart_ii />
      </div>

      <div className="row square">
        <Analytics chart_iii />
      </div>

      <div className="row square">
        <Analytics title="New Followers" value="+ 0" illustration={img} />
      </div>

      {/* <span className="section-title">Analytic Tools </span> */}

      <div className="row tall-square">
        <svg
          className="bg-waves"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
          xmlns="http://www.w3.org/2000/svg"
          style={{ fill: '#ffffff', width: '289%', height: 200, transform: 'scaleX(-1)' }}
        >
          <path
            d="M0 0v46.29c47.79 22.2 103.59 32.17 158 28 70.36-5.37 136.33-33.31 206.8-37.5 73.84-4.36 147.54 16.88 218.2 35.26 69.27 18 138.3 24.88 209.4 13.08 36.15-6 69.85-17.84 104.45-29.34C989.49 25 1113-14.29 1200 52.47V0z"
            opacity=".25"
          />
          <path
            d="M0 0v15.81c13 21.11 27.64 41.05 47.69 56.24C99.41 111.27 165 111 224.58 91.58c31.15-10.15 60.09-26.07 89.67-39.8 40.92-19 84.73-46 130.83-49.67 36.26-2.85 70.9 9.42 98.6 31.56 31.77 25.39 62.32 62 103.63 73 40.44 10.79 81.35-6.69 119.13-24.28s75.16-39 116.92-43.05c59.73-5.85 113.28 22.88 168.9 38.84 30.2 8.66 59 6.17 87.09-7.5 22.43-10.89 48-26.93 60.65-49.24V0z"
            opacity=".5"
          />
          <path d="M0 0v5.63C149.93 59 314.09 71.32 475.83 42.57c43-7.64 84.23-20.12 127.61-26.46 59-8.63 112.48 12.24 165.56 35.4C827.93 77.22 886 95.24 951.2 90c86.53-7 172.46-45.71 248.8-84.81V0z" />
        </svg>

        <span className="tools-section"> Frequently Used</span>

        <div className="tools">
          <Card Icon={RiToolsLine} />
          <Card Icon={FiSettings} />
          <Card Icon={AiOutlineUsergroupAdd} />
          <Card Icon={RiToolsLine} />
          <Card Icon={RiMailSettingsLine} />
          <Card Icon={RiListSettingsLine} />
        </div>
        <div className="divider"></div>

        <span className="tools-section"> More tools</span>

        <div className="tools">
          <Card Icon={RiUserSettingsLine} />
          <Card Icon={RiToolsLine} />
          <Card Icon={AiOutlineUsergroupAdd} />
          <Card Icon={RiToolsLine} />
          <Card Icon={AiOutlineUsergroupAdd} />
          <Card Icon={RiToolsLine} />
          <Card Icon={AiOutlineUsergroupAdd} />
          <Card Icon={RiMailSettingsLine} />
        </div>

        <div className="divider"></div>
        <span className="tools-section"> Advanced tools</span>

        <div className="tools">
          <Card Icon={RiFolderSettingsFill} />
          <Card Icon={RiUserSettingsLine} />
          <Card Icon={RiSettingsLine} />
        </div>


      </div>

      <div className="row tall-square inv-bg ">
        <svg
          className="bg-waves"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
          xmlns="http://www.w3.org/2000/svg"
          style={{ fill: '#ffffff', width: '289%', height: 200, transform: 'scaleX(-1)' }}
        >
          <path
            d="M0 0v46.29c47.79 22.2 103.59 32.17 158 28 70.36-5.37 136.33-33.31 206.8-37.5 73.84-4.36 147.54 16.88 218.2 35.26 69.27 18 138.3 24.88 209.4 13.08 36.15-6 69.85-17.84 104.45-29.34C989.49 25 1113-14.29 1200 52.47V0z"
            opacity=".25"
          />
          <path
            d="M0 0v15.81c13 21.11 27.64 41.05 47.69 56.24C99.41 111.27 165 111 224.58 91.58c31.15-10.15 60.09-26.07 89.67-39.8 40.92-19 84.73-46 130.83-49.67 36.26-2.85 70.9 9.42 98.6 31.56 31.77 25.39 62.32 62 103.63 73 40.44 10.79 81.35-6.69 119.13-24.28s75.16-39 116.92-43.05c59.73-5.85 113.28 22.88 168.9 38.84 30.2 8.66 59 6.17 87.09-7.5 22.43-10.89 48-26.93 60.65-49.24V0z"
            opacity=".5"
          />
          <path d="M0 0v5.63C149.93 59 314.09 71.32 475.83 42.57c43-7.64 84.23-20.12 127.61-26.46 59-8.63 112.48 12.24 165.56 35.4C827.93 77.22 886 95.24 951.2 90c86.53-7 172.46-45.71 248.8-84.81V0z" />
        </svg>

        <header className="tall-square-header">
          <div className="left">
            <AiOutlineEdit className="icon" />
          </div>

          <div className="right">
            <AiFillControl className="icon" />
            <RiChat3Line className="icon" />
            <AiOutlineUserSwitch className="icon" />
          </div>
        </header>

        <div className="admin">
          <div className="profile">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbYE9px22HMtGqsmd6v-p9pQN_N9ZDbJaCOQ&usqp=CAU" alt="" className="profile-img" />
          </div>

          <div className="info">
            <h2 className="admin-name">creative ambition</h2>
            <span className="admin-about">Full-Stack & Content Creator</span>
          </div>

          <div className="admin-socials">
            <Card Icon={AiOutlineWhatsApp} />
            <Card Icon={BiLogoInstagram} />
            <Card Icon={FiTwitter} />
            <Card Icon={BiSolidBasketball} />


          </div>

        </div>

      </div>

      <div className="row side-rect">
        <section>
          <CicularProgress color="#810551" value={value_i} offset={value_i_offset} />
          <div className="summary">
            <h2 className="summary-title">Performance</h2>
            <span className="summary-info">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores praesentium quia voluptatibus adipisci ipsa veniam, commodi repellat magnam quis optio sapiente enim nam dolore
            </span>
          </div>
          <CicularProgress color="#00464e" value={value_ii} offset={value_ii_offset} />
        </section>
      </div>
      <div className="row side-rect">
        <section>
          <CicularProgress color="#00464e" value={value_ii} offset={value_ii_offset} />

          <div className="more-details">
            <h1 className="title">
              Detailed Analysis
            </h1>
            <span className="txt">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam maiores inventore esse consectetur optio iusto nostrum dolorum cum enim repellat,
            </span>
          </div>
        </section>
      </div>
      <div className="row side-rect">
        <section>
       
        <CicularProgress color="#810551" value={value_i} offset={value_i_offset} />

          <div className="more-details">
            <h1 className="title">
              Detailed Analysis
            </h1>
            <span className="txt">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam maiores inventore esse consectetur optio iusto nostrum dolorum cum enim repellat,
            </span>
          </div>
        </section>
      </div>


    </div>
  )
}

export default Content


