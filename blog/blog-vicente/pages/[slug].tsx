import ReactMarkdown from "react-markdown";
import getPosts from "../lib/posts";

const Post = ({ title, date, markdown }:any) => (
  <article>
    <h1>{title}</h1>
    <time>{date}</time>
    <ReactMarkdown>{markdown}</ReactMarkdown>
  </article>
);

export const getStaticPaths = async () => {
  const posts = await getPosts();

  return {
    paths: posts.map((post) => `/${post.slug}`),
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }:any) => {
  const posts = await getPosts();
  const post = posts.find((post) => post.slug === slug);

  return { props: post };
};

export default Post;