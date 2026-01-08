import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../provider/authContext';
import Swal from 'sweetalert2';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';

const Registration = () => {
    const {
        createUser,
        googleLogin,
        updateUserProfile,
        setUser
    } = use(AuthContext)

    const navigate = useNavigate()
    const notify = (msg) => toast.error(msg);
    const [error, setError] = useState('')
    const [showPass, setShowPass] = useState(false)
    // registration
    const handleRegister = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const photoURL = form.photoURL.value
        const phoneNumber = form.phone.value
        const location = form.location.value
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
            .then((result) => {
                const newUser = {
                    name,
                    email,
                    photoURL,
                    phoneNumber,
                    location,
                    role: 'user'
                }
                // create user in the database
                fetch('https://rent-wheels-server-jet.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(newUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log('data after user save', data)
                    })


                updateUserProfile({
                    displayName: name,
                    photoURL: photoURL
                })
                Swal.fire({
                    title: "Registration Successful. Welcome to Rent-Wheels 🎊",
                    icon: "success",
                    confirmButtonColor: "#67AB4F"
                });
                const user = result.user
                setUser(user)
                form.reset()
                navigate('/')
            })
            .catch(() => {
                setError("Invalid Email")
                notify("Invalid Email")
            })
    }
    // google login
    const handleGoogle = () => {
        googleLogin()
            .then((result) => {
                const newUser = {
                    name: result.user.displayName,
                    email: result.user.email,
                    photoURL: result.user.photoURL,
                    location,
                    role: 'user'
                }

                // save user info in the database by google login
                fetch('https://rent-wheels-server-jet.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(newUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log('data after user save', data)
                    })

                Swal.fire({
                    title: "Registration Successful. Welcome to Rent Wheels 🎊",
                    icon: "success",
                    confirmButtonColor: "#67AB4F"
                });
                navigate('/')
            })
            .catch(error => {
                notify(error)
            })
    }

    return (
        <div className="hero bg-base-200">
            <title>Registration</title>
            <div className="hero-content flex-col">
                <div className="text-center lg:text-center">
                    <h1 className="text-5xl font-bold md:pt-18">Create Your <span className='text-primary'>Account</span> Now !</h1>
                    <p className="py-6 text-accent">
                        Register now and begin your Journey.
                    </p>
                </div>
                <div className="card bg-base-100 shrink-0 shadow-2xl max-w-2xl  w-full">
                    <div className="card-body">
                        <form onSubmit={handleRegister}>
                            <fieldset className="grid grid-cols-1 md:grid-cols-2 gap-6">

                                {/* LEFT COLUMN */}
                                <div className="space-y-4">
                                    {/* Name */}
                                    <div>
                                        <label className="label text-base-300">Name</label>
                                        <input
                                            type="text"
                                            className="input input-bordered w-full"
                                            name="name"
                                            required
                                            placeholder="Your Name"
                                        />
                                    </div>

                                    {/* Photo */}
                                    <div>
                                        <label className="label text-base-300">Photo URL</label>
                                        <input
                                            type="text"
                                            className="input input-bordered w-full"
                                            name="photoURL"
                                            required
                                            placeholder="Photo URL"
                                        />
                                    </div>

                                    {/* Phone */}
                                    <div>
                                        <label className="label text-base-300">Phone Number</label>
                                        <input
                                            type="number"
                                            className="input input-bordered w-full"
                                            name="phone"
                                            required
                                            placeholder="Phone number"
                                        />
                                    </div>
                                </div>

                                {/* RIGHT COLUMN */}
                                <div className="space-y-4">
                                    {/* Location */}
                                    <div>
                                        <label className="label text-base-300">Location</label>
                                        <input
                                            type="text"
                                            className="input input-bordered w-full"
                                            name="location"
                                            required
                                            placeholder="Your location"
                                        />
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label className="label text-base-300">Email</label>
                                        <input
                                            type="email"
                                            className="input input-bordered w-full"
                                            name="email"
                                            required
                                            placeholder="Email"
                                        />
                                    </div>

                                    {/* Password */}
                                    <div>
                                        <label className="label text-base-300">Password</label>
                                        <div className="relative">
                                            <input
                                                type={showPass ? "text" : "password"}
                                                name="password"
                                                required
                                                className="input input-bordered w-full"
                                                placeholder="Password"
                                            />
                                            <span
                                                onClick={() => setShowPass(!showPass)}
                                                className="absolute right-4 top-3 cursor-pointer"
                                            >
                                                {showPass ? <FaEyeSlash /> : <FaEye />}
                                            </span>
                                            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
                                         </div>
                                    </div>
                                </div>

                            </fieldset>

                            {/* BUTTONS SECTION */}
                            <div className="mt-8 space-y-3">
                                <button
                                    type="submit"
                                    className="btn btn-primary w-full text-white"
                                >
                                    Register Now
                                </button>

                                <button
                                    type="button"
                                    onClick={handleGoogle}
                                    className="btn btn-outline w-full flex items-center gap-2"
                                >
                                    <svg
                                        aria-label="Google logo"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 512 512"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341" />
                                        <path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57" />
                                        <path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73" />
                                        <path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55" />
                                    </svg>
                                    Continue with Google
                                </button>

                                <p className="text-center text-sm">
                                    Already have an account?{" "}
                                    <Link to="/login" className="text-primary font-semibold hover:underline">
                                        Login Now
                                    </Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Registration;