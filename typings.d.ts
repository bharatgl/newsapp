type Article={
      author: string | null;
      category: string;
      country: string;
      description:string;
      source: string;
      language:string;
      published_at:string;
      title:string;
      url:string;
      image:string |null;
      
   
}


type Pagination = {
      count:Int;
      limit: Int;
      offset:Int;
      total:Int;
}

type NewsResponse = {
    
      data: Article[];
      pagination: Pagination
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
