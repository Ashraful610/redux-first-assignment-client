import React, { useEffect, useState } from 'react';
import Content from './Content';

const AllContent = () => {
    const [contents , setContents]  = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/contents')
        .then(res => res.json())
        .then(contents => setContents(contents))
    },[contents])

    return (
    <div className="min-w-[1020px] overflow-x-auto">
     <table className="table w-full">
      <thead className=" w-full">
       <tr>
        <th>Name</th>
        <th>Text</th>
        <th>Delete</th>
        <th>Update</th>
       </tr>
      </thead>
      <tbody>
        {
            contents.map(content => <Content key={content._id} content={content} />)
        }
      
     </tbody> 
    </table>
 </div>

    );
};

export default AllContent;