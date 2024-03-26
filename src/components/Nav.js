import {Link} from "react-router-dom"

function Nav() {
    return (
      <nav>
        <Link to="/">홈</Link> /
        <Link to="/todos"> 할 일</Link>
      </nav>
      
      
    );
  }
  
  export default Nav;