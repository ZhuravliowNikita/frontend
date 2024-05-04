import MyModal from "../Tools/Modal/Modal";
import React from 'react'
import { MenuItem, Menu, Icon, Input, Button } from 'semantic-ui-react'

function LoginContent() {
    return (
        <>
            <label>Email</label>
            <br />
            <Input iconPosition='left' placeholder='you@example.com' type="email">
                <Icon name='at' />
                <input />
            </Input>
            <br />
            <br />
            <label>Password</label>
            <br />
            <Input iconPosition='left' placeholder='************' type="password">
                <Icon name='key' />
                <input />
            </Input>
        </>

    )
}

function SignUpContent() {
    return (
        <>
            <label>Email</label>
            <br />
            <Input iconPosition='left' placeholder='you@example.com' type="email">
                <Icon name='at' />
                <input />
            </Input>
            <br />
            <br />
            <label>Password</label>
            <br />
            <Input iconPosition='left' placeholder='************' type="password">
                <Icon name='key' />
                <input />
            </Input>
        </>
    )
}

function MenuContent(props) {
    const activeItem = props.activeItem
    const handleItemClick = props.handleItemClick
    return (
        <>
            <Menu pointing secondary>
                <MenuItem
                    name='Login'
                    active={activeItem === 'Login'}
                    onClick={handleItemClick}
                />
                <MenuItem
                    name='Sign Up'
                    active={activeItem === 'Sign Up'}
                    onClick={handleItemClick}
                />
            </Menu>
            {activeItem === 'Login' &&
                <LoginContent></LoginContent>
            }
            {activeItem === 'Sign Up' &&
                <SignUpContent></SignUpContent>
            }
        </>

    )
}

function Login() {
    const [
        activeItem, setactiveItem
    ] = React.useState('Login')

    const handleItemClick = (e, { name }) => setactiveItem(name)

    return (
        <MyModal buttonTitle='Login' title='Login/SignUp' content={<MenuContent activeItem={activeItem} handleItemClick={handleItemClick} />}

        />
    )
}


export default Login;


