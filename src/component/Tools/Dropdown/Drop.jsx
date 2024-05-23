import React from 'react'
import { Dropdown } from 'semantic-ui-react'



const DropList = (props) => (
  <div className="flex flex-col text-[#484444]  text-[24px]">
    <div className=''>{props.label}</div>
    <Dropdown onChange={props.onChange} fluid selection options={props.options} />
  </div>
  
)

export default DropList;