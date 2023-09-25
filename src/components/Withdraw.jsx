import React from 'react'
import { useForm } from 'react-hook-form'
import { ToastContainer, toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

export const Withdraw = (props) => {
    const { register, handleSubmit, formState: { errors }, } = useForm();
    // console.log(props)

    return (
        <div className='withdraw'>
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
            <h1>Withdraw</h1>
            <form onSubmit={handleSubmit(props.withdraw)}>
                <div>
                    <input type="text" name="id" id="id" {...register("id", { required: true })} placeholder='Enter Id To Withdraw ' />
                </div>
                <div>
                    <input type="amount" name="amount" id="amount" {...register("amount", { required: true })} placeholder='Enter Amount To Withdraw ' />
                </div>
                <div>
                    <input type="submit" value="Submit" />
                </div>
            </form>
        </div>
    )
}
