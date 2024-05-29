import "./Profile.css"
import { useSelector, useDispatch } from "react-redux";
import React from "react";
import { Menu, MenuItem, Rating } from "semantic-ui-react";
import { changeProfileMenuItem, fetchContacts } from "ReduxSlices/slices/Profile";
import { Link } from "react-router-dom";
import { selectIsAuth } from "ReduxSlices/slices/Auth";

import Contacts from "./Contacts/Contacts";

function Profile() {
    const IsAuth = useSelector(selectIsAuth)    
    const user = useSelector(state => state.user.auth.user)
    const menuItems = useSelector(state => state.user.profile.menuItems)
    const currentMenu = useSelector(state => state.user.profile.activeMenu)
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(fetchContacts({userId: user?._id}));
    }, [dispatch, user]);


    if (!IsAuth) {
        return (
            <div className=" flex-auto bg-[#D3D7E4]/[0.7] mx-[5rem] mt-[3rem] max-h-[50rem] rounded-lg flex flex-col overflow-clip items-center">
                <div className="text-[24px] text-[#484444]"> Ой лишенкьо, ви не авторизованi </div>
                <Link to="/"><button className="bg-[#587CDA] text-white px-4 py-4 w-fit rounded-md text-[1.5rem] hover:bg-white hover:text-[#2D2D2D]"> Повернутись </button></Link>
                
            </div>
        )
    }



    return (
        <div className=" flex-auto bg-[#D3D7E4]/[0.7] mx-[5rem] mt-[3rem] max-h-[50rem] rounded-lg flex flex-col overflow-clip">
            <div className="flex flex-row w-full h-fit p-4 space-x-4">
                <img className=" h-[150px] w-[150px]" src={user?.avatarUrl || process.env.PUBLIC_URL + "/ProfileIMG.png"} alt="Profile's avatar" />
                <div className="flex flex-col">
                    <div className="flex flex-row">
                        <div className=" text-[40px] text-nowrap">{user?.fullName}</div>
                        <div>{user?.isDeveloper && <img className=" w-[47px] mt-4 p-1 " src={process.env.PUBLIC_URL + "/DevIcon.png"} alt="Profile's avatar" />}</div>
                    </div>
                    <div className=" text-[24px] grid grid-cols-2 w-[300px]">
                        <div>Швидкiсть</div><div><Rating defaultRating={+user.Profile.Speed} maxRating={5} disabled /></div>
                        <div>Якiсть</div><div><Rating defaultRating={+user.Profile.Quality} maxRating={5} disabled /></div>
                        <div>Комунiкацiя</div><div><Rating defaultRating={+user.Profile.Communication} maxRating={5} disabled /></div>
                    </div>


                </div>


                {user?.isDeveloper && <div className=" justify-self-end w-full text-right text-[#484444] text-[46px] font-bold">{user?.Profile?.pricePerHour}$</div>}

            </div>

            <div className="w-full h-full flex flex-row p-4 space-x-4">
                <div className="h-full">
                    <Menu vertical className="h-full">
                        <MenuItem
                            name={menuItems.Tasks}
                            active={currentMenu === menuItems.Tasks}
                            onClick={() => dispatch(changeProfileMenuItem(menuItems.Tasks))}
                        >
                            Анкети
                        </MenuItem>

                        <MenuItem
                            name={menuItems.Education}
                            active={currentMenu === menuItems.Education}
                            onClick={() => dispatch(changeProfileMenuItem(menuItems.Education))}
                        >
                            Освіта
                        </MenuItem>

                        <MenuItem
                            name={menuItems.Projects}
                            active={currentMenu === menuItems.Projects}
                            onClick={() => dispatch(changeProfileMenuItem(menuItems.Projects))}
                        >
                            Проекти
                        </MenuItem>

                        <MenuItem
                            name={menuItems.Contacts}
                            active={currentMenu === menuItems.Contacts}
                            onClick={() => dispatch(changeProfileMenuItem(menuItems.Contacts))}
                        >
                            Контакти
                        </MenuItem>
                    </Menu>
                </div>
                <div className="w-full bg-[white] rounded-md p-4">
                    {currentMenu === menuItems.Tasks && "-"}
                    {currentMenu === menuItems.Education && "-"}
                    {currentMenu === menuItems.Projects && "-"}
                    {currentMenu === menuItems.Contacts && <Contacts />}
                </div>



            </div>

        </div>


    )
}

export default Profile;