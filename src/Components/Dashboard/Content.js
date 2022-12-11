import React from 'react';

const Content = ({content}) => {

  const handleDelete = (e) => {
    e.preventDefault();
    
    fetch(`http://localhost:5000/content/${content._id}`, {
      method: 'DELETE',
    })
    .then(res => res.json())
    .then(result => {
      console.log(result)
    })

  }
    return (
        <tr>
             <td>
                 <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask rounded-full w-10 h-10">
                        <img src={content.img} alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold text-sm">{content.name}</div>
                      <div className="text-sm opacity-50">United States</div>
                    </div>
                 </div>
             </td>
                <td className='text-sm max-w-[500px] text-ellipsis overflow-hidden'>
                  {content.details.title}
                  <br/>
                  <span className="badge badge-ghost badge-sm text-ellipsis overflow-hidden">
                    {content.details.info}
                  </span>
                </td>
                <td className='w-[150px]'>
                    <button className='bg-red-700 text-white btn' onClick={(e) => handleDelete(e)}>
                      Delete
                    </button>
                </td>
                <th className='w-[150px]'>
                   <button className='bg-green-700  text-white rounded-lg btn'>Update</button>
                </th>
       </tr>
    );
};

export default Content;