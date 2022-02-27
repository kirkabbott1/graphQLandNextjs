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
    <div className=" min-h-full ">
      <div className="px-2 pt-36 grid grid-cols-2 content-start overflow-hidden ">
        <div className="text-center align-middle pt-5 text-medteal">
          <p className="lg:text-4xl md:text-3xl text-xs font-bold leading-8 tracking-widest lg:text-shadow-3d">
            Kirk Abbott
          </p>

          <p className="lg:text-3xl md:text-2xl text-xs font-bold tracking-widest pt-6">
            Software Engineer
          </p>
        </div>
        <div className="flex justify-center">
          <div className="relative flex justify-center">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-darkteal to-lightteal rounded-lg blur"></div>
            <div width={140} height={140}>
              <Image
                className="rounded-lg"
                src={data.posts[0].author.image.url}
                width={140}
                height={140}
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

//max-w-[150px] max-h-[150px]
