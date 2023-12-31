import React from 'react'
import {SiAboutdotme} from 'react-icons/si'
import {AiFillProject} from 'react-icons/ai'
import {SiGooglemessages} from 'react-icons/si'
import {MdWork} from 'react-icons/md'
import { useState } from 'react'

export default function Nav() {

  const [active,setActive] = useState("me");

  const navClick = (tab)=>{
    setActive(tab)
  }
  return (
    <>
    <div className="bottom-nav">         
    <li className={active==='me'?'activeLi':"nrmlLi"} onClick={()=>{navClick('me')}}><SiAboutdotme/></li>         
    <li className={active==='stats'?"activeLi":"nrmlLi"} onClick={()=>{navClick('stats')}}><AiFillProject/></li>         
    <li className={active==='work'?"activeLi":"nrmlLi"} onClick={()=>{navClick('work')}}><MdWork/></li>   
    <li className={active==='chat'?"activeLi":"nrmlLi"} onClick={()=>{navClick('chat')}}><SiGooglemessages/></li>               
    </div>  
    </>
  )
}
