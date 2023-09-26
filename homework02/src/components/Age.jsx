export const Age=(props)=>{
    return (
        <div>
          <h1>Users' Ages</h1>
          <ul>
            {props.users.map((user, index) => (
              <li key={index}>
                {user.name} {user.lastName}: {user.age > 18 ? 'Over 18' : 'Less than 18'}
              </li>
            ))}
          </ul>
        </div>
      );
}