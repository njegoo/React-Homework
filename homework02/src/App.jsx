import {Age} from './components/Age'
import { Address } from './components/Address'

var user01 = {
    name: "Ivan",
    lastName: 'Ivanovski',
    address:"Skopje",
    age: 22,
  }
  var user02 = {
    name: "Milan",
    lastName: 'Milanovski',
    address:"Kumanovo",
    age: 25,
  }
  var user03 = {
    name: "David",
    lastName: 'Davidovski',
    address:"Tetovo",
    age: 35,
  }
  var user04 = {
    name: "Jovana",
    lastName: 'Jovanovksa',
    address:"Skopje",
    age: 16,
  }

  const users = [user01, user02, user03, user04];

  export const App=()=>{
    return(
        <div>
            <Age users={users}></Age>
            <Address users={users}></Address>
        </div>
    )
  }