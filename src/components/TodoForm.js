import React, {useState, useEffect, useRef } from 'react'

function TodoForm(props) {

    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    })

    const handleChange = e => {
        setInput(e.target.value);
    }
    
    const handleSubmit = e => {
        e.preventDefault();   //To prevent default behavoir of submitting form (whole page reloads each time we submit, we dont need this)

        props.onSubmit({
            id: Math.floor(Math.random()*10000),
            text: input
        });

        setInput('');
    };

    return (
        <form className="todo-form" onSubmit={handleSubmit}> 
            {props.edit ? (
                <div>
                    <input 
                    type="text" 
                    placeholder="Update your item" 
                    value={input} 
                    name='text'
                    className='todo-input edit'  
                    onChange={handleChange}
                    ref={inputRef}          
                    />
                    <button className='todo-button edit'>Update</button>
                </div>
                ) : (
                <div>
                    <input 
                    type="text" 
                    placeholder="Add a todo" 
                    value={input} 
                    name='text'
                    className='todo-input'  
                    onChange={handleChange}
                    ref={inputRef}          
                    />
                    <button className='todo-button'>Add Todo</button>
                </div>
            )}          
        </form>
    )
}

export default TodoForm
