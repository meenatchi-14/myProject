import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../Reducers/loginReducers";

export default function SideBar() {
  const navigate=useNavigate();
  const{userName}=useSelector((state)=>state.loginOperation.data);
  const dispatch=useDispatch();

    return (
      <div className="side-bar">
        <div>
          <ul className="actions">
            <li>
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
              onClick={()=>navigate("/state")}>
                Use Memo
              </button>
            </li>
            <li>
              <button 
              className="btn btn-primary w-28"
              onClick={()=>navigate("/callback")}>
              CallBack
              </button>
            </li>
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
            
          </ul>
        </div>
      </div>
    );
  }