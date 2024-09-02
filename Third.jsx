// import React, { useContext } from 'react'
// import { GreetContext, GreetContext2 } from './First'



// const Third = () => {
//   return (
//     <GreetContext.Consumer>
//     {
//              (val)=>{
//                 return (
//                     <GreetContext2.Consumer>
//                     {
//                          (val2)=>{
//                             return (
//                              <h1>
//                                   Greet: {val} {val2}
//                              </h1>
//                             )
//                          }
//                     }
//                     </GreetContext2.Consumer>
//                  )
                
//             }
//     }
//     </GreetContext.Consumer>
//   )
// }

// export default Third


import React, { useContext } from 'react'
import { GreetContext } from './First'





const Third = () => {
    const useCon=useContext(GreetContext);
    console.log(useCon);
    
  return (
    <h1>
      Greet: {useCon.greet} {useCon.greet2}
    </h1>
  )
}

export default Third
