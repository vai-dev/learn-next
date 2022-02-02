import Articles from "../components/Articles"
import homeStyle from '../styles/Home.module.css'
export default function Home({ articles }) {
 
  return (
    <div className={ homeStyle.homecontainer}>
      <Articles articles={ articles }/>
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
  const articles = await res.json()
  return {
    props: {
      articles
    }
  }
}
