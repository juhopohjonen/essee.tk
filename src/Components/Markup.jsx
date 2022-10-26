import { Link as MuiLink } from "@mui/material"
import { Link } from "react-router-dom"

const RouterLink = ({ children, to }) => {
    return <MuiLink sx={{ textDecoration: 'none' }} variant='body2' as={Link} to={to}>{children}</MuiLink>
}

export { RouterLink }