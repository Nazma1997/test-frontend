import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
const BASE_URL = import.meta.env.VITE_BASE_URL;


const AllUsers = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/api/v1/user`);
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${BASE_URL}/api/v1/user/${id}`);
      fetchData(); 
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };
  return (
    <div>
      <h2>All users</h2> 
      <div className='add-user'>
        <p></p>
        <Link to='/add'><button>Add user</button></Link>
      </div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Sector</th>
              <th>Agree</th>
              <th>Actions</th>
            </tr>
          </thead>

          {
            data?.map(item => 
              <tbody key={item?._id}>
                <tr>
                  <td>{item?.name}</td>
                  <td> {item?.sector}</td>
                  <td >{item.checkbox ? 'Yes' : 'No'}</td>
                  <div>
                    <button onClick={() => handleDelete(item._id)}>Delete</button>
                    <Link to={`/edit/${item?._id}`}>
                      <button >Edit</button></Link>
                  </div>
                
                </tr>
               

              </tbody>
              )
          }
         
        </table>
      </div>

    </div>
  )
}

export default AllUsers
