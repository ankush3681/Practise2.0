import React, { useState } from 'react'

const Child = ({dataFromChild}) => {
    const [input,setInput] = useState("");

    const handleSubmit = () =>{
        dataFromChild(input);
        setInput("");
    }
  return (
    <div>
      <input type="text" placeholder='enter text here' value={input} onChange={(e)=>setInput(e.target.value)} />
      <button onClick={handleSubmit}>submit</button>
    </div>
  )
}

export default Child
