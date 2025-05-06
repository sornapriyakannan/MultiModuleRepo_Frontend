import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
const Todo = () => {

  const[todo,setTodo]=useState('');
  const[db,setDb]=useState([]);


  function post(){
    axios.post("http://localhost:3000/posts",{ todo })
      .then(()=>{
        alert("data has been stored")
        get();
        setTodo("")
      })
      .catch(()=>{
        alert("data not stored")
      })
  }


  function get(){
    axios.get("http://localhost:3000/posts")
      .then((res)=>{
        setDb(res.data)
      })

      .catch((err)=>{
        console.error(err)
      })
  }

  //useEffect(()=>{
   // get();
  //})

  function update(data,id)
  {
    axios.put(`http://localhost:3000/posts/${id}`,{todo:data})
      .then(()=>{
        get();
      })
      .catch((err)=>{
        console.log(err);
      })
  } 


  function del(id)
  {
    axios.delete(`http://localhost:3000/posts/${id}`)
      .then(()=>{
        get();
      })
      .catch((err)=>{
        console.log(err);
      })
  }

  return (
    <div style={{margin: '100px'}}>
      <label htmlFor="todo">Todo</label>      
      <input type="text" value={todo} onChange={(e)=>setTodo(e.target.value)} />
      <button onClick={post}>Post</button>
      
        <ul>
          {
            db.map((it)=>{
              return <li key={it.id}>{it.todo}<button onClick={()=>{
                const data=prompt("enter the data").trim();
                update(data,it.id)
              }}>up</button>            <button onClick={()=>del(it.id)}>del</button></li> //for displying in frontend
            })
          }
        </ul>
      
    </div>
  )
}

export default Todo
