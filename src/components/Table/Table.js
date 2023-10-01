import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../Table/Table.css";
import FormTable from '../FormTable';

axios.defaults.baseURL ="http://localhost:3000/";
const SampleTable = () => {
  const [Addpop,setAddpop] = useState(false)
  const [Editpop,setEditpop] = useState(false)
  const [formData,setFormData] = useState({
    fullName:"",
    email:"",
    age:"",
    dob:"",
    country:"",
  })
  const [formDataEdit,setFormDataEdit] = useState({
    fullName:"",
    email:"",
    age:"",
    dob:"",
    country:"",
    _id : ""
  })
  const [datalist,setDataList] = useState([]);

  const fetchData = async () => {
    try {
      axios.get('http://localhost:3000/employee')
      .then(response => {
        setDataList(response.data);
      })
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleOnchange = (e) =>{
    const {value,name} = e.target
    setFormData((prev)=>{
      return{
        ...prev,
        [name]: value
      }
    })
  }

  // useEffect(() => {
  //   axios.get('http://localhost:3000/employee')
  //     .then(response => {
  //       setDataList(response.data);
  //     })
  //     .catch(error => console.error(error));
  // }, []);

 
  const handleSubmit = async(e)=>{
    e.preventDefault()
    const data = await axios.post('/employee/create',formData)
    console.log(data)
    setAddpop(false)
    fetchData()
    if(data.data.success){
      setAddpop(false)
      alert(data.message)
    }
  }

  const handleDelete = async(id)=> {
    const data = await axios.delete('/employee/delete/'+id)
    alert(data.data.mesaage)
    fetchData();
    
  }

  // const handleUpdate = async(e)=>{
  //    e.preventDefault()
  //    const data = await axios.put('/employee/update/',formDataEdit)
  //    alert(data.data.mesaage)
  //    fetchData();
  //    setEditpop(false)
  // }

  const handleEditOnchange = async(e)=>{
    const {value,name} = e.target
    setFormDataEdit((prev)=>{
      return{
        ...prev,
        [name]: value
      }
    })

  }
  const handleEdit =(el)=>{
    setFormDataEdit(el)
    setEditpop(true)
  }
  const [updateData, setUpdateData] = useState({});

  const handleUpdate = async (id) => {
    try {
      const response = await axios.put(`/api/employees/${id}`, updateData);
      console.log('Employee updated:', response.data);
    } catch (error) {
      console.error('Error updating employee:', error);
    }
  };

  return (
    <div>
       <header>
        <h1 className='text-center' style={{paddingTop: "10%"}}>Welcome to Employee Management</h1>
      </header>
      <div className='tableEmp'  >
        <button className='batn batn-add ' onClick={()=>setAddpop(true)} >Add Employee</button>
      {
        Addpop &&(
         <FormTable
         handleSubmit={handleSubmit}
         handleOnchange={handleOnchange}
         handleclose={()=>setAddpop(false)}
         rest={FormData}
         />
        )
      }

{
        Editpop &&(
         <FormTable
         handleSubmit={handleUpdate}
         handleOnchange={handleEditOnchange}
         handleclose={()=>setEditpop(false)}
         rest={formDataEdit}
         />
        )
      }

      <div className='tablecontainer'>
        <table>
          <thead>
            <tr>
              <th>FirstName</th>
              <th>Email</th>
              <th>Age</th>
              <th>DOB</th>
              <th>Country</th>
              <th>Actions</th>
            </tr>
          </thead>
          
          <tbody>
           
            {
                  
                datalist.map((el)=>{
                    return(
                      <tr key={el._id}>
                        <td>{el.fullName}</td>
                        <td>{el.email}</td>
                        <td>{el.age}</td>
                        <td>{el.dob}</td>
                        <td>{el.country}</td>
                        <td>
                        <button className='batn btn-edit'  onClick={()=>handleEdit(el)}>Edit</button>
                        <button className='batn btn-delete' onClick={() => handleDelete(el._id)}>Delete</button>
                        </td>
                      </tr>
                )
                
              })
            }
          </tbody>
        </table>
      </div>
      
      </div>
    
    </div>
  );
};

export default SampleTable;
