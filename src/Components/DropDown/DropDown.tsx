import './style/css.css'
export const DropDown = ({ name, menu }: { name: string, menu: { path: string, text: string }[] }) => {

  return <ul className="dropdown">
      {menu.map(link => <li key={link.text}><a href={link.path}>{link.text}</a></li>)}
  </ul>
}