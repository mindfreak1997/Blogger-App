import React,{useEffect,useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Users=(props)=>{
    const [users,setUsers]=useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response)=>{
            setUsers(response.data)
        },[])
        .catch((err)=>{
            alert(err.message)
        })
    },[])
    return (
        <div>
         <h2>User List -{users.length}</h2>
         {
             users.map(ele=>{
                 return <li key={ele.id}><Link to={`/users/${ele.id}`}>{ele.name}</Link></li>
             })
         }
        </div>
    )
}
export default Users