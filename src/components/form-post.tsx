"use client"

const inputClass =
    'w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500';
const inputClassBtn = 'w-full py-2 px-3 border border-gray-300 rounded focus:outline-none bg-green-400 text-white text-bold hover:bg-green-500';

import { ChangeEvent, FormEvent, useState } from "react";
import ReactTextareaAutosize from "react-textarea-autosize";
import { formData } from "@/types/blog";

export default function FormPost() {
    //create useState 
    const [formData, setFormData] = useState<formData>({
        title: '',
        content: ''
    });

    // create event handler onchange
    const handleChange = (e: ChangeEvent <HTMLInputElement | HTMLTextAreaElement>) => {
     e.preventDefault();

    //  binding the value
    const {name, value} = e.target;
    setFormData({
        ...formData,
        [name]: value,
    });
    };

    // create handle submit function on the form
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <form className="max-w-8xl mx-auto p-4"  onSubmit={handleSubmit}>
            <div className="mb-4">
                <input type="text" 
                name="title" id="title" 
                placeholder="Enter the title" 
                className={inputClass} 
                value={formData.title}
                onChange={handleChange}/>
            </div>
            <div>
               <ReactTextareaAutosize 
               name="content" id="content"
               minRows={5} placeholder="Enter the content" 
               className={inputClass}
               value={formData.content}
               onChange={handleChange}/>
            </div>
            <button type="submit" className={inputClassBtn}>Post</button>
        </form>
    )
}