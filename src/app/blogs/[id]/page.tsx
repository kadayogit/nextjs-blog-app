import Comments from "@/components/comments";
import FormComments from "@/components/form-comments";
export default function PostDetailPage() {
    return (
        <div className="max-w-2xl mx-auto py-8">
            <h1 className="text-2xl font-bold mb-4">Post One</h1>
            <p>Written by: Guled</p>
            <div className="max-w-2xl mx-auto mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Optio, quia! Obcaecati molestias, est maxime mollitia nemo aut tempore laborum.
                Dolores in perferendis fugiat nisi magni eius harum repellat assumenda sint.
            </div>
            <Comments />
            <FormComments />
        </div>
    )
}