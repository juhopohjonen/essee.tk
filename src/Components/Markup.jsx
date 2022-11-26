import { Box, Link as StyledLink } from "@mui/material"
import { Link } from "react-router-dom"

const RouterLink = ({ children, to }) => {
    return (
        <StyledLink color='primary' component={Link} to={to}>
            { children }
        </StyledLink>
    )
}

const NoStyle = ({ children, to }) => {
    return (
        <Box sx={{ color: 'text.primary', textDecoration: 'none' }} component={Link} to={to} >
            {children}
        </Box>
    )
}

export { RouterLink, NoStyle }