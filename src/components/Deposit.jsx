import React from 'react'
import { useForm } from 'react-hook-form'
import { ToastContainer, toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

export const Deposit = (props) => {
    const { register, handleSubmit, formState: { errors }, } = useForm();


    return (
        <div className='deposit'>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
            <h1>Deposit</h1>
            <form onSubmit={handleSubmit(props.deposit)}>
                <div>
                    <input type="text" name="id" id="id" {...register("id", { required: true })} placeholder='Enter Id To Deposit ' />
                </div>
                <div>
                    <input type="amount" name="amount" id="amount" {...register("amount", { required: true })} placeholder='Enter Amount To Deposit' />
                </div>
                <div>
                    <input type="submit" value="Submit" />
                </div>
            </form>
        </div>
    )
}
