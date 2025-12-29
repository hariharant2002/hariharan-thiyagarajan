let myName: string = "Hariharan";
let age: number = 23;
let isDeveloper: boolean = true;

export default function Navbar() {
    return (
        <nav className="fixed top-7 left-` z-50 -translate-x-1/2 ">
            <div className="flex items-center gap-8 rounded-full border border-white/10 bg-black/70 px-8 py-4 text-sm text-white backdrop-blur-md">
                <a href="#hero" className="hover:text-gray-300 transition">
                    Home
                </a>
                <a href="#about" className="hover:text-gray-300 transition">
                    About
                </a>
            </div>


        </nav>
    )
}

