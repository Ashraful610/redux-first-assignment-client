import React, { useEffect, useState } from 'react';
import Content from '../Content/Content';

const Contents = () => {
    const [contents , setContents]  = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/contents')
        .then(res => res.json())
        .then(contents => setContents(contents))
    },[])

    return (
        <section className='w-3/5 h-full mx-auto p-5'>
            {
                contents.map(content => <Content content={content} key={content._id}/>)
            }
        </section>
    );
};

export default Contents;