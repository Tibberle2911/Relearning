import Image from "next/image";

export default function Home() {
  return (
    <div className="justify-items-center">
        <h1>Hello, World!</h1>
        <Image
            src="/Logo.png"
            alt="Logo"
            width={200}
            height={200}
        />
    </div>
  );
}
