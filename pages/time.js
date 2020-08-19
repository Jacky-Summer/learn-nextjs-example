import { useState } from 'react'
import dynamic from 'next/dynamic'

// 懒加载自定义组件
const Content = dynamic(() => import('../components/content'))

const Time = () => {
  const getTime = async () => {
    const moment = await import('moment')
    setNowTime(moment.default().format('YYYY-MM-DD HH:mm:ss')) // 注意这里使用 default，不能直接用 moment()
  }
  const [nowTime, setNowTime] = useState('')
  return (
    <div>
      <button onClick={getTime}>获取当前时间</button>
      <div>当前时间：{nowTime}</div>
      <Content />
    </div>
  )
}

export default Time
