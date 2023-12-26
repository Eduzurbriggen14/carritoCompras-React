import { Badge } from "@mui/material"
import { ShoppingCart } from "@mui/icons-material"
import { NavLink } from "react-router-dom"
import { useContext } from "react"
import { CarritoContext } from "../context/CarritoContext"// lo importa para poder colocar el numero de productos en el icono del carrito


export const NavBar = () => {
    const { listaCompras } = useContext(CarritoContext)
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink to='./' className="nav-link active">Compras</NavLink>
                        </li>
                    </ul>
                    <NavLink to='./carrito'>
                        <Badge badgeContent={listaCompras.length} color="error">
                            <ShoppingCart color="action" />
                        </Badge>
                    </NavLink>
                </div>
            </div>
        </nav>
    )
}