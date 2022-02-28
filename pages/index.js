import Head from "next/head";
import Image from "next/image";
import { getPostsAndPortfolio } from "../lib/data";
import QrAnimate from "../components/QrAnimate";

export const getStaticProps = async () => {
  const data = await getPostsAndPortfolio();
  return {
    props: {
      data,
    },
  };
};

export default function HomePage({ data }) {
  return (
    <div className="min-h-full">
      <div className="px-2 pt-12 grid grid-cols-2 content-start overflow-hidden ">
        <div className="grid place-content-center  text-medteal space-y-6">
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-lightteal to-darkteal lg:text-4xl md:text-3xl text-xs font-light tracking-widest  m-auto">
            Kirk Abbott
          </p>
          <p className="text-transparent bg-clip-text bg-gradient-to-l from-lightteal to-darkteal lg:text-3xl md:text-2xl text-xs font-light tracking-widest m-auto">
            Software Engineer
          </p>
        </div>
        <div className="flex justify-center">
          <div className="relative flex justify-center">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-darkteal to-lightteal rounded-lg blur"></div>
            <div width={140} height={140}>
              <Image
                className="rounded-lg"
                src="/kirkPic2.jpeg"
                width={140}
                height={140}
                priority={true}
                // layout="responsive"
              />
            </div>
          </div>
        </div>
      </div>
      {/* <div className=" flex justify-center w-2/3 h-10"> */}
      <div className=" bg-Zbackground m-20 lg:m-40 border-2 border-medteal ">
        <QrAnimate />
      </div>
    </div>
    // </div>
  );
}
