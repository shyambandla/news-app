import { gql } from "graphql-request";
import sortNewsByImage from "./sortNewsByImage";
import axios from 'axios';

const fetchNews = async (
  category?: Category | string,
  keywords?: string,
  isDynamic?: boolean
) => {
  // GraphQL query

  // const query = gql`
  //   query MyQuery(
  //     $access_key: String!
  //     $categories: String!
  //     $keywords: String
  //   ) {
  //     myQuery(
  //       access_key: $access_key
  //       categories: $categories
  //       countries: "us"
  //       sort: "published_desc"
  //       keywords: $keywords
  //     ) {
  //       data {
  //         author
  //         category
  //         image
  //         description
  //         country
  //         language
  //         published_at
  //         source
  //         title
  //         url
  //       }
  //       pagination {
  //         count
  //         limit
  //         offset
  //         total
  //       }
  //     }
  //   }
  // `;

  // Fetch function with Next.js 13 caching...

  // const res = await fetch(
  //   "https://linkshortner.me/api/news/top",
  //   {
  //     method: "POST",
  //     cache: isDynamic ? "no-cache" : "default",
  //     next: isDynamic ? { revalidate: 0 } : { revalidate: 20 },
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `Apikey ${process.env.STEPZEN_API_KEY}`,
  //     },
  //     body: JSON.stringify({
  //       query,
  //       variables: {
  //         access_key: process.env.MEDIASTACK_API_KEY,
  //         categories: category,
  //         keywords: keywords,
  //       },
  //     }),
  //   }
  // );

  // const newsResponse = await res.json();


  // Sort function by images vs not images present
  const news=await axios.get("http://linkshortner.me/api/news/top");

  // const news = sortNewsByImage(newsResponse.data);

  // return news;

  return news.data;
};

export default fetchNews;
