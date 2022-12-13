import { info } from 'daisyui/src/colors/colorNames';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateContent = () => {
    const {id} = useParams()
    const [content , setContent] = useState({})
    const {firstName , lastName , email ,  img , details } = content
    const navigate = useNavigate();
    
    useEffect(() => {
        fetch(`http://localhost:5000/content/${id}`)
        .then(response => response.json())
        .then(content => setContent(content))
    },[])


    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        const firstname = data.firstname
        const lastname = data.lastname
        const Email = data.email
        const Title = data.title
        const Info= data.info
        const Img = data.photo[0]

        if(Img){
            const formData = new FormData()
            formData.append('image', Img)
            const imgBBAPIKey = 'a35dd26dcd6217863e04026e8ac764ee'
            const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imgBBAPIKey}`
            fetch(url , {method:'POST',body:formData})
            .then(response => response.json())
            .then(result => {
                const img = result.data.url
                const content = {
                    "firstName":firstname ? firstname : firstName  ,
                    "lastName": lastname ? lastname : lastName , 
                    "email":Email ? Email : email ,
                    "img":img , 
                    "details":{
                      "title":Title ? Title : details.title,
                      "info":Info ? Info : details.info
                      }
                }
                fetch(`http://localhost:5000/content/${id}`,{
                method: 'PUT',
                body: JSON.stringify(content),
                headers: {
                 'Content-type': 'application/json; charset=UTF-8',
               },
               })
              .then((response) => response.json())
              .then(result => {
               if(result.modifiedCount > 0){
                navigate('/dashboard')
               }
              });
             })
        }
        else{
            const content = {
                "firstName":firstname ? firstname : firstName  ,
                "lastName": lastname ? lastname : lastName , 
                "email":Email ? Email : email ,
                "img": Img ? Img : img , 
                "details":{
                  "title":Title ? Title : details.title,
                  "info":Info ? Info : details.info
                  }
            }
            fetch(`http://localhost:5000/content/${id}`,{
                method: 'PUT',
                body: JSON.stringify(content),
                headers: {
                 'Content-type': 'application/json; charset=UTF-8',
               },
               })
              .then((response) => response.json())
              .then(result => {
                if(result.modifiedCount > 0){
                 navigate('/dashboard')
                }
               });
          }

        }

    return (
    <div className='bg-black w-[1020px] min-h-[550px]  flex justify-center items-center'>
        <form onSubmit={handleSubmit(onSubmit)} className='bg-white/20 w-3/4  min-h-fit rounded p-5'>
            <h2 className='text-2xl text-white font-semibold text-center'>Update Content</h2>
            <div className='flex space-x-5 px-5 py-2'>
                <div className='flex flex-col space-y-2 w-2/4'>
                    <label htmlFor="firstName" className='text-white'> First Name</label>
                    <input className='bg-transparent border-2 border-white px-5 py-1 outline-none text-white rounded' placeholder='first name' type="text" {...register('firstname')}  defaultValue={firstName}/>
                </div>
                <div className='flex flex-col space-y-2 w-2/4'>
                    <label htmlFor="lastName" className='text-white'> Last Name</label>
                    <input className='bg-transparent border-2 border-white px-5 py-1 outline-none text-white rounded' placeholder='last name' type="text" {...register('lastname')} defaultValue={lastName}/>
                </div>
            </div>
            <div className='flex space-x-5 px-5 py-2'>
                <div className='flex flex-col space-y-2 w-2/4'>
                    <label htmlFor="email" className='text-white'>Email</label>
                    <input className='bg-transparent border-2 border-white px-5 py-1 outline-none text-white rounded' placeholder='email' type="text" {...register('email')}  defaultValue={email}/>
                </div>
                <div className='flex flex-col space-y-2 w-2/4'>
                    <label htmlFor="title" className='text-white'>Title</label>
                    <input className='bg-transparent border-2 border-white px-5 py-1 outline-none text-white rounded' placeholder='title' type="text" {...register('title')} defaultValue={details?.title}/>
                </div>
            </div>
            <div className='px-5 py-2 space-y-2 '>
                <label htmlFor="details" className='text-white'>Details</label>
               <textarea name="text" id="" {...register('info')} placeholder='information' cols="30" rows="2" className='w-full bg-transparent border-2 border-white px-5 py-1 outline-none text-white rounded' defaultValue={details?.info}></textarea>
            </div>
            <div className='px-5 py-2 space-y-2 flex flex-col'>
                <label htmlFor="photo" className='text-white'>Photo</label>
               <input
                {...register("photo")}
                type='file'
                placeholder="photo"
                className='text-white p-5 border-2 border-white rounded'
                defaultValue={img}
               />
            </div>
            <div className='p-5'>
                <button type='submit' className='text-black font-semibold px-10 py-2 bg-white'>
                    Submit
                </button>
            </div>
        </form>
    </div>
    );
};

export default UpdateContent;
