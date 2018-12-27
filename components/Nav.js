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
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>About</a>
    </Link>
    <Link href="/resume">
      <a style={linkStyle}>Resume</a>
    </Link>
    <a style={linkStyle} href="mailto:rob@modulomoments.com">
      Contact
    </a>
    <style jsx>{`
      a,
      a:active,
      a:hover,
      a:visited {
        color: #fff;
        text-decoration: none;
      }
      a:hover {
        text-decoration: underline;
      }
    `}</style>
  </div>
);

export default Nav;
