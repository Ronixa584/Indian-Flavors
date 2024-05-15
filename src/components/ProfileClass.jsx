// import React from "react";

// class Profile extends React.Component {
//   constructor(props) {
//     super(props);
//     //Create state
//     // this.state = {
//     //   count: 0,
//     //   count2: 0,
//     // };

//     this.state = {
//       userInfo: {
//         name: "Dummy Name",
//         location: "Dummy Loaction",
//       },
//     };
//     console.log("Child - Constructor " + this.props.name);
//   }

//   async componentDidMount() {
//     //API calls
//         // const data = await fetch("https://api.github.com/users/Ronixa584");
//         // const json = await data.json();
//         // this.setState({
//         //   userInfo: json,
//         // });

//         this.timer = setInterval(()=>{
//             console.log("SPA React");
//         },1000);
//     console.log("Child - ComponentDidMount " + this.props.name);
//   }

//   componentDidUpdate(){
//     console.log("componentDidUpdate");
//   }

//   componentWillUnmount(){
//     clearInterval(this.timer);
//     console.log("componentWillUnmount");
//   }

//   render() {
//     const { count } = this.state;
//     console.log("Child - Render " + this.props.name);
//     return (
//       <div>
//         <h2> This is Profile Class Component </h2>
//         <img src={this?.state?.userInfo?.avatar_url} />
//         <h3>Name: {this?.state?.userInfo?.name}</h3>
//         <h3>Loaction: {this?.state?.userInfo?.location}</h3>
//         {/* <h3>Count: {count}</h3> */}
//         {/* <button
//           onClick={() => {
//             //We do not mutate state directly
//             //i.e this.state.count=1
//             //This will not update the data live
//             this.setState({
//               count: 1,
//             });
//           }}
//         > */}
//         {/* setCount
//         </button> */}
//       </div>
//     );
//   }
// }

// export default Profile;