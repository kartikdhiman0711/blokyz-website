import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[70vh] text-center gap-4 px-4">
            <h1 className="text-8xl font-black text-foreground">404</h1>
            <h2 className="text-2xl font-bold text-foreground">This page could not be found.</h2>
            <p className="text-gray-400">
                Could not find the requested resource.
            </p>
            <Link
                href="/"
                className="mt-8 px-8 py-3 bg-foreground text-background rounded-full font-bold transition-transform hover:scale-105"
            >
                Return Home
            </Link>
        </div>
    );
}
