
function Head({count}) {
    return (
      <nav>
        <div><a href="/">홈</a></div>
        
        <div><a href="/todos">할 일</a></div>
        
        <div>
        <h1>할 일 목록</h1>
        <h3>남은 할 일 : {count}개</h3>
      </div>
      </nav>
      
      
    );
  }
  
  export default Head;