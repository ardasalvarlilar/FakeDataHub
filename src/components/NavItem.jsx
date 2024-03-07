/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'

export default function NavItem({text,url,style}) {
  return (
    <li>
      <Link to={url} className={style}>{text}</Link>
    </li>
  )
}
