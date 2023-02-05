import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import getPosts from "../lib/posts";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

export async function getStaticProps() {
  return {
    props: {
      posts: await getPosts(),
    },
  };
}

const Home = ({ posts }: any) => {
  return (
    <>
      <ul className="posts">
        {posts.map(({ slug, title }: any) => (
          <li key={slug}>
            <img src="./bg-post-sample.png" />
            <h1>{title}</h1>
            <div></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id
              semper nulla, a facilisis risus. Nam eget lacinia odio, non
              egestas eros. Morbi vestibulum, dolor et interdum bibendum, libero
              sapien iaculis odio, eu accumsan magna odio in elit
            </p>
            <Link href={`/${slug}`}>
              Ler mais <i className="fa-solid fa-chevron-right"></i>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;
