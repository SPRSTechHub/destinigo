import {
  articles_url,
  country_code,
  catagory,
  _api_key,
} from '../config/rest.config';

export async function getArticles() {
  try {
    let articles = await fetch(
      'https://newsapi.org/v2/top-headlines?country=in&apiKey=996cd44bdc244ab29a60fb55226319a3',
    );
    let result = await articles.json();
    articles = null;
    return result.articles;
  } catch (err) {
    throw err;
  }
}
