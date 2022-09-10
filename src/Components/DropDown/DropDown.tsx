import { NavigateFunction } from 'react-router-dom'
import './style/css.css'
export const DropDown = ({ name, menu }: { name: string, menu: { path: string, text: string }[] }) => {

  return <div className="dropdown">
    <button className="dropbtn">{!!name ? name : 'LogIn'}</button>
    <div className="dropdown-content">
      {menu.map(link => <a href={link.path} key={link.text}>{link.text}</a>)}
    </div>
  </div>
}