import{Link} from 'react-router-dom';
export default function Login(){
    return(
        <div>
            <h1>Login Here</h1>

           <table>
            <tr>
                <td>Username:</td>
                <td><input type='text' name='username' onChange=''></input></td>
            </tr>
            <tr>
                <td>Password:</td>
                <td><input type='password' name='password' onChange=''></input></td>
            </tr>
            <tr>
                <td colSpan={2} style={{color:'red'}}></td>
                
            </tr>
           </table>
        </div>
    )
}