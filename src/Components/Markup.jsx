import { Link as StyledLink } from "@mui/material"
import { Link } from "react-router-dom"

const RouterLink = ({ children, to }) => {
    return (
        <StyledLink color='primary' component={Link} to={to}>
            { children }
        </StyledLink>
    )
}

export { RouterLink }