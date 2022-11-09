import React from 'react'
import { PropsModel  } from '../Interfaces/Interfaces';
 interface listProps{
    lists:PropsModel
 }

const SmallerCards:React.FC<listProps>=({lists}) =>{
  return (
    <div>
        <h1>{lists.distance}</h1>
        <p>{lists.location}</p>
    </div>
  )
}
export default SmallerCards;