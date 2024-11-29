import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Register(){
    const [user,setUser]=useState({fname:'',lname:'',username:'',password:'',conPassword:'',error:''});
    const navigate=useNavigate();
    const getUserInput = (e)=>{
        const {name,value} = e.target;
        setUser((prev)=>({
            ...prev,[name]:value,
        }))
    }

    const authentication=()=>{
        if (user.password === user.conPassword){
            setUser ({fname:'',lname:'',username:'',password:'',conPassword:'',error:''})
            navigate ('/dashboard')
        }else{
            setUser({error:'Invalid '});
        }
    }
    return(
        <div>
            <table>
                <tr>
                    <td>Firstname:</td>
                    <td><input type='text' name='fname' onChange={getUserInput}/></td>
                </tr> 
                <tr>   
                    <td>Lastname:</td>
                    <td><input type='text' name='lname' onChange={getUserInput}/></td>
                </tr> 
                <tr> 
                    <td>Username:</td>
                    <td><input type='text' name='username' onChange={getUserInput}/></td>
                </tr>
                <tr>
                   <td>Password:</td>
                    <td><input type='password' name='password' onChange={getUserInput}/></td>
                </tr>
                <tr>
                    <td>Confirm Password:</td>
                    <td><input type='password' name='conPassword' onChange={getUserInput}/></td>
                </tr>
                <tr>
                    <td colspan={2} style={{color:'red'}}>{user.error}</td>

                </tr>
            </table>
           <button onClick={authentication}>Login</button>
           
        </div>
    )
}