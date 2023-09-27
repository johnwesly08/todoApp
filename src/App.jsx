import React, { useState } from "react";
import Routing from "./components/routing";

export default function App() {
  return (
    <>
      <header className="Title">
        <h2>
          TodoApp
        </h2>
      </header>
      <section className="body" >
        <Routing />
      </section>
      <footer>
        <p>All Rights reserved @ JW Inc., 2023</p>
      </footer>
    </>
  );
};
