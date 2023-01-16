type Article={
      author: string | null;
      category: string;
      country: string;
      description:string;
      source: string;
      language:string;
      publishedAt:string;
      title:string;
      url:string;
      urlToImage:string |null;
      
   
}


// type Pagination = {
//       count:Int;
//       limit: Int;
//       offset:Int;
//       total:Int;
// }

type NewsResponse = {
    
      data: Article[];
      status: string;
      totalResults: Int;
}

type Source ={
      id: string;
      name: string;
    }
 

type Category =

| "business"
| "general"
| "entertainment"
| "health"
| "science"
| "sports"
| "technology";
