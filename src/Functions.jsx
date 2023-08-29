import { Fragment, useState} from 'react';

export default function Adding() {
    const [inputValue1, setInputValue1] = useState('');
    const [inputValue2, setInputValue2] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputValue1);
        console.log(inputValue2);
        

        return (
            function display() {
                <display />
            }
        )
    }
    return (
        <Fragment>
            <header>
                <h3>Adding new items</h3>
            </header>
            <section>
                <form onSubmit={handleSubmit}>
                    <label>Task Title</label>
                    <input type="text" name='title' value={inputValue1} onChange={(e) => setInputValue1(e.target.value)} placeholder='Enter task Title'></input>
                    <label>Task description</label>
                    <input type="text" name="descp" value={inputValue2} onChange={(e) => setInputValue2(e.target.value)} placeholder='Enter task description'></input>
                    <button type="submit" onClick={handleSubmit}>Write</button>
                </form>
            </section>
        </Fragment >
    );
};