const Post = ({ post }) => {
  return (
    <div>
      <div>文章id: {post.id}</div>
      <div>博文标题: {post.title}</div>
    </div>
  )
}

// 构建路由
export async function getStaticPaths() {
  // 调用外部 API 获取博文列表
  const res = await fetch('https://jsonplaceholder.typicode.com/todos')
  const posts = await res.json()

  // 根据博文列表生成所有需要预渲染的路径
  const paths = posts.map(post => `/posts/${post.id}`)

  // fallback为false，表示任何不在 getStaticPaths 的路径的结果将是 404 页面。
  return { paths, fallback: false }
}

// 获取单个页面博文数据
export async function getStaticProps({ params }) {
  // 如果路由是 /posts/1，那么 params.id 就是 1
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${params.id}`)
  const post = await res.json()

  // 通过 props 参数向页面传递博文的数据
  return { props: { post } }
}

export default Post
