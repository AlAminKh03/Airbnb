import React from 'react';
import { SearchDataProps } from '../Interfaces/Interfaces';
interface SearchProps{
    data:SearchDataProps
}


 const SearchData:React.FC<SearchProps>=({data})=> {
  return (
    <div>{data.location}</div>
  )
}
export default SearchData;