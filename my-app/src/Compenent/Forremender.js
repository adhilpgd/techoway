// import React, { useState } from 'react'

// function Forremender() {
//     const[remainder,setremainder]=useState([])
//     const[newremainder,setnewremainder]=useState("")
//     const handleinput=(event) =>{
//         setnewremainder(event.target.value)
//     }
//     const handlebutton=()=>{
//        if(newremainder.trim()){
//         setremainder([...Forremender,newremainder])
//         setnewremainder("")
//        }
//     }








//   return (
//     <div>
      
//       <div className='cntainer'>
//         <h1>Remainder app</h1>
//         <div className='input'>
//             <input type='text' value={newremainder}placeholder='enther a remainder' onChange={handleinput}/>
//             <button className='button' onClick={handlebutton}>add your remainder</button>
//             <ul>{
//                 remainder.map((remainder,index)=>(
//                     <li>
//                     {remainder}
//                     </li>
//                 ))
//                 }

//             </ul>
//         </div>

//       </div>
//     </div>
//   )
// }

// export default Forremender

import React, { useState } from 'react';

function Forremender() {
    const [remainder, setremainder] = useState([]);
    const [newremainder, setnewremainder] = useState("");

    const handleinput = (event) => {
        setnewremainder(event.target.value);
    };
    const handldelete =(index)=>{
        setremainder(remainder.filter((intem,itemindex)=>itemindex != index))

    }

    const handlebutton = () => {
        if (newremainder.trim()) {
            setremainder([...remainder, newremainder]);
            setnewremainder("");
        }
    };

    return (
        <div>
            <div className='cntainer'>
                <h1>Reminder App</h1>
                <div className='input'>
                    <input type='text' value={newremainder} placeholder='Enter a reminder' onChange={handleinput} />
                    <button className='button' onClick={handlebutton}>Add Your Reminder</button>
                    <ul>
                        {remainder.map((remainder, index) => (
                            <li>
                                {remainder}
                            </li>
                            
                        ))
                        
                        
                        }
                        <li>
                            {remainder}
                            <button onClick={()=>handldelete(index)}>delete</button>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Forremender;
