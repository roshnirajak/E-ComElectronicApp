import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FiEye, FiEyeOff } from 'react-icons/fi';


function Register() {
    const { register, handleSubmit, formState: { errors }, watch } = useForm();
    const [showPassword, setShowPassword] = useState(false);
    const onSubmit = data => {
        console.log(data);
        // Here you can implement your login logic
    };
    // const password = watch('password'); // Get the value of the Password field
    return (
        <div className="bg-slate-100 min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:bg-slate-300 lg:px-8">
            <div className="sm:bg-gray-100 sm:p-10 max-w-md w-full space-y-8 rounded-md">
                <div>
                    <h2 className="mb-4 text-5xl text-center font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-5xl text-gray">RAJAK</h2>
                    <h2 className="mt-6 text-center text-2xl text-gray-900">Register your account</h2>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
                    <div className="rounded-md shadow-sm space-y-px">
                        <div className="pb-6">
                            <label htmlFor="full-name" className="sr-only">Full Name</label>
                            <input
                                id="full-name"
                                name="full-name"
                                type="text"
                                autoComplete="name"
                                className={`appearance-none rounded-none relative block w-full px-3 py-3 border ${errors.fullName ? 'border-red-500' : 'border-gray-300'} placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
                                placeholder="Full Name"
                                {...register("fullName", { required: "Full Name is required" })}
                            />
                            {errors.fullName && <p className="mt-1 text-red-500 text-xs">{errors.fullName.message}</p>}
                        </div>
                        <div className='pb-6'>
                            <label htmlFor="email-address" className="sr-only">Email address</label>
                            <input id="email-address" name="email" type="email" autoComplete="email" className={`appearance-none rounded-none relative block w-full px-3 py-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'} placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`} placeholder="Email address" {...register("email", { required: "Email is required", pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: "Invalid email address" } })} />
                            {errors.email && <p className="mt-1 text-red-500 text-xs">{errors.email.message}</p>}
                        </div>
                        <div className="pb-6">
                            <label htmlFor="contact-number" className="sr-only">Contact Number</label>
                            <input
                                id="contact-number"
                                name="contact-number"
                                type="tel"
                                autoComplete="tel"
                                className={`appearance-none rounded-none relative block w-full px-3 py-3 border ${errors.contactNumber ? 'border-red-500' : 'border-gray-300'} placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
                                placeholder="Contact Number"
                                {...register("contactNumber", {
                                    required: "Contact Number is required",
                                    pattern: { value: /^\d{10}$/, message: "Invalid Contact Number" }
                                })}
                            />
                            {errors.contactNumber && <p className="mt-1 text-red-500 text-xs">{errors.contactNumber.message}</p>}
                        </div>
                        <div className="pb-6 relative">
                            <label htmlFor="password" className="sr-only">Password</label>
                            <div className="flex">
                                <input
                                    id="password"
                                    name="password"
                                    type={showPassword ? "text" : "password"} // Use type "text" or "password" based on showPassword state
                                    autoComplete="new-password"
                                    className={`appearance-none rounded-none relative block w-full px-3 py-3 border ${errors.password ? 'border-red-500' : 'border-gray-300'} placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
                                    placeholder="Password"
                                    {...register("password", {
                                        required: "Password is required",
                                        minLength: { value: 8, message: "Password must be at least 8 characters long" },
                                        maxLength: { value: 14, message: "Password must be at most 14 characters long" },
                                        pattern: { value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,14}$/, message: "Password must contain at least one number and one character" }
                                    })}
                                />
                                {/* Toggle password visibility */}
                                <button
                                    type="button"
                                    className="flex items-center px-2 text-gray-500 focus:outline-none"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ?  <FiEye /> : <FiEyeOff />}
                                </button>
                            </div>
                            {errors.password && <p className="mt-1 text-red-500 text-xs">{errors.password.message}</p>}
                        </div>

                        <div className="pb-6">
                            <label htmlFor="confirm-password" className="sr-only">Confirm Password</label>
                            <input
                                id="confirm-password"
                                name="confirm-password"
                                type="password"
                                autoComplete="new-password"
                                className={`appearance-none rounded-none relative block w-full px-3 py-3 border ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'} placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
                                placeholder="Confirm Password"
                                {...register("confirmPassword", {
                                    required: "Confirm Password is required",
                                    validate: value => value === watch('password') || "Passwords do not match"
                                })}
                            />
                            {errors.confirmPassword && <p className="mt-1 text-red-500 text-xs">{errors.confirmPassword.message}</p>}
                        </div>
                    </div>

                    <div className='pb-5'>
                        <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Register
                        </button>
                        <div className='text-center'>
                            <br />
                            
                            <p> Already have an account? <br /> <span>Login</span></p>
                        </div>

                    </div>

                </form>
            </div>
        </div>
    );
}

export default Register;
