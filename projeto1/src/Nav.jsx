import { Link } from "react-router-dom"

function Nav (){
return (
    <div>
        <Link to="/">Home</Link>
        <Link to="/produtos">Produtos</Link>
        <Link to="/sobre">Sobre</Link>
    </div>
)
}

export default Nav
