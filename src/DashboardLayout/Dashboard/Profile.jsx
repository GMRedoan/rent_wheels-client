import React, { use, useState } from 'react';
import { AuthContext } from '../../provider/authContext';
import { FaEdit, FaSave, FaTimes, FaMapMarkerAlt, FaPhone, FaImage, FaUser } from 'react-icons/fa';
import Swal from 'sweetalert2';

const Profile = () => {
    const { userInfo, setUserInfo } = use(AuthContext);

    const [edit, setEdit] = useState(false);
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        name: userInfo?.name || '',
        photoURL: userInfo?.photoURL || '',
        location: userInfo?.location || '',
        phoneNumber: userInfo?.phoneNumber || ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleCancel = () => {
        setFormData({
            name: userInfo.name,
            photoURL: userInfo.photoURL,
            location: userInfo.location || '',
            phoneNumber: userInfo.phoneNumber || ''
        });
        setEdit(false);
    };

    const handleUpdate = async () => {
        const changes = Object.keys(formData).filter(
            key => formData[key] !== (userInfo[key] || '')
        );

        if (changes.length === 0) {
            return Swal.fire({
                icon: 'info',
                title: 'No changes detected',
                confirmButtonColor: '#67AB4F'
            });
        }

        setLoading(true);

        try {
            const updatedData = {
                ...formData,
                photoURL: formData.photoURL || userInfo.photoURL
            };

            await fetch(
                `https://rent-wheels-server-jet.vercel.app/role/${userInfo.email}`,
                {
                    method: 'PATCH',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(updatedData),
                }
            );

            setUserInfo({ ...userInfo, ...updatedData });
            setEdit(false);

            Swal.fire({
                icon: 'success',
                title: 'Profile Updated',
                text: `${changes.length} field(s) updated`,
                confirmButtonColor: '#67AB4F'
            });
        } catch {
            Swal.fire({
                icon: 'error',
                title: 'Update Failed',
            });
        } finally {
            setLoading(false);
        }
    };

    const fields = [
        { label: 'Full Name', name: 'name', icon: <FaUser /> },
        { label: 'Location', name: 'location', icon: <FaMapMarkerAlt /> },
        { label: 'Phone Number', name: 'phoneNumber', icon: <FaPhone /> },
        { label: 'Photo URL', name: 'photoURL', icon: <FaImage /> },
    ];

    return (
        <div className="min-h-screen bg-base-200 flex items-center justify-center px-4">

            <div className="max-w-4xl w-full bg-base-100 rounded-3xl shadow-2xl overflow-hidden animate-fade-in">

                {/* HEADER */}
                <div className="relative bg-linear-to-r from-primary to-secondary p-10 text-white">

                    <div className="absolute -bottom-17 left-1/2 transform -translate-x-1/2">
                        <div className="w-32 h-32 rounded-full ring-4 ring-white shadow-xl overflow-hidden">
                            <img src={userInfo?.photoURL} alt="Profile" />
                        </div>
                    </div>

                    <div className="text-center mt-6">
                        <h2 className="text-3xl font-bold">{userInfo?.name}</h2>
                        <p className="text-sm opacity-70">{userInfo?.email}</p>
                    </div>
                </div>

                {/* BODY */}
                <div className="py-20 px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        {fields.map(({ label, name, icon }) => (
                            <div
                                key={name}
                                className="transition-transform duration-300 hover:-translate-y-1"
                            >
                                <label className="text-sm font-semibold flex items-center gap-2 text-gray-600">
                                    {icon} {label}
                                </label>

                                {!edit ? (
                                    <div className="mt-2 p-3 rounded-xl bg-base-200 text-sm shadow-inner">
                                        {userInfo[name] || 'Not provided'}
                                    </div>
                                ) : (
                                    <input
                                        name={name}
                                        value={formData[name]}
                                        onChange={handleChange}
                                        className="input input-bordered w-full mt-2 focus:ring-2 focus:ring-primary transition"
                                    />
                                )}
                            </div>
                        ))}
                    </div>

                    {/* ACTIONS */}
                    <div className="flex justify-center gap-4 mt-10">
                        {!edit ? (
                            <button
                                onClick={() => setEdit(true)}
                                className="btn btn-primary text-white gap-2 px-8 hover:scale-105 transition"
                            >
                                <FaEdit /> Edit Profile
                            </button>
                        ) : (
                            <>
                                <button
                                    onClick={handleUpdate}
                                    disabled={loading}
                                    className="btn btn-primary text-white gap-2 px-10 hover:scale-105 transition"
                                >
                                    {loading ? (
                                        <span className="loading loading-spinner"></span>
                                    ) : (
                                        <>
                                            <FaSave /> Save Changes
                                        </>
                                    )}
                                </button>

                                <button
                                    onClick={handleCancel}
                                    disabled={loading}
                                    className="btn btn-outline btn-error gap-2 px-8 hover:scale-105 transition"
                                >
                                    <FaTimes /> Cancel
                                </button>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
