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
          <header>
            <h3>To-Do App</h3>
          </header>
          <section>
            <button onClick={btnHandle}>Add New Task</button>
            {AddingNew && <Adding />}
          </section>
      </Fragment>
    </>
  );
};