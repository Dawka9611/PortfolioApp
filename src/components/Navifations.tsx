import { Link } from 'react-router-dom'
import styled from 'styled-components'

const navigations = [
    { name: 'Home', link: '/login', },
    { name: 'How it works', link: '/login', },
    { name: 'Log in', link: '/login', },
    { name: 'Sign up', link: '/login', },
]

const Navigations = () => {
    return <NavigationStyle>
        {navigations.map((el, ind) => {
            return <div>
                {/* <Link to='/login'> */}
                    {el.name}
                {/* </Link> */}
            </div>
        })}
    </NavigationStyle>
}

export default Navigations

const NavigationStyle = styled.div`
color: red;
`