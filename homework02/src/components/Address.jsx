export const Address = (props) =>{
    // console.log(props)
    return(
        <div>
            {props.users.map((user, index)=>
                user.address === 'Skopje' && <p key={index}>{user.name} e od Skopje</p>
            )}
        </div>
    )
}