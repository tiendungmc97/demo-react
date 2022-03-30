import React from 'react';
import "./style.scss";
import {useForm} from 'react-hook-form'
export default function Example () {
    const {register,handleSubmit,formState: {errors}} = useForm()
    const onSubmit = (data) => {
      console.log(data)
    }
    return ( 
      <div className="container" >
        <h1 className="container__title">Form</h1>
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <div className="form__group">
              <label className="form__lable" htmlFor='name'>Name</label>
              <input className= 'form__control ' placeholder = 'Enter a name' type='text' id='name' 
                {...register('name',{
                  required: true,
                })}
              />
              {errors?.name?.type ==='required' && (<span className="form__text">Please enter a name</span>) }    
            </div>
            <div className="form__group">
              <label className="form__lable" htmlFor='name'>Password</label>
              <input className= 'form__control' placeholder = 'Enter a password' type='email' id='email'
                   {...register("email",{
                     required: true,
                     pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                   })}      
              />
              {errors?.email?.type ==='required' && (<span className="form__text">Email is required</span>) }    
              {errors?.email?.type ==='pattern' && (<span className="form__text">Invalid email address</span>) }    
            </div>
            <div className="form__group">
              <label className="form__lable" htmlFor='name'>Password</label>
              <input className= 'form__control' placeholder = 'Enter a password' type='password' id='password'
                   {...register("password",{
                     required: true,
                     minLength:6
                   })}
              />
              {errors?.password?.type ==='required' && (<span className="form__text">Please enter a filed</span>) }    
              {errors?.password?.type ==='minLength' && (<span className="form__text">Please enter at least 6 characters</span>) }
            </div>
            <input type='submit' value='Submit' />
        </form>
      </div>
    );
  }
