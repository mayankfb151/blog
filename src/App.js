import logo from "./logo.svg";

import AddPost from "./admin-components/add-post";
import EditPost from "./admin-components/edit-post";
import Header from "./components/header";
import ShowCase from "./components/showcase";
import Posts from "./components/post";
import Work from "./components/work";
import Footer from "./components/footer";
import BlogList from "./components/blogList";
import TagList from "./components/tag-list";
import WorkList from "./components/workList";
import PostDetail from "./components/post_detail";
import ArticleTable from "./admin-components/article-table";
import "font-awesome/css/font-awesome.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Home() {
  return (
    <div className="App">
      <ShowCase />
      <Posts />
      <Work />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <link rel="stylesheet" href="../public/css/font-awesome.min.css" />
      <meta name="viewport" content="width=device-width,initial-scale=1.0" />

      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<BlogList />} />
          <Route path="works" element={<WorkList />} />
          <Route path="add-post" element={<AddPost />} />
          <Route path="post-detail" element={<PostDetail />} />
          <Route path="post/:id" element={<PostDetail />} />
          <Route path="edit-post/:id" element={<EditPost />} />
          <Route path="article-table" element={<ArticleTable />} />
          <Route path="tag/:id" element={<TagList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
