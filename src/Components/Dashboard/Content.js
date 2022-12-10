import React from 'react';

const Content = ({content}) => {
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
                    <button className='bg-red-600 text-white  btn'>Delete</button>
                </td>
                <th className='w-[150px]'>
                   <button className='bg-green-600  text-white rounded-lg btn'>Update</button>
                </th>
       </tr>
    );
};

export default Content;