import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm l">
        <div className=" h-screen  grid grid-cols-2 gap-8">
          {/* <div className=" h-screen  grid grid-cols-2 gap-8"> */}
          <div className="">
            <h1 className="text-5xl">
              Secure Voting <br /> made{" "}
              <span className="text-red-400">Sample </span>{" "}
            </h1>{" "}
            <br />
            <h5>
              Empowering Democracy with Secure Blockchain Voting
              <br /> - Your Vote, Your Voice, Your Security
            </h5>
          </div>
          <div className=" justify-center h-screen items-center ml-44">
            <h2 className="mt-5 text-lg">Be a part of Decision</h2>
            <h1 className="text-5xl text-red-400">Vote Today</h1>
            <div className=" grid grid-cols-2 gap-8">
              <div className="mt-5">
                <button className="bg-indigo-500 rounded-lg w-full p-3 text-white uppercase font-bold hover:bg-indigo-400 cursor-pointer transition-color">
                  Admin
                </button>
              </div>
              <div className="mt-5">
                <button className="bg-indigo-500 rounded-lg w-full p-3 text-white uppercase font-bold hover:bg-indigo-400 cursor-pointer transition-color">
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white ">
          <h1 className="text-red-800 text-2xl text-center">
            Blockchain technology based e-voting system.
          </h1>
          <br />
          <Image
            className="text-center items-center justify-center ml-48"
            src="/R.png"
            width={500}
            height={100}
            alt="Picture of the author"
          />
          <br />
        </div>
      </div>
    </main>
  );
}
