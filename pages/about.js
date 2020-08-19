import { withRouter } from 'next/router'
import styled from 'styled-components'

const Title = styled.h1`
  color: green;
`

const About = ({ router }) => {
  return (
    <div>
      <Title>About Page</Title>
      <div>接收到参数为：{router.query.name}</div>
    </div>
  )
}

export default withRouter(About)
