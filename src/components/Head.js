import Nav from "./Nav";

function Head({count}) {
    return (
      <nav>
        <Nav />
        
        <div>
        <h1>할 일 목록</h1>
        <h3>남은 할 일 : {count}개</h3>
      </div>
      </nav>
      
      
    );
  }
  
  export default Head;