import React, { use, useState } from 'react';
import { AuthContext } from '../../provider/authContext';
import { FaEdit, FaSave, FaTimes } from 'react-icons/fa';
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
            Swal.fire({
                icon: 'info',
                title: 'No changes detected',
                text: 'Update at least one field to save changes.',
                confirmButtonColor: '#67AB4F'
            });
            return;
        }

        setLoading(true);

        try {
            const updatedData = {
                ...formData,
                photoURL: formData?.photoURL || userInfo?.photoURL
            };

            const res = await fetch(
                `https://rent-wheels-server-jet.vercel.app/role/${userInfo.email}`,
                {
                    method: 'PATCH',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(updatedData),
                }
            );

            await res.json();

            setUserInfo({ ...userInfo, ...updatedData });
            setEdit(false);

            Swal.fire({
                icon: 'success',
                title: 'Profile updated',
                text: `${changes.length} field(s) updated successfully`,
                confirmButtonColor: '#67AB4F'
            });
        } catch (error) {
            console.log(error);
            Swal.fire({
                icon: 'error',
                title: 'Update failed',
                text: 'Something went wrong!',
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-base-200 flex items-center justify-center px-4">
            <div className="bg-base-100 rounded-2xl shadow-xl max-w-3xl w-full p-8">

                {/* HEADER */}
                <div className="flex flex-col md:flex-row items-center gap-6 border-b pb-6">
                    <div className="avatar">
                        <div className="w-32 rounded-full ring ring-primary ring-offset-4">
                            <img src={userInfo?.photoURL} alt="Profile" />
                        </div>
                    </div>

                    <div className="text-center md:text-left">
                        <h2 className="text-2xl font-bold">{userInfo?.name}</h2>
                        <p className="text-sm text-gray-500">{userInfo?.email}</p>
                    </div>
                </div>

                {/* BODY */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">

                    {[
                        { label: 'Full Name', name: 'name' },
                        { label: 'Location', name: 'location' },
                        { label: 'Phone Number', name: 'phoneNumber' },
                        { label: 'Photo URL', name: 'photoURL' },
                    ].map(({ label, name }) => (
                        <div key={name}>
                            <label className="text-sm font-medium text-gray-600">
                                {label}
                            </label>

                            {!edit ? (
                                <div className="mt-1 p-3 rounded-lg bg-base-200 text-sm">
                                    {userInfo?.name || 'Not provided'}
                                </div>
                            ) : (
                                <input
                                    type="text"
                                    name={name}
                                    value={formData?.name}
                                    onChange={handleChange}
                                    className="input input-bordered w-full mt-1"
                                />
                            )}
                        </div>
                    ))}
                </div>

                <div className="flex justify-end gap-3 mt-8">
                    {!edit ? (
                        <button
                            onClick={() => setEdit(true)}
                            className="btn btn-primary gap-2"
                        >
                            <FaEdit /> Edit Profile
                        </button>
                    ) : (
                        <>

                            <button
                                onClick={handleUpdate}
                                className="btn btn-primary text-white gap-2 hover:btn-secondary"
                                disabled={loading}
                            >
                                {loading ? (
                                    <span className="loading loading-spinner"></span>
                                ) : (
                                    <FaSave />
                                )}
                                Save
                            </button>

                            <button
                                onClick={handleCancel}
                                className="btn btn-outline btn-error gap-2"
                                disabled={loading}
                            >
                                <FaTimes /> Cancel
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Profile;
