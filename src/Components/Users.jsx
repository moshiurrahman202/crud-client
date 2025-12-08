import { use, useState } from "react";
import { Link } from "react-router";


const Users = ({userInitialData}) => {
    const initialUsers = use(userInitialData)
    const [users, setUsers] = useState(initialUsers)
    console.log(initialUsers);
    
    const handleform = e => {
        e.preventDefault()
        const name = e.target.name.value;
        const email =e.target.email.value;
        const userInfo = {
            name, email
        }
        
        fetch("http://localhost:3000/users",{
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(userInfo)
        })
        .then(res => res.json())
        .then(data => {
            console.log("fater sending data to DB", data);
            if(data.insertedId){
                alert("user added !")
                userInfo._id = data.insertedId;
                const newUser = [...users, userInfo];
                setUsers(newUser)
                e.target.reset()
            }
            
        })
        
    }
    const deleteme = id => {
        console.log("delete me", id);
        fetch(`http://localhost:3000/users/${id}`,{
            method: "DELETE"
        }).then(res => res.json()).then(data => {
            if(data.deletedCount){
                const remainingUsers = users.filter(user => user._id !==id)
                setUsers(remainingUsers)
                console.log("the user deleted !");
                
            }
            
        })
        
    }
    return (
        <div>
            <div>
                <form onSubmit={handleform}>
                    <input type="text" name="name" placeholder="Name" />
                    <br />
                    <input type="text" name="email" placeholder="Email" />
                    <br />
                    <input type="submit" value='Add User' />
                </form>
            </div>
            <div>
                <h1>User length {users.length}</h1>
                {
                    users.map(item => <p key={item._id}>{item.name} : {item.email} 
                    <Link to={`/users/${item._id}`}>Details</Link>
                    <button onClick={() => deleteme(item._id)}>X</button></p>)
                }
            </div>
            
        </div>
    );
};

export default Users;