

const Users = () => {
    const handleform = e => {
        e.preventDefault()
        const name = e.target.name.value;
        const email =e.target.email.value;
        const userInfo = {
            name, email
        }
        console.log(userInfo);
        
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
            
        </div>
    );
};

export default Users;