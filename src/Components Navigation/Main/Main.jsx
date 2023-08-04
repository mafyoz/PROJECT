import { useContext } from "react"
import "./Main.css"
import { ThemeContext } from "../../ThemeContext"
import Header from "../HeaderTemplare/Header"
import Content from "../ContentTemplare/Content"

const Main = () => {

const{DarkTheme} = useContext(ThemeContext)

  return (
    <div className={`main ${DarkTheme && "dark"}`}>
      <Header/>
      <Content/>
    </div>
  )
}

export default Main
