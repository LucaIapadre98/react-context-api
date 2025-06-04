import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";

// IMPORTO I VARI LINK PER ALTRE PAGINE //
import Homepage from "./pages/Homepage";
import MyPage from "./pages/MyPage";

//IMPORTO VARIE LISTE DEI POST //
import PostsPage from "./pages/posts/PostsPage";
import ListDetailPage from "./pages/posts/ListDetailPage";
import { PostsProvider } from "./components/content/PostsContext";



export default function App(){
  return (
    <>
      <PostsProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout/>}>
              <Route path="/" element={<Homepage />} />
              <Route path="/personalpage" element={<MyPage />} />
              <Route path="/posts">
              <Route path="" element={<PostsPage />} />
              <Route path=":id" element={<ListDetailPage />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </PostsProvider>
    </>
  )
}