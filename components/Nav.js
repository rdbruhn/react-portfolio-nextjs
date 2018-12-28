import Link from "next/link";

const navStyle = {
  position: "fixed",
  height: "40px",
  display: "flex",
  flexFlow: "row nowrap",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  backgroundColor: "#621A19",
  color: "#fff",
  top: 0
};

const linkStyle = {
  marginRight: 15
};

const Nav = () => (
  <div style={navStyle}>
    <Link href="/">
      <a rel="noopener" style={linkStyle}>
        Home
      </a>
    </Link>
    <Link href="/blog">
      <a rel="noopener" style={linkStyle}>
        Blog
      </a>
    </Link>
    <Link href="/resume">
      <a rel="noopener" style={linkStyle}>
        Resume
      </a>
    </Link>
    <Link href="/about">
      <a rel="noopener" style={linkStyle}>
        About
      </a>
    </Link>
    <style jsx>{`
      a,
      a:active,
      a:hover,
      a:visited {
        color: #fff;
      }
    `}</style>
  </div>
);

export default Nav;
