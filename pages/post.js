import React from "react";
import ReactMarkdown from "react-markdown";
import Layout from "../components/Layout.js";

export default class extends React.Component {
  static async getInitialProps({
    req: {
      params: { id }
    }
  }) {
    const content = await require(`../static/markdown/_posts/${id}`);
    return { content };
  }

  render() {
    return (
      <Layout>
        <ReactMarkdown source={this.props.content} escapeHtml={false} />
      </Layout>
    );
  }
}
