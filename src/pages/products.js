import Navbar from "@/components/Navbar";
import { useRouter } from "next/router";
import React from "react";

export async function getServerSideProps() {
  const response = await fetch(
    "http://localhost:1337/api/products?populate=*",
    {}
  );
  const data = await response.json();
  return {
    props: {
      products: data,
    },
  };
}

const Products = (props) => {
  const productsData = props?.products?.data;
  const router = useRouter();
  const navigateToPDP = (pid) => {
    router.push(`/product/${pid}`);
  };
  return (
    <>
      <Navbar />
      <div className="mx-2 text-black">
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-6 mx-auto">
            <div className="flex flex-wrap w-full mb-20">
              <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                  Best Seller Products
                </h1>
                <div className="h-1 w-20 bg-red-500 rounded"></div>
              </div>
              <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
                Mylo Care: Effective and science-backed personal care and
                wellness solutions for a joyful you.
                <br />
                Mylo Baby: Science-backed, gentle and effective personal care &
                hygiene range for your little one.
              </p>
            </div>
            <div className="flex flex-wrap -m-4">
              {productsData?.map((product, index) => {
                return (
                  <div
                    key={"product" + index}
                    className="xl:w-1/4 md:w-1/2 p-4"
                  >
                    <div
                      key={`product${index}`}
                      className="bg-gray-100 p-6 rounded-lg"
                    >
                      <img
                        className="h-80 rounded w-full object-contain object-center mb-6"
                        src={
                          "http://localhost:1337" +
                          product?.attributes?.image?.data?.attributes?.url
                        }
                        alt="content"
                      />
                      <h3 className="tracking-widest text-#efef54-500 opacity-70 text-xs font-medium title-font capitalize">
                        {product?.attributes?.category}
                      </h3>
                      <h2 className="text-lg text-gray-900 font-medium title-font mb-4 capitalize">
                        {product?.attributes?.title}
                      </h2>
                      <p className="leading-relaxed text-base">
                        {product?.attributes?.description}
                      </p>
                      <button
                        onClick={() => navigateToPDP(product?.id)}
                        className="flex mx-auto mt-16 text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg"
                      >
                        Buy Now
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Products;
