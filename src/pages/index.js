import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Posts from "./posts";

const inter = Inter({ subsets: ["latin"] });
export async function getServerSideProps() {
  //24266,24586
  const apiData = await fetch(
    "https://www.greyorange.com/wp-json/wp/v2/posts/24586"
  );
  const dataJson = await apiData.json();
  return {
    props: {
      postData: dataJson,
    },
  };
}
export default function Home(props) {
  const { postData } = props;
  return (
    <div>
      <Posts postData={postData} />
    </div>
  );
}
