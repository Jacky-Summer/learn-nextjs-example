import { withRouter } from 'next/router'

const News = ({ router }) => {
  return (
    <div>
      <div>News Page</div>
      <div>接收到参数为：{router.query.info}</div>
    </div>
  )
}

export default withRouter(News)
