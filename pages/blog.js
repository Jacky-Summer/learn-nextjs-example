const Blog = ({ posts }) => {
  return <div>title: {posts.title}</div>
}

// 此函数在构建时被调用
export async function getStaticProps() {
  // 调用外部 API 获取内容
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  const posts = await res.json()

  // 在构建时将接收到 `posts` 参数
  return {
    props: {
      posts,
    },
  }
}

export default Blog
