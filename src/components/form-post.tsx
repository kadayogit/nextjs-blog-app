const inputClass =
    'w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500';
const inputClassBtn = 'w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500 bg-green-300 text-white text-bold hover:bg-green-500';

export default function FormPost() {
    return (
        <form className="max-w-4xl mx-auto p-4">
            <div className="mb-4">
                <input type="text" name="title" id="title" placeholder="Enter the title" className={inputClass} />
            </div>
            <div>
                <textarea name="post" id="body" rows={6} placeholder="Enter the post" className={inputClass} />
            </div>
            <button type="submit" className={inputClassBtn}>Post</button>
        </form>
    )
}