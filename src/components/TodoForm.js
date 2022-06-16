import { useState } from "react";
function TodoForm(props) {
    const [input, setInput] = useState('');
    const handleChange = e => {
      setInput(e.target.value);
    };  
    const handleSubmit = e => {
      e.preventDefault();
  
      props.onSubmit({
        id: Math.floor(Math.random() * 10000),
        text: input
      });
      setInput('');
    };
  
  return ( 
    <div className='Todocontainer'>
 <h6 className="mb-3">Awesome Todo List</h6>
<form  className="d-flex justify-content-center align-items-center">
  <div className="form-outline flex-fill">
    <input type="text" className="form-control form-control-lg" placeholder='What do you need to do today?' 
    name='text'
    value={input}
    onChange={handleChange}/>
  </div>
  <button type="submit" className="btn btn-primary btn-lg ms-2"  onClick={handleSubmit} >Add</button>
</form>
    </div>
  )
}

export default TodoForm