import Image from "next/image";
import { FaLinkedin, FaInstagram, FaFacebook, FaGithub } from "react-icons/fa";


function Divider() {
    return (
        <div className="h-6 w-px bg-white/30" />
    );
}


export default function HeroCard() {
    return (
        <div className="rounded-2xl border border-white/10 bg-black/60 p-6 backdrop-blur-xl">

            {/* Image */}
            <div className="relative aspect-square overflow-hidden rounded-xl">
                <Image
                    src="/images/profilepic.jpg"
                    alt="Profile"
                    width={500}
                    height={600}
                    className="object-cover object-top"
                />

                {/* Availability badge */}
                {/*<div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-black/70 px-3 py-1 text-sm">*/}
                {/*    <span className="h-2 w-2 rounded-full bg-green-500"></span>*/}
                {/*    Available for work*/}
                {/*</div>*/}
            </div>

            {/* Text */}
            <div className="mt-6">
                <h2 className="text-xl font-semibold">Hello, I’m Hariharan</h2>
                <p className="mt-2 text-gray-400">
                    Software Development Engineer Based in Bengaluru.
                </p>

                <div className="mt-4 flex gap-4">
                    <a
                        href="https://linkedin.com/in/hariharan-thiyagarajan"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-2xl bg-white/5 p-3 text-gray-300 transition hover:bg-white/10 hover:text-white"
                    >
                        <FaLinkedin size={18} />
                    </a>

                    <Divider />

                    <a
                        href="https://instagram.com/yourprofile"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-2xl bg-white/5 p-3 text-gray-300 transition hover:bg-white/10 hover:text-white"
                    >
                        <FaInstagram size={18} />
                    </a>

                    <Divider/>

                    <a
                        href="https://www.facebook.com/king.of.questions.29/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-2xl bg-white/5 p-3 text-gray-300 transition hover:bg-white/10 hover:text-white"
                    >
                        <FaFacebook size={18} />
                    </a>

                    <Divider/>

                    <a
                        href="https://github.com/hariharant2002"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-2xl bg-white/5 p-3 text-gray-300 transition hover:bg-white/10 hover:text-white"
                    >
                        <FaGithub size={18} />
                    </a>
                </div>

            </div>

        </div>
    );
}
