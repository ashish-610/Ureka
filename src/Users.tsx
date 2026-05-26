
import { useLoaderData } from 'react-router-dom'

type User = {
  id: number;
  name: string;
};

const Users = () => {
  const fetchedData= useLoaderData();

  return (
    <div>
      <h1> Users Fetchded Succcessfully :</h1> 

       
           {fetchedData.map((element : User) => (
        <p key={element.id}>{element.name}</p>
      ))}
       
    </div>
  )
}

export default Users
