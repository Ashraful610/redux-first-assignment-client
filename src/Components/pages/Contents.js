import React, { useEffect, useState } from 'react';
import Content from './Content';
import TransitionsModal from './PostContent';

const Contents = () => {
    const [contents , setContents]  = useState([])
    const [formate , setFormate] = useState(true)

    useEffect(() => {
        fetch('http://localhost:5000/contents')
        .then(res => res.json())
        .then(contents => setContents(contents))
    },[])  

    console.log(contents)

    return (
        <section className='w-3/5 h-full mx-auto p-5'>
          <div className='space-x-2 flex'>
             <TransitionsModal /> 
             <button className='bg-white border-2 border-black text-black hover:bg-black hover:text-white font-bold px-8 rounded-full btn' onClick={() => setFormate(true)}>
                First Upload
            </button>
             <button className='bg-white border-2 border-black text-black hover:bg-black hover:text-white font-bold px-8 rounded-full btn' onClick={() => setFormate(false)}>
                Last Upload
            </button>
          </div>
            {
              formate ?  contents.sort((a , b) => a.number - b.number)
                .map(content => <Content content={content} key={content._id}/>)
                : contents.sort((a , b) => b.number - a.number)
                .map(content => <Content content={content} key={content._id}/>)
            }
        </section>
    );
};

export default Contents;