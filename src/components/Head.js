import Layout from "../page/Layout";
import Nav from "./Nav";

function Head({count}) {
    return (
      <nav>
      <Layout>
        
        <div>
        <h1>할 일 목록</h1>
        <h3>남은 할 일 : {count}개</h3>
      </div>
      </Layout>
      </nav>
      
      
    );
  }
  
  export default Head;