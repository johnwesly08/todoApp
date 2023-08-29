import { Fragment, useState} from 'react';

export default function Adding() {

    const [inputValue, setInputValue] = useState('');
    const [inputValue1, setInputValue1] = useState('');
    

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
        setInputValue1(event.target.value);

    };

    const handleForm = (event) => {
        event.preventDefault();
        console.log(inputValue,inputValue1)
    }

    return (
        <Fragment>
            <header>
                <h3>Adding new task</h3>
            </header>
            <section>
                <form onSubmit={handleForm}>
                    <label>Task Title</label>
                    <input type="Text" value={inputValue} onChange={handleInputChange} id="title" placeholder="Enter Task Title"></input>
                    <label>Task Description</label>
                    <input type="text" value={inputValue1} onChange={handleInputChange} id="descp" placeholder="Enter Task Description"></input>
                    <button id="btns">Submit</button>
            
                </form>

            </section>
        </Fragment>
    );
};