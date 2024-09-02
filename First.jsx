import React, { createContext } from 'react'
import Second from './Second';
const GreetContext=createContext();

const First = () => {
    const greet="Hello, world!"
    const greet2="Hello 2"
  return (
    <div>
      <GreetContext.Provider value={{greet, greet2}}>
      
        <Second/>
     
      </GreetContext.Provider>
    </div>
  )
}

export default First
export {GreetContext}