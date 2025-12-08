import { useLoaderData } from "react-router";


const UpdateInfo = () => {
    const userinfo = useLoaderData()
    const hanldeupdate = e => {
        e.preventDefault();
        const name = e.target.name.value
        const email = e.target.email.value
        const udata = {
            name,email
        }
        fetch(`http://localhost:3000/users/${userinfo._id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(udata)

        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount){
                console.log("after updating the data",data);
            }
            
        })
        
    }
    
    return (
        <div>
            <h1>this component use for update user informations!</h1>
            <form onSubmit={hanldeupdate}>
                <input type="text" name="name" defaultValue={userinfo.name} />
                <br />
                <input type="text" name="email" defaultValue={userinfo.email} />
                <br />
                <input type="submit"  value="Update me" />

            </form>
        </div>
    );
};

export default UpdateInfo;