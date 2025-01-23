import { useState } from "react";

interface Props {
    items: string[];
    heading:string;
}

// const selectIndex = 0
// const handleClick = (event) => {console.log(event)}


const ListGroup = ({ items } : Props) => {

    const [selectIndex, setSelectIndex] = useState(-1);
  
    return (
    <div>
      <h1>List</h1>
      <ul className="list-group">
        { items.map( (item, index) =>
            <li 
            className={ selectIndex === index ? 'list-group-item active' : 'list-group-item ' } 
            key={item}
            onClick={ ()=> setSelectIndex(index) } 
            >    
            { item }
            </li> 
        )}
      </ul>
    </div>
  );
};

export default ListGroup;
