import { NavLink } from "react-router-dom";

export const Nav = () => {
    return (
        <nav>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/produtos'>Produtos</NavLink>
            <NavLink to='/sobre'>Sobre</NavLink>
        </nav>
    )
}
export default Nav 
