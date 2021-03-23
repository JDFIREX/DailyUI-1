import React,{useEffect, useState} from "react"
import moonLight from "./../images/moonLight.svg"
import sunLight from "./../images/sunLight.svg"
import user from "./../images/user.svg"

const emails = {}

const App = () => {

    const [id, setId] = useState(0);
    const [emailCorect, setEmailCorect] = useState(false)
    const [email, setEmail] = useState("");
    const [Darkmode, setDarkmode] = useState(true)
    const [password, setPassword] = useState("")
    const [login, setLogin] = useState(false)

    useEffect(() => {
        let c = email.split("");
        if((c.includes("@") && c.includes(".")) || email.length === 0){
            let x = c.filter(a => a === "@").length;
            if(x > 1){
                document.querySelector(".error").style.opacity = "1"
            }else{
                document.querySelector(".error").style.opacity = "0"
                if(email.length > 0){
                    setEmailCorect(true)
                }
            }
        }else{
            document.querySelector(".error").style.opacity = "1"
        }
    },[email,setEmail])

    useEffect(() => {
        if(id !== 0){
            if(emails.hasOwnProperty(email)){
                emails[email].login = emails[email].login + 1
            }else{
                emails[email] = {
                    email,
                    id,
                    login : 1
                }
            }
    
            setId(0);
            setPassword("")
            setEmailCorect(false)
            setLogin(true)
        }
    },[id,setId])

    useEffect(() => {
        if(Darkmode){
            document.querySelector(".body").classList.remove("light");
        }else{
            document.querySelector(".body").classList.add("light");
        }
    },[Darkmode, setDarkmode])

    const HandleClick = (e) => {
        e.preventDefault()
        if(emailCorect && password.length > 1){
            let newID = new Date();
            newID = newID.getTime()
            setId(newID)
        }else{
            if(emailCorect){
                alert("Wrong password")
            }else{
                alert("wrong email")
            }
        }
    }
    const LogOut = () => {
        setEmail("");
        setLogin(false)
    }

    if(login){
       const currentLogin =  emails[email].login
        return(
            <div>
                <div className="App">
                    <div className="circles">
                <div className="circle-1  circle"></div>   
                <div className="circle-2  circle"></div>
                <div className="circle-3  circle"></div>
                <div className="circle-4  circle"></div>
                <div className="circle-5  circle"></div>
                <div className="circle-6  circle"></div>
                <div className="circle-7  circle"></div>
                <div className="circle-8  circle"></div>
            </div>
                    <button className="darkmode" onClick={(e) => setDarkmode(!Darkmode)}>
                        <div className="darkmode__button"></div>
                        <img src={Darkmode ? moonLight : sunLight} alt="darkmode icon" />
                    </button>
                    <div className="user">
                        <div className="img">
                            <img src={user} className="logo" alt="logo" />
                        </div>
                        <p>Email : {email}</p>
                        <p>Login : {currentLogin}</p>
                        <button onClick={LogOut} >
                            <p>Log out</p>
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    return(
        <div className="App">
            <div className="circles">
                <div className="circle-1  circle"></div>   
                <div className="circle-2  circle"></div>
                <div className="circle-3  circle"></div>
                <div className="circle-4  circle"></div>
                <div className="circle-5  circle"></div>
                <div className="circle-6  circle"></div>
                <div className="circle-7  circle"></div>
                <div className="circle-8  circle"></div>
            </div>
            <button className="darkmode" onClick={(e) => setDarkmode(!Darkmode)}>
                <div className="darkmode__button"></div>
                <img src={Darkmode ? moonLight : sunLight} alt="darkmode icon" />
            </button>
            <div className="LogIn">
                <h1>Join us</h1>
                <label htmlFor="Email" className="Email_label label">
                    <p>Email</p>
                    <input 
                        type="email"
                        name='Email' 
                        className="Email__Input input" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} 
                        />
                    <p className="error">
                        please enter correct email address
                    </p>
                </label>
                <label htmlFor="Password" className="password_label label">
                    <p>Password</p>
                    <input 
                        type="password"
                        value={password}
                        name='Password' 
                        className="password__Input input"
                        onChange={(e) => setPassword(e.target.value)} 
                        />
                </label>
                <button onClick={HandleClick}>
                    <p>Sign Up</p>
                </button>
            </div>
        </div>
    )
}



export default App;