import axios from 'axios'
import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'

const UserShow=(props)=>{
    const {id}=props.match.params
     const [users,setusers]=useState({})
    const [posts,setPosts]=useState([]) 
     
     useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res)=>{
            setusers(res.data)
        })
        .catch((err)=>{
            alert(err.message)
        })
    },[]) 

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
        .then((res)=>{
            setPosts(res.data)
        })
        .catch((err)=>{
            alert(err.message)
        })
    },[])
    return (
        <div>
           <h2>User Name-{users.username} </h2>
           <h3>Post written by -{users.name}</h3>
           <ul>
               {
                   posts.map((ele,i)=>{
                       return <li key={ele.title}><Link to={`/posts/${ele.id}`}>{ele.title}</Link></li>
                   })
               }
           </ul>

        </div>
    )
}
export default UserShow