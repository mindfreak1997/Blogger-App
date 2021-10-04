import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Posts=(props)=>{
    const[posts,setposts]=useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((res)=>{
            setposts(res.data)
        })
        .catch((err)=>{
            alert(err.message)
        })
    },[])
    return (
        <div>
            <h2>Total post -{posts.length}</h2>
            {
                posts.map(ele=>{
                    return <li key={ele.id}><Link to={`/posts/${ele.id}`}>{ele.title}</Link></li>
                })
            }
        </div>
    )
}
export default Posts