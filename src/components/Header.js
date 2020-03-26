import React from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
// import { AUTH_TOKEN } from '../constants'

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
        <Link to="/clients" className="item">
          Clients
        </Link>
      <div className="right menu">
        <Link to="/login" className="item">
          Login
        </Link>
      </div>
    </div>
  )
}

// class Header extends Component {
//   render() {
//     const authToken = localStorage.getItem(AUTH_TOKEN)
//     return (
//       <div className="flex pa1 justify-between nowrap orange">
//         <div className="flex flex-fixed black">
//           <div className="fw7 mr1">Courier admin dashboard</div>
//           <Link to="/clients" className="ml1 no-underline black">
//             list
//           </Link>
//           {authToken && (
//             <div className="flex">
//               <div className="ml1">|</div>
//               <Link to="/clients/create" className="ml1 no-underline black">
//                 create
//               </Link>
//             </div>
//           )}
//         </div>
//         <div className="flex flex-fixed">
//           {authToken ? (
//             <div
//               className="ml1 pointer black"
//               onClick={() => {
//                 localStorage.removeItem(AUTH_TOKEN)
//                 this.props.history.push(`/`)
//               }}
//             >
//               logout
//             </div>
//           ) : (
//             <Link to="/login" className="ml1 no-underline black">
//               login
//             </Link>
//           )}
//         </div>
//       </div>
//     )
//   }
// }

export default withRouter(Header)