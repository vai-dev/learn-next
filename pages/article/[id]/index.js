import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
const article = ({ article }) => {
    // const router = useRouter()
    // const articleId  = router.query
    return (
        <>
            <h5>{ article.title }</h5>
            <p>{article.body}</p>
            <button>
                <Link href="/">Go Back</Link>
            </button> 
        </>
  )
};
// SSR
// export const getServerSideProps = async (context) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
//     const article = await res.json()
//     return {
//         props: {
//             article
//         }
//     }
// }


// if we want use combination with getStaticeProps and getStaticPath.
// gestStaticProps
export const getStaticProps = async (context) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
    const article = await res.json()
    return {
        props: {
            article
        }
    }
}
// getStaticPaths
export const getStaticPaths = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const articles = await res.json()
    const ids = articles.map(article => article.id)
    const paths = ids.map( id => ({ params: {id: id.toString()}}))
    return {
        paths,
        fallback: false,
    }
}
 
export default article;
