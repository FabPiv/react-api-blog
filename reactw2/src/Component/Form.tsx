import {ChangeEvent, Dispatch, FormEvent, SetStateAction, useEffect, useRef, useState} from "react";
import {btoa} from "buffer";

export interface formDataInterface {
    username: string,
    password: string
}

export default function Form(): JSX.Element {

    const mounted = useRef<boolean>(false)

    const [formData, setFormData] = useState<formDataInterface>({password: "", username: ""})

    useEffect(() => {
        if (!mounted.current) {

            fetch("http://localhost:3000/api/posts")
                .then(data => data.json())
                .then(json => console.log(json))

            fetch("http://localhost:3000/api/user/{user_id}")
                .then(data => data.json())
                .then(json => console.log(json))


        }

        mounted.current = true
    }, [])


    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

    }

    console.log(formData)
    const handleChange = (e: ChangeEvent) => {
        setFormData(prevState => {
            return {
                ...prevState,
                // @ts-ignore
                [e.target.name]: e.target.value,

            }
        })
    }


    const submitData = () => {
        fetch("http://localhost:3000/api/user", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",}
        })



}
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="username" onChange={handleChange}
            />
            <br/>
            <input type="password" name="password" onChange={handleChange}/>
            <br/>

            <button type="submit">Go suuuubn</button>

        </form>
    )}
