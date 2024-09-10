import Link from "next/link";

export default function Header() {
    return (
        <header className="bg-blue-500 p-3">
            <nav className="flex justify-between items-center max-w-4xl mx-auto">
                <Link href="/" className="text-white font-bold">
                    Home
                </Link>

                <ul className="flex space-x-4">
                    <li>
                        <Link href="/posts" className="text-white hover:underline">
                            Blogs
                        </Link>
                    </li>
                    <li>
                        <Link href="/api/auth/signin" className="text-white hover:underline">
                            Login
                        </Link>
                    </li>
                </ul>
            </nav>

        </header>
    )
}