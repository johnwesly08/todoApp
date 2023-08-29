import { Fragment, useState } from 'react';

export default function Adding() {
    const [inputValue1, setInputValue1] = useState('');
    const [inputValue2, setInputValue2] = useState('');
    const [displayValue1, setDisplayValue1] = useState('');
    const [displayValue2, setDisplayValue2] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        setDisplayValue1(inputValue1);
        setDisplayValue2(inputValue2);
        display();
    };

    return (
        <Fragment>
            <header>
                <h3>Adding new items</h3>
            </header>
            <section>
                <form onSubmit={handleSubmit}>
                    <label>Task Title</label>
                    <input type="text" value={inputValue1} onChange={(e) => setInputValue1(e.target.value)} placeholder='Enter task Title' required></input>
                    <label>Task description</label>
                    <input type="text" value={inputValue2} onChange={(e) => setInputValue2(e.target.value)} placeholder='Enter task description'></input>
                    <button type="submit" onClick={handleSubmit}>Write</button>
                </form>

            </section>
        </Fragment >
    );
};

function display() {

    return (
        alert("joker..!")
        // <Fragment>
        //     {setDisplayValue1 && <p>Title {displayValue1}</p>}
        //     {setDisplayValue2 && <p>Descp {displayValue2}</p>}
        // </Fragment>
    );
};
