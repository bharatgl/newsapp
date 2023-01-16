import { categories } from "../constants";
import fetchNews from "../lib/fetchNews";
import NewsList from "./NewsList";
import response from "../Response.json";
// type NewsResponse = { data: Article[] };

async function Homepage() {
  // const news: NewsResponse = await fetchNews(categories.join(","));
  //   type NewsResponse = { data: Article[] }

  const news: NewsResponse = response;
  // const news: NewsResponse = await fetchNews(categories.join(","));
  //
  console.log(news);
  return (
    <div>
     
      <NewsList news={news} />
    </div>
  );
}

export default Homepage;
