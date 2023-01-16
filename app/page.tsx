import { categories } from "../constants";
import fetchNews from "../lib/fetchNews";
import NewsList from "./NewsList";

// type NewsResponse = { data: Article[] };

async function Homepage() {
  // const news: NewsResponse = await fetchNews(categories.join(","));
//   type NewsResponse = { data: Article[] }

const news: NewsResponse = await fetchNews(categories.join(","));
  //
  console.log(news);
  return (
    <div>
      {/* Newlist news */}
      {/* <NewsList news={news} /> */}
    </div>
  );
}

export default Homepage;
