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
    <div className="mt-[-56px] h-screen">
      <div className="px-2 pt-36 grid grid-cols-2 content-start overflow-hidden ">
        <div className="text-center align-middle pt-5 text-medteal">
          <p className="lg:text-4xl md:text-3xl sm:text-xs font-bold leading-8 tracking-widest lg:text-shadow-3d">
            Kirk Abbott
          </p>

          <p className="lg:text-3xl md:text-2xl sm:text-xs font-bold tracking-widest pt-6">
            Software engineer
          </p>
        </div>
        <div className="flex justify-center">
          <div className="relative flex justify-center">
            <div className="absolute inset-0 bg-medteal rounded-lg blur"></div>
            <div width={150} height={150}>
              <Image
                className="rounded-lg"
                src={data.posts[0].author.image.url}
                width={150}
                height={150}
                // layout="responsive"
              />
            </div>
          </div>
        </div>
      </div>
      {/* <div className=" flex justify-center w-2/3 h-10"> */}
      <div className=" m-20 border-2 border-medteal ">
        <QrAnimate />
      </div>
    </div>
    // </div>
  );
}

//max-w-[150px] max-h-[150px]
