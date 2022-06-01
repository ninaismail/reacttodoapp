import React, {useState} from 'react'
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
    <div class='Todocontainer'>
 <h6 class="mb-3">Awesome Todo List</h6>
<form onSubmit={handleSubmit} class="d-flex justify-content-center align-items-center">
  <div class="form-outline flex-fill">
    <input type="text" class="form-control form-control-lg" placeholder='What do you need to do today?' 
    name='text'
    value={input}
    onChange={handleChange}/>
  </div>
  <button type="submit" class="btn btn-primary btn-lg ms-2">Add</button>
</form>
    </div>
  )
}

export default TodoForm