import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import MainLayout from "../layouts/MainLayout";
import PostList from "../components/PostList";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <MainLayout>
        <PostList />
      </MainLayout>
    </Layout>
  );
}
