import { Link as MuiLink } from "@mui/material"
import { Link } from "react-router-dom"

const RouterLink = ({ children, to }) => {
    return (
        <Link color='primary' as={MuiLink} to={to}>
            { children }
        </Link>
    )
}

export { RouterLink }