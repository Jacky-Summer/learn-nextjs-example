import Head from 'next/head'

const Header = () => {
  return (
    <div>
      <Head>
        <title>Next.js 教程 -- JackyLin</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <div className='header-bar'>Header</div>
      <style jsx>
        {`
          .header-bar {
            width: 100%;
            height: 50px;
            line-height: 50px;
            background: lightblue;
            text-align: center;
          }
        `}
      </style>
    </div>
  )
}

export default Header
