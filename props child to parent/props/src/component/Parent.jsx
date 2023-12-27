import React, { useState } from 'react'
import Child from './Child';

const Parent = () => {
    const [data,setData] = useState(null);

    const dataFromChild = (val) =>{
        setData(val);
    }

  return (
    <div>
        <h1>So the input is : {data}</h1>
        <Child  dataFromChild={dataFromChild}/>
    </div>
  )
}

export default Parent
