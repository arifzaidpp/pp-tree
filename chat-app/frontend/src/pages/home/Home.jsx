import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import MessageContainer from '../../components/messages/MessageContainer'

const Home = () => {
  return (
    <div className='flex sm:h-[450px] md:h-[550px] overflow-hidden rounded-lg bg-gray-600 shadow-md bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-30'>
			<Sidebar />
			<MessageContainer />
		</div>
  )
}

export default Home



// STARTER CODE

// import React from 'react'
// import Sidebar from '../../components/sidebar/Sidebar'
// import MessageContainer from '../../components/messages/MessageContainer'

// const Home = () => {
//   return (
//     <div className='flex sm:h-[450px] md:h-[550px] overflow-hidden rounded-lg bg-gray-600 shadow-md bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-30'>
// 			<Sidebar />
// 			<MessageContainer />
// 		</div>
//   )
// }

// export default Home