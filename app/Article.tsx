type Props = {
  article: Article;
};

function Article({ article }: Props) {
  return (
    <article>
      {article.urlToImage && (
        <img
          src={article.urlToImage}
          alt={article.title}
          className="h-56 w-full object-cover rounded-t-lg shadow-md"
        />
      )}
    </article>
  );
}

export default Article;
