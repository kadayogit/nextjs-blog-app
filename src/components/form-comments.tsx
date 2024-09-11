"use client"
import { ChangeEvent, useState } from "react"

export default function FormComments() {
    // create useState on comment form
    const [comment, setComment] = useState<string>('');
    // create event handler onchange
    const handleCommentChange = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setComment(e.target.value);
    }
    // create handle submit function on the form
    const handleSubmitChange = () => {
        console.log(comment);
    }

    return (
        <div className="mt-4">
            <label htmlFor="comment" className="block text-sm font-bold text-gray-700">Add Comment</label>
            <input type="text"
                id="comment" name="comment" value={comment} onChange={handleCommentChange}
                className="w-full py-2 px-3 border border-gray-300 
                rounded focus:outline-none focus:border-blue-500" />
            <button onClick={handleSubmitChange} className="bg-blue-300 hover:bg-blue-500 text-white rounded-sm mt-2 px-2 py-2 text-sm disabled:bg-gray-300">
                Post Comment
            </button>
        </div>
    )
}