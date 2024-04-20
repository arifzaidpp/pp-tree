import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Tree from '../../components/tree/Tree'

const Home = () => {
  return (
    <div className="bg-wrap">
        <div className="container-fluid">
            <div className="row">
                <Sidebar/>
                <Tree/>
            </div>
        </div>
    </div>
  )
}

export default Home