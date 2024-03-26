
function CreateTodo({onCreate}) {
  


    return (
      <div>
        <form onSubmit={onCreate}>
          <input name="text"/>
          <button type="submit">등록</button>
        </form>
      </div>
    );
  }
  
  export default CreateTodo;