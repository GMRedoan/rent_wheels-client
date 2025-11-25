import React, { use, useState } from 'react';
import { Link, useNavigate  } from 'react-router';
// import { AuthContext } from '../provider/authContext';
import Swal from 'sweetalert2';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';

const Registration = () => {
     const { 
        createUser, 
        setUser, 
        user, 
        googleLogin, 
        updateUserProfile
     } = use(AuthContext)

    const navigate = useNavigate()
    const notify = (msg) => toast.error(msg);
    const [error, setError] = useState('')
    const [showPass, setShowPass] = useState(false)
    const handleRegister = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const photoURL = form.photoURL.value
        const email = form.email.value
        const password = form.password.value
        const passwordValidation = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        setError('')

        if (!passwordValidation.test(password)) {
            setError("Password should be at least 6 character with Small and Capital letters.")
            notify("Password should be at least 6 character with Small and Capital letters.")
            return
        }

        createUser(email, password)
            .then(result => {
                updateUserProfile({
                    displayName: name,
                    photoURL: photoURL
                })
                Swal.fire({
                    title: "Registration Successful. Welcome to Toy Topia 🎊",
                    icon: "success",
                    draggable: true
                });
                const user = result.user
                setUser(user)
                form.reset()
                navigate("/")
            })
            .catch(() => {
                setError("Invalid Email")
                notify("Invalid Email")
            })
    }
    const handleGoogle = () => {
        googleLogin()
            .then(() => {
                Swal.fire({
                    title: "LogIn Successful. Welcome to Toy Topia 🎊",
                    icon: "success",
                    draggable: true
                });
            })
            .catch(error => {
                setError(error)
                notify(error)
            })
    }

    return (
        <div className="hero bg-base-200">
                 <title>Registration</title>
            <div className="hero-content flex-col">
                <div className="text-center lg:text-center">
                    <h1 className="text-5xl font-bold">Register Now !</h1>
                    <p className="py-6 text-accent">
                        Register now and begin your journey.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl shadow-blue-500 border border-blue-200">
                    <div className="card-body">
                        <form onSubmit={handleRegister}>
                            <fieldset className="fieldset">
                                {/* name */}
                                <label>Name</label>
                                <input type="text" className="input"
                                    name='name'
                                    required
                                    placeholder="Name" />

                                {/* photo */}
                                <label>Photo URL</label>
                                <input type="text" className="input"
                                required
                                name='photoURL'
                                placeholder="Photo URL" />

                                {/* email */}
                                <label>Email</label>
                                <input type="email" className="input"
                                    name='email'
                                    required
                                    placeholder="Email" />

                                {/* password */}
                                <label>Password</label>
                                <div className='relative'>
                                    <input type={showPass ? 'text' : 'password'}
                                        name='password'
                                        required
                                        className="input" placeholder="Password" />
                                    <p
                                        onClick={() => setShowPass(!showPass)}
                                        className='absolute top-3.5 right-5 cursor-pointer z-10'>{showPass ? <FaEyeSlash /> : <FaEye />}</p>
                                </div>
                                {
                                    error && <p className='text-red-500'>{error}</p>
                                }
                                <button 
                                type='submit' 
                                className="btn bg-linear-to-r from-blue-500 to-purple-600 mt-4 text-white 
                                font-semibold">Register Now</button>
                                <button
                                    type='button'
                                    onClick={handleGoogle} className="btn bg-white text-black border-[#e5e5e5]">
                                    <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                                    Login with Google
                                </button>
                            </fieldset>
                            <p className='pt-2'>Already have an Account ! <Link to='/login'><span className='text-blue-500 font-semibold hover:underline'>Login Now</span></Link></p>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Registration;