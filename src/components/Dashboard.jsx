import {Link} from 'react-router-dom';
export default function Dashboard(){
    return(
        <div>
            <h1>Welcome to Dashbord</h1>
            <nav>
                <ul>
                    <li><Link to='/' >Login page</Link></li>
                </ul>
             </nav>

             
        </div>
    )
}