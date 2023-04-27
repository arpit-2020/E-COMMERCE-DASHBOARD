import react, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
const Nav = () => {
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
        navigate("/signup");
    }
    return (
        <div>
            <img 
            alt="logo"
            className='logo'
            src='data:image/jpeg;base64,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'/>
           {auth ? <ul className="nav-ul">

                <li> <Link to="/">product</Link> </li>
                <li> <Link to="/add">add product</Link> </li>
                <li> <Link to="/update">update product</Link> </li>

                <li> <Link to="/profile">profile</Link> </li>
                <li><Link onClick={logout} to="/signup">logout ({JSON.parse(auth).name})</Link></li> 


        

        </ul >
:
<ul className="nav-ul nav-right">
<li><Link to ="/Signup">Signup</Link></li>
<li><Link to ="/login">Login</Link></li>
<li><Link to ="/home">HOME</Link></li>
</ul>}

        </div >
    )
}
export default Nav;