import React from 'react'
import AuthContext from './AuthContext'
import Meta from './Meta'
import Header from './Header'
import Footer from './Footer'
import Announcement from './Announcement'

const COLUMN = `
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
class Page extends React.Component {
  render() {
    const { children, enableHeroText, flex } = this.props
    return (
      <main className="main mt4 mb4">
        <Meta />
        <AuthContext>
          <Announcement />
          <Header enableHeroText={enableHeroText} />
          <div className="page">{children}</div>
        </AuthContext>

        <Footer />

        <style jsx>
          {`
            .main {
              ${flex ? COLUMN : ''}
            }
            @media (min-width: 1024px) {
              .main {
                ${COLUMN};
                min-width: 1080px; /* temporary fix for mobile overflow issue */
              }
            }
          `}
        </style>
      </main>
    )
  }
}

export default Page
