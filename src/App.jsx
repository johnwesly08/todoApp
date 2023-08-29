import { Fragment,useState } from 'react';
import Adding from "./Functions.jsx";

export default function App() {
  return (
    <>
      <Fragment>
          <header>
            <h3>To-Do App</h3>
          </header>
          <section>
            <button>Add New Task</button>
            <Adding />
          </section>
      </Fragment>
    </>
  );
};