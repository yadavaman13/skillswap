import React from 'react'

const Contact = () => {
  return (
    <div className='bg-amber-300 p-4 h-100 w-100 place-items-center mt-10 '>
      <h1>Contact Page</h1>
      <form>
        <div>
          <label htmlFor='name'>Name:</label>
          <input type='text' id='name' placeholder='Enter your name' />
        </div>
        
        <div>
          <label htmlFor='description'>Description:</label>
          <input type='text' id='description' placeholder='Enter description' />
        </div>

        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Contact
