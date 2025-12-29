import Image from "next/image";

export default function Hero(){
    return (
        <section
            id="hero"
            className="min-h-screen flex items-center justify-center"
        >
            {/*<Image*/}
            {/*    src="/images/image-bg.jpg"*/}
            {/*    alt="Background"*/}
            {/*    fill*/}
            {/*    className="object-cover"*/}
            {/*    priority*/}
            {/*/>*/}
            <div className="relative z-10 flex min-h-screen items-center justify-center">
                <h1 className="text-5xl">Hariharan T</h1>
            </div>
        </section>
    );
}