import { posts } from "@/data/posts"
import Link from "next/link"

export default function BlogPage() {
    return (
        <div className="max-w-4xl mx-auto py-8">
            <h1 className="text-2xl font-bold mb-4">Blogs</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {posts.map((post) => (
                    <Link key={post.id} href={`/blogs/${post.id}`} className="bg-white p-4 rounded-md shadow-md">
                        <h1 className="text-xl font-bold">{post.title}</h1>
                        {/* <p>{post.content}</p> */}
                        <p>Written by {post.username}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
}