function UserGreeting(props)
{
   
        if(props.isLoggedIn)
        {
            return <h2> welcome {props.username}</h2>
        }
        else
        {
            return <h2> Please Log in to continue</h2>
        }


    
}
export default UserGreeting
