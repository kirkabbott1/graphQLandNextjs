import Image from "next/image";
import Link from "next/link";

import { getPortfolioItems } from "../../lib/data";

export const getStaticProps = async () => {
  const data = await getPortfolioItems();
  return {
    props: {
      items: data.portfolios,
    },
  };
};

export default function portfolioPage({ items }) {
  return (
    <div className="min-h-screen">
      <div className="max-w-3xl mx-auto pt-12 sm:px-6 md:px-10 lg:px-20 ">
        {items?.map((item) => (
          <div key={item.slug}>
            <a href="https://www.healthnutbutter.com" target="_blank" rel="noopener noreferrer">
              <div className="relative overflow-hidden">
                <div className="absolute w-full h-full z-10 opacity-80 bg-darkblue shadow-2xl"></div>
                <div className="absolute w-full h-full z-20 flex flex-col justify-center items-center text-center px-4">
                  <h3 className=" text-lg md:text-xl lg:text-2xl max-w-prose text-lightteal leading-9 space-y-9 flex-col content-evenly">
                    {item.title}
                  </h3>
                  <p className=" pt-3 text-lg md:text-xl lg:text-2xl max-w-prose text-lightteal leading-9 space-y-9 flex-col content-evenly">
                    {item.description}
                  </p>
                  <div className="mt-4">
                    {item.tags.map((tag) => (
                      <span
                        className=" text-lg md:text-xl lg:text-2xl max-w-prose text-lightteal leading-9 space-y-9 flex-col content-evenly"
                        key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <Image
                  priority="true"
                  src={item.coverImage.url}
                  objectFit="cover"
                  height={item.coverImage.height}
                  width={item.coverImage.width}
                  className="absolute"
                />
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
