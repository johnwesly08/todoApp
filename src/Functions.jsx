import { Fragment, useState } from 'react';

export default function Adding() {
    const [inputValue1, setInputValue1] = useState('');
    const [inputValue2, setInputValue2] = useState('');
    const [displayValues, setDisplayValues] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setDisplayValues(true);
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
                {displayValues && (
                    <section>
                        <p> {inputValue1}</p>
                        <p> {inputValue2}</p>
                        <ul className='btns'>
                            {/* <button onClick={edit}>Edit</button> */}
                            <button type='reset' onClick={() => setInputValue1('') & setInputValue2('') & setDisplayValues(false)}>Del</button>
                            <button type='reset' onClick={() => setInputValue1('') & setInputValue2('') & setDisplayValues(false)}></button>
                        </ul>
                    </section>
                )};
            </section>


        </Fragment >
    );
};

