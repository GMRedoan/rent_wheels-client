import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../provider/authContext';
import { toast, ToastContainer } from 'react-toastify';
import Swal from 'sweetalert2';

const Login = () => {
    const { googleLogin, Login } = use(AuthContext)
    const [error, setError] = useState('')
    const notify = (msg) => toast.error(msg);
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state || "/";
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const fillAdmin = () => {
        setEmail('admin@gmail.com');
        setPassword('Admin12');
    };

    const fillUser = () => {
        setEmail('redoangazi.f415@gmail.com');
        setPassword('1234aS');
    };

    // log in
    const handleLogin = (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        Login(email, password)
            .then(() => {
                Swal.fire({
                    title: "LogIn Successful. Welcome to Rent Wheels 🎊",
                    icon: "success",
                    confirmButtonColor: "#67AB4F"
                });
                setEmail('');
                setPassword('');
                navigate(location.state || "/");
            })
            .catch(() => {
                setError("Invalid Email or Password");
                notify("Invalid Email or Password");
            })
            .finally(() => {
                setLoading(false);
            });
    };

    // google login
    const handleGoogle = () => {
        googleLogin()
            .then((result) => {
                const newUser = {
                    name: result.user.displayName,
                    email: result.user.email,
                    photoURL: result.user.photoURL
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
                    title: "LogIn Successful. Welcome to Rent Wheels 🎊",
                    icon: "success",
                    confirmButtonColor: "#67AB4F"
                });
                navigate(from, { replace: true });
            })
            .catch(error => {
                notify(error)
            })

    }

    return (
        <div className="hero bg-base-200 py-20">
            <title>Login</title>
            <div className="hero-content flex-col">
                <div className="text-center lg:text-center">
                    <h1 className="text-5xl font-bold">LogIn Now in <span className='text-primary'>RentWheels</span></h1>
                    <p className="py-6 text-accent">
                        Enter your account to continue your posting and rent.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handleLogin}>
                            <fieldset className="fieldset">

                                <label>Email</label>
                                <input
                                    type="email"
                                    className="input w-full"
                                    required
                                    name="email"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />

                                {/* password */}
                                <label>Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    className="input w-full"
                                    required
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                {
                                    error && <p className='text-red-500'>{error}</p>
                                }
                                <div className="flex gap-2 mt-2">
                                    <button
                                        type="button"
                                        onClick={fillAdmin}
                                        className="btn btn-outline btn-sm w-1/2"
                                    >
                                        Login as Admin
                                    </button>

                                    <button
                                        type="button"
                                        onClick={fillUser}
                                        className="btn btn-outline btn-sm w-40"
                                    >
                                        Login as User
                                    </button>
                                </div>

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className={`btn btn-primary mt-1 text-white font-semibold 
    hover:bg-secondary ${loading ? 'cursor-not-allowed opacity-70' : ''}`}
                                >
                                    {loading ? (
                                        <>
                                            <span className="loading loading-spinner loading-sm"></span>
                                            Logging in...
                                        </>
                                    ) : (
                                        'Login Now'
                                    )}
                                </button>

                                <button
                                    onClick={handleGoogle}
                                    type='button'
                                    className="btn bg-white text-black border-[#e5e5e5]">
                                    <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                                    Login with Google
                                </button>
                            </fieldset>
                            <p className='pt-2'>Don't have any Account ! <Link to='/registration'><span className='text-blue-500 font-semibold hover:underline'>Registration</span></Link></p>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Login;