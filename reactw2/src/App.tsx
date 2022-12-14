import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Form, {formDataInterface} from "./Component/Form";
import Register from "./Component/Register";
function App() {



    return (
        <div>
            <h1>User</h1>
            <Form/>

            <Register/>
        </div>
    );
}

export default App;
