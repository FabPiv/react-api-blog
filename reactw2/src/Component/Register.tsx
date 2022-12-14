import {useState} from "react";


function RegistrationForm() {
    const [RegistrationForm, setRegistrationForm] = useState({
        username: "",
        firstName: "",
        lastName: "",
        password: "",
        gender: "",
        email: "",
    });


    const handleSubmit = () => {
      let formData = new FormData();
        formData.append("username", RegistrationForm.username);
        formData.append("firstName", RegistrationForm.firstName);
        formData.append("lastName", RegistrationForm.lastName);
        formData.append("email", RegistrationForm.email);
        formData.append("password", RegistrationForm.password);
formData
        fetch("http://localhost:3000/api/user", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",

            }
        })

    }
    console.log(handleSubmit);
return (

<form>

    <input type="text" name="username" onChange={(e)=>{setRegistrationForm({
        ...RegistrationForm,
        username: e.target.value
    })}}/>
    <br/>
    <input type="firstName" name="firstName" onChange={(e)=>{setRegistrationForm({
        ...RegistrationForm,
        firstName: e.target.value
    })}}/>
    <br/>
    <input type="lastName" name="lastName" onChange={(e)=>{setRegistrationForm({
        ...RegistrationForm,
        lastName: e.target.value
    })}}/>
    <br/>
    <input type="gender" name="gender" onChange={(e)=>{setRegistrationForm({
        ...RegistrationForm,
        gender: e.target.value
    })}}/>
    <br/>
<input type="password" name="password" onChange={(e)=>{setRegistrationForm({
    ...RegistrationForm,
    password: e.target.value
})}}/>
    <br/>


</form>
)}