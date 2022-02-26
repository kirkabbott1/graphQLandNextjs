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
      <div className="max-w-3xl mx-auto px-6 pt-36 sm:px-6 lg:px-20">
        {items?.map((item) => (
          <div key={item.slug}>
            <Link href={`/portfolio/${item.slug}`}>
              <a>
                <div className="relative overflow-hidden">
                  <div className="absolute w-full h-full z-10 opacity-60 bg-darkblue"></div>
                  <div className="absolute w-full h-full z-20 flex flex-col justify-center items-center text-center px-4">
                    <h3 className="text-white font-semibold text-2xl">{item.title}</h3>
                    <p className="text-gray-50 text-lg mt-4 leading-relaxed hidden md:flex">
                      {item.description}
                    </p>
                    <div className="mt-4">
                      {item.tags.map((tag) => (
                        <span
                          className="text-white uppercase text-sm tracking-wide m-2 bg-gray-700 px-2 py-1 rounded-lg"
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
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
