import React from "react";
import ReactMarkdown from "react-markdown";
import Layout from "../components/Layout.js";

export default class extends React.Component {
  static async getInitialProps({ req }) {
    const content = await require("../static/markdown/resume.md");
    return { content };
  }

  render() {
    return (
      <Layout>
        <ReactMarkdown source={this.props.content} />
      </Layout>
    );
  }
}
