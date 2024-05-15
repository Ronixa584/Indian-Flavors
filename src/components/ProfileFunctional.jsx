// import { useEffect, useState } from "react";

// const Profile = (props) => {
//     const [count, setCount] = useState(0);
//     useEffect(()=>{
//         //API Call
//         const timer = setInterval(() => {
//           console.log("SPA React");
//         }, 1000);

//         //unmounting i.e clearing memory
//         return()=>{
//             clearInterval(timer);
//             console.log("useEffect Return");
//         }
//         // console.log("useEffect");
//     },[]);
//     //Whenevr count changes then useEffect will be called
//     // console.log("Render");
//     return (
//         <div>
//             <h2>This is Profile Functional Component</h2>
//             <h3>Name: {props.name}</h3>
//             <h3>Count: {count}</h3>
//             <button onClick={() => setCount(1)}>Count</button>
//         </div>
//     )
// }

// export default Profile;