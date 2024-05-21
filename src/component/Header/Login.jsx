import MyModal from "../Tools/Modal/Modal";
import React from 'react'
import { MenuItem, Menu, Icon, Input, Button } from 'semantic-ui-react'
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { fetchAuth, fetchRegister } from "ReduxSlices/slices/Auth";

function LoginContent() {
    const dispatch = useDispatch();
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors, isValid },
    } = useForm({
        defaultValues: {
            email: "test@test.com",
            password: "12345",
        },
        mode: "onChange",
    });

    const OnSubmit = async (params) => {
        dispatch(fetchAuth(params));
    };

    return (
        < >
            <form onSubmit={handleSubmit(OnSubmit)} className="flex flex-col space-y-4">
                <label>Email</label>

                <Input iconPosition='left' placeholder='you@example.com' type="email" >
                    <Icon name='at' />
                    <input {...register("email", { required: "Email is required." })} />
                </Input>
                <br />
                <label>Password</label>
                <Input iconPosition='left' placeholder='************' type="password">
                    <Icon name='key' />
                    <input {...register("password", { required: "Password is required." })} />
                </Input>
                <Button className=" w-1/2" color='blue'>
                    Login
                </Button>
            </form>

        </>

    )
}

function SignUpContent() {
    const dispatch = useDispatch();
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors, isValid },
    } = useForm({
        defaultValues: {
            email: "test@test.com",
            password: "12345",
            fullName: "Debil",
        },
        mode: "onChange",
    });

    const OnSubmit = async (params) => {
        dispatch(fetchRegister(params));
    };
    return (
        <>
            <form onSubmit={handleSubmit(OnSubmit)} className="flex flex-col space-y-4">
                <label>Email</label>
                
                <Input iconPosition='left' placeholder='you@example.com' type="email">
                    <Icon name='at' />
                    <input {...register("email", { required: "Email is required." })} />
                </Input>
                <br />
                <label>Password</label>
                
                <Input iconPosition='left' placeholder='************' type="password">
                    <Icon name='key' />
                    <input {...register("password", { required: "Password is required." })} />
                </Input>
                <br />
                <label>Name</label>
                <Input iconPosition='left' placeholder='Name' type="text">
                    <Icon name='user' />
                    <input {...register("fullName", { required: "FullName is required." })} />
                </Input>
                <Button className=" w-1/2" color='blue'>
                    Sign In
                </Button>
            </form>

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

    const handleItemClick = (e, { name }) => {
        setactiveItem(name)

    }

    return (
        <MyModal buttonTitle={"Login"} currentbuttonTitle={activeItem} title='Login/SignUp' content={<MenuContent activeItem={activeItem} handleItemClick={handleItemClick} />}

        />
    )
}


export default Login;


