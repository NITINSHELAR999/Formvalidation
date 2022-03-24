import React from 'react';
import { useForm } from "react-hook-form";

export default function Formvali() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const Submit = (submission) => {
    console.log(submission);
    alert(JSON.stringify(submission));
    reset();
  }
  return (<>
    <div className="container">
      <form onSubmit={handleSubmit(Submit)}>
        <div>
          <h1>Submit Comment</h1>
         <h5> Rating </h5>
          <input type="number"  placeholder=" Rating"name='rating'maxlength="5" minlength="1"style={{ width: '70%' }} {...register("rating", { required: { value: true, message: 'give a rating' },
          
           })} />
          {errors.rating && (<span>{errors.rating.message}</span>)}

        </div>
        <div>
          
          <h5>  Your Name </h5>
          
          <input type="text" placeholder="Enter Your Name" name='firstName' style={{ width: '70%' }}{...register("firstName", {
            required: { value: true, message: 'The firstname field is required' },
            minLength: { value: 4, message: ' username must be at least 4 characters' },
            maxLength: { value: 15, message: 'Username must not exceed 15 characters' }
          })} />

          {errors.firstName && (<span>{errors.firstName.message}</span>)}
        </div>

        <div>        
            <h5>comment</h5>
          
          <textarea name='textarea' placeholder="please Enter A Comment Here" rows="7" cols="40" {...register("comment", {
            required: { value: true, message: ' comment is required' },
            maxLength: { value: 100, message: 'length should be less than 100' }
          })} />
          {errors.comment && (<span>{errors.comment.message}</span>)}

          <div>
            <button className="btn" type='Submit' >submit</button>

          </div>
        </div>
      </form>
    </div>
  </>
  )
}
