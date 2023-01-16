import { gql } from "graphql-request";
import sortNewsByImage from "./sortNewsByimage";

const fetchNews = async (

      category?: Category | string,
      keywords?: string,
      isDynamic?: boolean
) =>{

  const query = gql`
  query MyQuery(
    $apiKey:String!
    $categories:String!
    $keywords: String
  )   {
    myQuery(apiKey: $apiKey
       q: $q) {
      status
      totalResults
      articles {
        author
        content
        description
        publishedAt
        title
        url
        urlToImage
      }
    }
  }
`;


      // Fetch function with Next.js 13 caching....

    const res = await fetch("https://narrewarren.stepzen.net/api/gaudy-lemur/__graphql",{
      method :'POST',
      cache: isDynamic ? "no-cache":"default",
      next : isDynamic ? {revalidate:0} : {revalidate:20},
      headers:{
            "Content-Type":"application/json",
            Authorization: `ApiKey ${process.env.STEPZEN_API_KEY}`,
      },
    
     body:JSON.stringify({
      query,
      variables:{
            api_Key:process.env.NEWS_API_KEY,
            categories:category,
            keywords:keywords,
      },
     }),
    }
    );

    console.log(

      "LOADING NEW DATA FROM API for category >>>",
      category,
      keywords
    );

    const newsResponse = await res.json();

      // Sort function by images vs not images present 
      const news = sortNewsByImage(newsResponse.data.myQuery);
      return news;



      // return res
}

export default fetchNews;

