import { useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Header from '../components/header'

const Home = () => {
  const router = useRouter()
  const gotoAbout = () => {
    router.push({
      pathname: '/news',
      query: {
        info: '学习Next.js',
      },
    })
  }

  useEffect(() => {
    const handleRouteChangeStart = url => {
      console.log('routeChangeStart 路由开始变化，url:', url)
    }

    const handleRouteChangeComplete = url => {
      console.log('routeChangeComplete 路由结束变化，url:', url)
    }

    const handleBeforeHistoryChange = url => {
      console.log('beforeHistoryChange 在改变浏览器 history之前触发，url:', url)
    }

    const handleRouteChangeError = (err, url) => {
      console.log(`routeChangeError 跳转发生错误: ${err}, url:${url}`)
    }

    const handleHashChangeStart = url => {
      console.log('hashChangeStart hash路由模式跳转开始时执行，url:', url)
    }

    const handleHashChangeComplete = url => {
      console.log('hashChangeComplete hash路由模式跳转完成时，url:', url)
    }

    router.events.on('routeChangeStart', handleRouteChangeStart)
    router.events.on('routeChangeComplete', handleRouteChangeComplete)
    router.events.on('beforeHistoryChange', handleBeforeHistoryChange)
    router.events.on('routeChangeError', handleRouteChangeError)
    router.events.on('hashChangeStart', handleHashChangeStart)
    router.events.on('hashChangeComplete', handleHashChangeComplete)

    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart)
      router.events.off('routeChangeComplete', handleRouteChangeComplete)
      router.events.off('beforeHistoryChange', handleBeforeHistoryChange)
      router.events.off('routeChangeError', handleRouteChangeError)
      router.events.off('hashChangeStart', handleHashChangeStart)
      router.events.off('hashChangeComplete', handleHashChangeComplete)
    }
  }, [])

  return (
    <div>
      <Header />
      <div>Hello Next.js!</div>
      <div>
        <Link href='/about?name=jackylin'>
          <a>关于</a>
        </Link>
      </div>
      <div>
        <button onClick={gotoAbout}>新闻</button>
      </div>
      <div>
        <Link href='/initial-blog'>
          <a>进入Initial Blog</a>
        </Link>
      </div>
    </div>
  )
}
export default Home
