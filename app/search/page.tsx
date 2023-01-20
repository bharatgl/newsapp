import fetchNews from "../../lib/fetchNews";
import NewsList from "../NewsList";
import response from "../response.json";
type Props = {
  searchParams?: { term: string };
};

async function SearchPage({ searchParams }: Props) {
  //   const news: NewsResponse = await fetchNews(
  //     "general",
  //     searchParams?.term,
  //     true
  //   );
  const news: NewsResponse = response;
  return (
    <div>
      <h1> Search Results for: {searchParams?.term}</h1>
      <NewsList news={news} />
    </div>
  );
}

export default SearchPage;
