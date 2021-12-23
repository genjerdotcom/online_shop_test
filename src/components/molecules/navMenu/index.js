import React from 'react'
import { Images } from '../../atoms';
import { ICBag,ICLogout,ICUser } from '../../../assets';
import { useHistory } from 'react-router';
import { LogoutAction } from '../../../modules/redux/actions/authActions';
import "./style.scss";

const NavMenu = () => {
    const history = useHistory(); 
    const Lstorage = JSON.parse(localStorage.getItem('user'))
    const handleLogout = async () => {
        await LogoutAction();
        history.push("/login")
    }
    return (
        <ul className="nav">
            {
                (Lstorage) ? 
                <React.Fragment>
                    <li className="nav--item">
                        <div className='cart'>
                            <Images className="cart--icon" src={ICBag} />
                            <span className="counter">4</span>
                        </div>
                    </li>
                    <li className="nav--item">
                        <div className='logout'>
                            <Images className="logout--icon" src={ICLogout} onClick={handleLogout} />
                        </div>
                    </li>
                </React.Fragment>
                : 
                <li className="nav--item">
                    <div className='user'>
                        <Images className="user--icon" src={ICUser} onClick={()=>history.push("/login")} />
                    </div>
                </li>
            }
        </ul>
    )
}

export default NavMenu
