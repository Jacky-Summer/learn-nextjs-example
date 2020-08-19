import '../public/static/styles/common.css'

/**
 * Component 指当前页面，每次路由切换时，Component 都会更新
 * pageProps 是带有初始属性的对象，该初始属性由我们的某个 数据获取方法 预先加载到你的页面中，否则它将是一个空对象
 */
export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}
