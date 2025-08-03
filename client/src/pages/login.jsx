import React, { useEffect, useState } from 'react'
import '../App.css'


const Login = () => {

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const [userAllData, setUserAllData] = useState([])

  function handleForm(e) {
    e.preventDefault();
    const formdata = { UserName: username, UserPassword: password };

    fetch("/api/user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formdata)
    }).then((res) => {
      return res.json();
    }).then((result) => {
      console.log(result);
    });
  }

  function handleDelete(id) {
    fetch(`/api/userdatadelete/${id}`, {
      method: "DELETE",
    }).then((res) => {
      return res.json();
    }).then((result) => {
      console.log(result);
      // Refresh the data after deletion
      fetchUserData();
    }).catch((error) => {
      console.error("Delete error:", error);
    });
  }

  function fetchUserData() {
    fetch("/api/useralldata").then((res) => {
      return res.json();
    }).then((result) => {
      console.log(result);
      setUserAllData(result.Data);
    }).catch((error) => {
      console.error("Fetch error:", error);
    });
  }

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div /* This div-container is used to center the login form */
    className='min-h-screen flex items-center justify-center'
    >
      <div style={{ fontFamily: "Poppins", sansSerif: "sans-serif" }} 
      /* This div-container contains the login form */
        className="shadow-lg rounded-xl p-10 flex items-center justify-center gap-10 flex-col"
      >
        <h1 className='text-3xl font-bold'>Login</h1>
        <form
              className=" flex items-center flex-col gap-5"
              action="" onSubmit={handleForm}>
              <div /* Input wrapper for input fields */
                className='border-2 border-black-300 rounded-lg p-2.5 flex items-center gap-2'
              >
                <input className="input-container border-none outline-0 w-full" placeholder="Username" type="text" name="" id="" value={username} onChange={(e) => {
                  setUserName(e.target.value)
                }}
                />
              </div>
              <div /* Input wrapper for input fields */
                className='border-2 border-black-300 rounded-lg p-2.5 flex gap-2 items-center'
              >
                <input className="input-container border-none outline-0 w-full" placeholder="Password" type="password" name="" id="" value={password} onChange={(e) => {
                  setPassword(e.target.value)
                }}
                />
              </div>
    
              <input
                className='bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-lg mt-4'
                type="submit"
                value="Submit"
              />
            </form>
            
        {
          userAllData.map((items) => (
            <ul key={items._id}>
              <span>{items.user}</span>

              {/*Delete function*/}
              <button onClick={() => {
                handleDelete(items._id)
              }}
              >Delete
              </button>

              {/*Update function*/}
              <button onClick={() => {
                handleUpdate(items._id)
              }}
              >Update
              </button>
            </ul>
          ))
        }
      </div>
    </div>
  )
}

export default Login
