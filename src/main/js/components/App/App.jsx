import React from 'react'
import { Layout, Panel, AppBar } from 'react-toolbox'
import Tvshows from '../Tvshows'
import Search from '../Search'

const Component = () => {
  return (
    <div>
      <AppBar fixed>
        <Search />
      </AppBar>
      <Layout>
        <Panel>
          <Tvshows />
        </Panel>
      </Layout>
    </div>
  )
}

export default Component
