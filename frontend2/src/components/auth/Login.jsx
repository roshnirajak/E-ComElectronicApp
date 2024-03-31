// import React from 'react';
import { useForm } from 'react-hook-form';

function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data);
        // Here you can implement your login logic
    };

    return (
        <div className="bg-slate-100 min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:bg-slate-300 lg:px-8">
            <div className="sm:bg-gray-100 sm:p-10 max-w-md w-full space-y-8 rounded-md">
                <div>
                <h2 className="mb-4 text-5xl text-center font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-5xl text-gray">RAJAK</h2>
                    <h2 className="mt-6 text-center text-2xl text-gray-900">Log in to your account</h2>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
                    <div className="rounded-md shadow-sm space-y-px">
                        <div className='pb-6'>
                            <label htmlFor="email-address" className="sr-only">Email address</label>
                            <input id="email-address" name="email" type="email" autoComplete="email" className={`appearance-none rounded-none relative block w-full px-3 py-3 border ${errors.email ? 'border-red-500' : 'border-gray-400'} placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`} placeholder="Email address" {...register("email", { required: "Email is required", pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: "Invalid email address" } })} />
                            {errors.email && <p className="mt-1 text-red-500 text-xs">{errors.email.message}</p>}
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">Password</label>
                            <input id="password" name="password" type="password" autoComplete="current-password" className={`appearance-none rounded-none relative block w-full px-3 py-3 border ${errors.password ? 'border-red-500' : 'border-gray-400'} placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`} placeholder="Password" {...register("password", {
                                required: "Password is required",
                                minLength: { value: 8, message: "Password must be at least 8 characters long" },
                                maxLength: { value: 14, message: "Password must be at most 14 characters long" },
                                pattern: { value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,14}$/, message: "Password must contain at least one number and one character" }
                            })} />
                            {errors.password && <p className="mt-1 text-red-500 text-xs">{errors.password.message}</p>}
                        </div>
                    </div>

                    <div className='pb-5'>
                        <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Sign in
                        </button>
                        <div className='text-center'>
                            <br />
                            <p>Forgot Password</p>
                            <br />
                            <p> Doesn&rsquo;t have an account? <br /> <span>Create one</span></p>
                        </div>

                    </div>

                </form>
            </div>
        </div>
    );
}

export default Login;
