import React, { useState } from "react";
import "./App.css";
import UserForm from "./Components/UserForm";
import DataDisplayer from "./Components/DataDisplayer";
import Modal from "./Components/Modal";

function App() {
  const [dataItems, setDataItems] = useState([]);
  const [isError, setIsError] = useState(false);
  const [errorTypes, setErrorTypes] = useState({
    nameError: false,
    ageError: false,
  });

  let currentInput;
  const pullData = (data) => {
    // ERROR HANDLING
    if (data.username.trim().length === 0 || Number(data.age) <= 0) {
      setIsError(true);
      let allErrors = {};
      if (data.username.trim().length === 0) {
        allErrors = {
          nameError: true,
        };
      }
      if (Number(data.age) <= 0) {
        allErrors = {
          ...allErrors,
          ageError: true,
        };
      }
      console.log(allErrors);
      // saved all changed state data int to allErrors variable
      // and modify state only once like below using "allErrors"
      setErrorTypes(allErrors);
      return;
    }
    // SAVING CURRENT INPUT DATA
    currentInput = data;
    const newDataItems = [data, ...dataItems];
    setDataItems(newDataItems);
    // RESETTING ERRORS
    setErrorTypes({});
  };

  return (
    <div className="App">
      <UserForm pullData={pullData} />
      <DataDisplayer data={dataItems} />
      {isError ? (
        <Modal
          setIsError={setIsError}
          errors={errorTypes}
          errTypes={setErrorTypes}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
