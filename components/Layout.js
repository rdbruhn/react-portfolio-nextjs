import Nav from "./Nav";

const pageLayoutStyle = {
  maxWidth: "800px",
  margin: "auto",
  padding: "50px 10px 50px 10px"
};

const globalStyle = {
  fontFamily: `monospace, "Helvetica Neue", Helvetica, Arial, sans-serif`
};

const Layout = props => (
  <div style={globalStyle}>
    <Nav />
    <div style={pageLayoutStyle}>{props.children}</div>
    <footer>
      <div>
        <a rel="noopener" href="https://github.com/rdbruhn" target="_blank">
          GitHub
        </a>
      </div>
      <div>
        <a rel="noopener" href="http://twitter.com/robbruhn" target="_blank">
          Twitter
        </a>
      </div>
      <div>
        <a
          rel="noopener"
          href="http://www.linkedin.com/in/rdbruhn"
          target="_blank"
        >
          LinkedIn
        </a>
      </div>
      <div>
        <a rel="noopener" href="mailto:rob@modulomoments.com">
          Email
        </a>
      </div>
    </footer>
    <style jsx>{`
      a,
      a:active,
      a:hover,
      a:visited {
        color: #fff;
        margin-right: 15px;
      }
      footer {
          position: fixed;
          height: 40px;
          display: flex;
          flex-flow: row nowrap;
          justify-content: center;
          align-items: center;
          width: 100%;
          background-color: #621A19;
          color: #fff;
          bottom: 0;
        }
      }
    `}</style>
  </div>
);

export default Layout;
