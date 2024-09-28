import React from "react";
import {Link} from "react-router-dom";

const Navbar = ()=>{
    return(
        <nav>
            <ul>
                <li>
                    <Link to='/tasks'>View Task</Link>
                </li>
                <li>
                    <Link to="/add-task">Add Task</Link>
                </li>
            </ul>
        </nav>      

    )
}
export default Navbar