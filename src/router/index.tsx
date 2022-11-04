import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from '../views/layout/index'
import PageA from '../views/pageA/index'
import PageB from '../views/pageB/index'

interface IRoute {
  name?: string
  path: string
  exact?: boolean
  children?: string
  component: React.FC
}

const route: IRoute[] = [
  {
    name: 'pageA',
    path: 'pageA',
    component: lazy(async () => await import('../views/pageA/index'))
  },
  {
    name: 'pageB',
    path: 'pageB',
    component: lazy(async () => await import('../views/pageB/index'))
  }
]

const RouteC = (): JSX.Element => {
  return (
      <BrowserRouter>
          <Suspense fallback="loading pages">
              <Routes>
                  <Route path="/" element={<Layout/>}>
                      <Route path="pa" element={<PageA/>}/>
                      <Route path="pb" element={<PageB/>}/>
                  </Route>
                  {route.map((item) => <Route key={item.path} path={item.path} element={<item.component/>}/>)}
                  <Route path="*" element={'not found'} />
              </Routes>
          </Suspense>
      </BrowserRouter>
  )
}

export default RouteC
