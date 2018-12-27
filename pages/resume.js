import Layout from "../components/Layout.js";
const ReactMarkdown = require("react-markdown");

import resume from "../markdown/resume";

export default () => (
  <Layout>
    <ReactMarkdown source={resume} />
  </Layout>
);
