export const POSTS_QUERY = `*[
  _type == "post" && defined(slug.current)
]|order(publishedAt desc)[0...12]{
  _id,
  title,
  slug,
  excerpt,
  publishedAt,
  author,
  mainImage {
    asset
  },
  body
}`;
