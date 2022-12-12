import React from 'react';
import { useForm } from 'react-hook-form';
import './AddContent.css'

const AddContent = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        const img = data.photo[0]
        const formData = new FormData()
        formData.append('image', img)
        const imgBBAPIKey = 'a35dd26dcd6217863e04026e8ac764ee'
        const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imgBBAPIKey}`
        fetch(url , {method:'POST',body:formData})
        .then(response => response.json())
        .then(result => {
            const img = result.data.url
            const content = {
            "name":data.firstname + " " + data.lastname , 
            "img": img , 
            "details":{
              "title":data.title ,
              "info":data.info
              }
            }
            fetch('http://localhost:5000/content',{
            method: 'POST',
            body: JSON.stringify(content),
            headers: {
             'Content-type': 'application/json; charset=UTF-8',
           },
           })
          .then((response) => response.json())
          .then(result => console.log(result));
         })
    };

    return (
        <div className='bg-black w-[1020px] min-h-[550px]  flex justify-center items-center'>
            <form onSubmit={handleSubmit(onSubmit)} className='bg-white/20 w-3/4  min-h-fit rounded p-5'>
                <h2 className='text-2xl text-white font-semibold text-center'>Add Content</h2>
                <div className='flex space-x-5 px-5 py-2'>
                    <div className='flex flex-col space-y-2 w-2/4'>
                        <label htmlFor="firstName" className='text-white'> First Name</label>
                        <input className='bg-transparent border-2 border-white px-5 py-1 outline-none text-white rounded' placeholder='first name' type="text" {...register('firstname', {required:'name is required'})} />
                    </div>
                    <div className='flex flex-col space-y-2 w-2/4'>
                        <label htmlFor="lastName" className='text-white'> Last Name</label>
                        <input className='bg-transparent border-2 border-white px-5 py-1 outline-none text-white rounded' placeholder='last name' type="text" {...register('lastname', {required:true})} />
                    </div>
                </div>
                <div className='flex space-x-5 px-5 py-2'>
                    <div className='flex flex-col space-y-2 w-2/4'>
                        <label htmlFor="email" className='text-white'>Email</label>
                        <input className='bg-transparent border-2 border-white px-5 py-1 outline-none text-white rounded' placeholder='email' type="text" {...register('email', {required:true})} />
                    </div>
                    <div className='flex flex-col space-y-2 w-2/4'>
                        <label htmlFor="title" className='text-white'>Title</label>
                        <input className='bg-transparent border-2 border-white px-5 py-1 outline-none text-white rounded' placeholder='title' type="text" {...register('title', {required:true})} />
                    </div>
                </div>
                <div className='px-5 py-2 space-y-2 '>
                    <label htmlFor="details" className='text-white'>Details</label>
                   <textarea name="text" id="" {...register('info', {required:true})} placeholder='information' cols="30" rows="2" className='w-full bg-transparent border-2 border-white px-5 py-1 outline-none text-white rounded'></textarea>
                </div>
                <div className='px-5 py-2 space-y-2 flex flex-col'>
                    <label htmlFor="photo" className='text-white'>Photo</label>
                   <input
                    {...register("photo", {required: "please enter a photo"})}
                    type='file'
                    placeholder="photo"
                    className='text-white p-5 border-2 border-white rounded'
                   />
                </div>
                <div className='p-5'>
                    <button className='text-black font-semibold px-10 py-2 bg-white '>Submit</button>
                </div>
            </form>
        </div>
    );
};

export default AddContent;