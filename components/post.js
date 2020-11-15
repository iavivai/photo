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
    <div className={utilStyles.modalItem}>
      <div className={utilStyles.itemHeader}>
        <h1 className={utilStyles.itemTitle}>{data.title}</h1>
        <div className={utilStyles.date}>{data.date}</div>
      </div>

      <div className={utilStyles.imgContener}>
        <img
          src={`/images/${data.image}`}
          className={utilStyles.modalImage}
          alt={data.title}
        />
      </div>
    </div>
  )
}
