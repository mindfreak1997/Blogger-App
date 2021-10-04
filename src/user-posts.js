import React,{useState,useEffect} from'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const UserPosts=(props)=>{
    const {id}=props.match.params
    const [user,setUser]=useState({})
    const [posts,setPosts]=useState({})
    const [comments,setComments]=useState([])
    const newId= Math.ceil(id/10)
   useEffect(()=>{
      axios.get(`https://jsonplaceholder.typicode.com/users/${newId}`) 
      .then((res)=>{
          setUser(res.data)
      })
      .catch((err)=>{
        alert(err.message)
    })
   },[])
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((res)=>{
            setPosts(res.data)
        })
        .catch((err)=>{
            alert(err.message)
        })
    },[])
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
        .then((res)=>{
            setComments(res.data)
        })
        .catch((err)=>{
            alert(err.message)
        })
    },[])
    return (
        <div>
            <h2>UserName -{user.name}</h2>
            <h3>Title - {posts.title}</h3>
            <h3>Body - {posts.body}</h3>
            <hr/>
            <h3>Comments</h3>
            {
                comments.map(ele=>{
                    return <li key={ele.id}>{ele.body}</li>
                })
            }
            <hr/>
            <p><Link to={`/users/${posts.userId}`}>Show more posts by {user.name}</Link></p>
        </div>
    )
}
export default UserPosts