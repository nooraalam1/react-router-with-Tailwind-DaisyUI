import { NavLink } from "react-router-dom";
const Navbar = () => {
        
    return (
        <div className="mt-5">
            <div className="flex justify-evenly items-center">
                <h2 className="text-2xl">Career Hub</h2>
                <NavLink to='/stat' >Statistics</NavLink>
                <NavLink to='/jobs'>Applied Jobs</NavLink>
                <NavLink to='/blog'>Blog</NavLink>
                <button className="btn btn-primary">Start Applying</button>
            </div>
            
        </div>
    );
};

export default Navbar;