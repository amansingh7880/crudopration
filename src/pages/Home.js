import React, { useState } from 'react'

export default function Home() {
    const[inputs,setInputs]=useState({
       name:"",
       email:"",
    })
    const[tabledata,setTabledata]=useState([]);
    const handlechange=(e)=>{
        setInputs({
            ...inputs,
            [e.target.name]:e.target.value,
        })
    }
    console.log(inputs)
    const handleSubmit=(e)=>{
      e.preventDefault();
    //   console.log(inputs);
      setTabledata([...tabledata,inputs])
      setInputs({
        name:"",
        email:"",
      })
      console.log(tabledata)
    }
    const handleDelete=(index)=>{

        const filterData=tabledata.filter((item,i)=>i!==(index));
        setTabledata(filterData)
        alert('Data is delete successfully!!!')
    }
    const handleEdit=(index)=>{
        const tempData=tabledata[index]
        console.log("tempdata",tempData);
        setInputs({name:tempData.name,email:tempData.email})
        
    }
  return (
    <div className='min-h-screen bg-[#004b43]'>
     <h1 className='text-center text-white '>Crud app</h1>
     <div className='bg-[#e5e4e4] max-w-fit m-auto p-10'>
       <form onSubmit={handleSubmit}>
         <div className='flex flex-col'> 
          <label>Name</label>
           <input name="name" value={inputs.name} onChange={handlechange}/>
         </div>
         <div className='flex flex-col'>
          <label>Email</label>
           <input name="email" value={inputs.email} onChange={handlechange}/>
         </div>
        <button type="submit"className='w-full bg-[#014d64] text-white mt-3'>Add{""}</button>

       </form>
   </div>
    <div>
    <table className='w-full text-center'>
     <thead>
         <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
         </tr>
     </thead>
     <tbody className='text-white'>
         {
            tabledata.map((item,i)=>(
              <tr>
                 <td>{item.name}</td>
                 <td>{item.email}</td>
                 <td><button onClick={()=>handleEdit(i)} className='w-10 bg-[green] text-white'>Edit</button> <button onClick={()=>handleDelete(i)} className='w-20 bg-[red] text-white'>Delete</button> </td>
              </tr>  
            )
                
            )
         }
     </tbody>
    </table>

    </div>
    </div>
  )
}