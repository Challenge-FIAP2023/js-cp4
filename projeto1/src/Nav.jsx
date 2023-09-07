import { Link } from "react-router-dom"

function Nav (){
return (
    <div>
        <Link to="/">Home|</Link>
        <Link to="/Produtos">Produtos|</Link>
        <Link to="/Sobre">Sobre</Link>
    </div>
)
}

export default Nav
