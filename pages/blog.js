import Layout from "../components/Layout";
import Link from "next/link";
import posts from "../static/markdown/manifest.json";

const reversedPosts = posts.reverse();

const listStyle = {
  display: "flex",
  flexFlow: "column nowrap",
  alignItems: "flex-start"
};

const linkStyle = {
  display: "flex",
  flexFlow: "row nowrap",
  justifyContent: "space-between",
  width: "100%",
  color: "#621A19"
};

const Blog = () => (
  <Layout>
    <h1>Blog</h1>
    <div style={listStyle}>
      {reversedPosts.map(({ id, title, date }) => (
        <Link key={id} as={`/post/${id}`} href={`/post/${id}`}>
          <a style={linkStyle}>
            <p style={{ paddingRight: "10px" }}>{title}</p>
            <p style={{ whiteSpace: "nowrap" }}>{date}</p>
          </a>
        </Link>
      ))}
    </div>
  </Layout>
);

export default Blog;
