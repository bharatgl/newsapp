import { gql } from "graphql-request";
import sortNewsByImage from "./sortNewsByimage";

const fetchNews = async (

      category?: Category | string,
      keywords?: string,
      isDynamic?: boolean
) =>{

       const query = gql`
      query MyQuery   {
        myQuery(apiKey: $apiKey, q: $q) {
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
            Authorization: `access_key ${process.env.STEPZEN_API_KEY}`,
      },
    
     body:JSON.stringify({
      query,
      variables:{
        apiKey:process.env.NEWS_API_KEY,
            categories:category,
            keywords:keywords,
      },
     }),
    }
    );

    // console.log(

    //   "LOADING NEW DATA FROM API for category >>>",
    //   category,
    //   keywords
    // );


    // console.log(res);
    
    const newsResponse = await JSON.parse("res");
     console.log(newsResponse);
     
      // Sort function by images vs not images present 
      // const news = sortNewsByImage(newsResponse.data.myQuery);
      // const pagination = newsResponse.data.myQuery.pagination;
      const status = newsResponse.data.myQuery.status;
      const totalResults = newsResponse.data.myQuery.totalResults;
      
      const news = sortNewsByImage(newsResponse.data.myQuery);
      // console.log(news);
      return {news,status,totalResults};

      // return {data: news, pagination, status, totalResults};



      // return res
}

export default fetchNews;

