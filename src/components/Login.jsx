import{Link} from 'react-router-dom';

export default function Login(){
    const[user,setUser]=useState({username:'' , password:'',error:''});

    const getUserInputs =(e)=>{
        const {name,value}=e.target;
        setUser((prev)=>({
            ...prev,[name]:value,
        }));
    }

    const authentication =()=>{
        if(user.username=== 'admin' && user.password==='password123'){
            setUser({username:'',password:'',error:''});
            Navigate('/dashbord');
        }else{
            setUser({'error':'Invalid username or password'});
        }
    }
    return(
        <div>
            <h1 style={{textAlign:'center'}}>Login Here</h1>

           <table>
            <tr>
                <td>Username:</td>
                <td><input type='text' name='username' onChange='getUserInputs'></input></td>
            </tr>
            <tr>
                <td>Password:</td>
                <td><input type='password' name='password' onChange='getUserInputs'></input></td>
            </tr>
            <tr>
                <td colSpan={2} style={{color:'red'}}>{user.error}</td>
                
            </tr>
           </table>
        </div>
    )
}