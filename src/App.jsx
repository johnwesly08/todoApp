import { Fragment,useState } from 'react';
import Adding from "./Functions.jsx";

export default function App() {
  const [AddingNew, setAddingNew] = useState(false);

  const btnHandle = () => {
    setAddingNew(true);
  };
  return (
    <>
      <Fragment>
          <header className='head'>
            <h3>To-Do App</h3>
          </header>
          <section className='body'>
            <button onClick={btnHandle} id="addBtn">Add New Task</button>
            {AddingNew && <Adding />}
          </section>
      </Fragment>
    </>
  );
};