import React from 'react'
import Listnav from '../../components/listnav'
import Meetlist from '../../components/meetlist'


export const MeetingListLayout = ({ children }) => (
  <div className='container text-center'>
    <div className='core-layout__viewport'>
    	<Listnav />
    	<Meetlist />
      this is meetinglist
    </div>
  </div>
)


export default MeetingListLayout
