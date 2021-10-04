import React from 'react'
import {Link, Route} from 'react-router-dom'
import Users from './Users'
import Home from './Home'
import Posts from './posts'
import UserShow from './user-Show'
import UserPosts from './user-posts'

const App=(props)=>{
  return (
    <div>
      <nav>
        <Link to='/'>Home</Link>   |

        <Link to='/users'>Users</Link>   |

        <Link to='/posts'>Posts</Link>   |
      </nav>
      <Route path='/' component={Home} exact={true}/>
      <Route path='/users' component={Users} exact={true}/>
      <Route path='/posts' component={Posts} exact={true}/>
      <Route path='/users/:id' component={UserShow} />
      <Route path='/posts/:id' component={UserPosts}/>
      
    </div>
  )
}
export default App