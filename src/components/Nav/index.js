import React from 'react'
import { Resizable, ResizableBox } from 'react-resizable'
import './Nav.scss'

export const Nav = () => (
  <div className="treeleft">
  	 this is nav
     <ResizableBox width={200} height={200} 
        onResizeStart={()=>(console.log('start'))}
        onResizeStop={()=>(console.log('end'))}
        minConstraints={[100,400]} maxConstraints={[300,400]}>
      <span>Contents</span>
    </ResizableBox>
  </div>
)

export default Nav
