import React from 'react'
import { Dropdown } from 'semantic-ui-react'



const DropList = (props) => (
  <Dropdown placeholder='Skills' fluid multiple selection options={props.options} />
)

export default DropList;