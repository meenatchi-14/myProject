<<<<<<< HEAD
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../Reducers/loginReducers";

export default function SideBar() {
  const navigate=useNavigate();
  const{userName}=useSelector((state)=>state.loginOperation.data);
  const dispatch=useDispatch();

=======
// eslint-disable-next-line react/prop-types

import { useNavigate } from "react-router-dom";

export default function SideBar() {
  const navigate=useNavigate();
>>>>>>> 2f18706627a5ecf25f2a24838544c5440c22a10b
    return (
      <div className="side-bar">
        <div>
          <ul className="actions">
            <li>
<<<<<<< HEAD
              <div className="text font-bold leading-7 text-base-900">
                {userName}
              </div>
            </li>
          <li>
              <button className="btn btn-primary w-28"
              onClick={()=>navigate("/")}>
               Home
              </button>
            </li>
            <li>
              <button className="btn btn-primary w-28"
=======
              <button className="btn btn-primary"
>>>>>>> 2f18706627a5ecf25f2a24838544c5440c22a10b
              onClick={()=>navigate("/state")}>
                Use Memo
              </button>
            </li>
            <li>
              <button 
<<<<<<< HEAD
              className="btn btn-primary w-28"
=======
              className="btn btn-primary"
>>>>>>> 2f18706627a5ecf25f2a24838544c5440c22a10b
              onClick={()=>navigate("/callback")}>
              CallBack
              </button>
            </li>
<<<<<<< HEAD
            <li>
              <button 
              className="btn btn-primary"
              onClick={()=>navigate("/login")}>
              Login</button>
            </li>
            <li>
              <button 
              className="btn btn-primary"
              onClick={()=>dispatch(logoutUser())}>
              Logout</button>
            </li>
=======
            <li>three</li>
            <li>four</li>
>>>>>>> 2f18706627a5ecf25f2a24838544c5440c22a10b
            
          </ul>
        </div>
      </div>
    );
  }