import Link from 'next/link'

const InitialBlog = ({ post }) => {
  return (
    <div>
      <h1>getInitialProps Demo Page</h1>
      <div>获取到的title: {post.title}</div>
      <Link href='/'>
        <a>返回首页</a>
      </Link>
    </div>
  )
}

InitialBlog.getInitialProps = async ctx => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  const post = await res.json()
  return { post }
}

export default InitialBlog
