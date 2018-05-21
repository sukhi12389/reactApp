import React from 'react'
import {Left, Right, Whoops404} from './components/Whoops404'
import { Router , Route , hashHistory} from 'react-router'
import Home from './components/ui/Home'
import About from './components/ui/About'
import MemberList from './components/ui/MemberList'


const routes = (
    <Router history={hashHistory}>
     <Route path= "/" component={Home}/>
     <Route path= "/" component={Right}>
     <Route path= "about" component={About}/>
     <Route path= "members" component={MemberList}/>
     </Route>
    <Route path="*" component={Whoops404}/></Router>
)
export default routes