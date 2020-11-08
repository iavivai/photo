import utilStyles from '../styles/utils.module.css'
import useSWR from 'swr'

const fetcher = (id) =>
      fetch(
        `http://localhost:3003/api/posts/${id}`
      ).then((response) => response.json());

export default function Post({ id }) {
  const { data, error } = useSWR(id, fetcher)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  return (
    // TODO
    <>
      <h1>{data.title}</h1>

      <div>
        <p>{data.date}</p>
      </div>

      <img
        src={`/images/${data.image}`}
        className={utilStyles.image}
        alt={data.title}
      />
    </>
  )
}
