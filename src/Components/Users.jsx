import { use, useState } from "react";


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
                {
                    users.map(item => <p key={item._id}>{item.name} : {item.email}</p>)
                }
            </div>
            
        </div>
    );
};

export default Users;