import React from 'react'
import { Link } from 'react-router-dom'

function Layout (): JSX.Element {
  return (
      <div className="layout">
          <h1>Main</h1>
          <Link to="/pageA">pageA</Link>{' '}
          <Link to="/pageB">pageB</Link>
      </div>
  )
}

export default Layout
