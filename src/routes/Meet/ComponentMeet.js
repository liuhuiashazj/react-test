import React from 'react'
import  Listnav from 'components/Listnav'
import  Meetlist from 'components/Meetlist'
import  Detail from 'components/Detail'

export const MeetComponent = (props) => (
  <div style={{ margin: '0 auto' }} >
    <h2>meeting: {props.meeting.data}</h2>
    <Listnav data={props.meeting.data}/>
    <Meetlist data={props.meeting.data}/>
   <Detail />
  </div>
)

export default MeetComponent
