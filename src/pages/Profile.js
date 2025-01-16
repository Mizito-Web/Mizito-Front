import React, { useState, useEffect } from 'react';
import ProfileInfo from '../components/Profile/ProfileInfo';
import EditProfileForm from '../components/Profile/EditProfileForm';
import ChangePasswordForm from '../components/Profile/ChangePasswordForm';
import { getUserProfile, updateUserProfile, changeUserPassword } from '../services/apiClient';

const Profile = () => {
    const [user, setUser] = useState(null); // State for user profile
    const [isEditing, setIsEditing] = useState(false);
    const [isChangingPassword, setIsChangingPassword] = useState(false);
    const [loading, setLoading] = useState(true); // Loading state
    const [error, setError] = useState(''); // Error state

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const profile = await getUserProfile(); // Replace with actual API call
                setUser(profile);
            } catch (err) {
                setError('Failed to load profile. Please try again later.');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchProfile();
    }, []);

    const handleEditProfile = () => setIsEditing(true);
    const handleChangePassword = () => setIsChangingPassword(true);

    const handleSaveProfile = async (updatedProfile) => {
        try {
            setLoading(true);
            const savedProfile = await updateUserProfile(updatedProfile); // Replace with actual API call
            setUser(savedProfile); // Update local state with saved profile
        } catch (err) {
            setError('Failed to save profile. Please try again.');
            console.error(err);
        } finally {
            setIsEditing(false);
            setLoading(false);
        }
    };

    const handleSavePassword = async (passwordData) => {
        try {
            setLoading(true);
            await changeUserPassword(passwordData); // Replace with actual API call
            alert('Password changed successfully!');
        } catch (err) {
            setError('Failed to change password. Please try again.');
            console.error(err);
        } finally {
            setIsChangingPassword(false);
            setLoading(false);
        }
    };

    const handleCancel = () => {
        setIsEditing(false);
        setIsChangingPassword(false);
    };

    if (loading) {
        return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
    }

    if (error) {
        return <div className="flex items-center justify-center min-h-screen text-red-500">{error}</div>;
    }

    return (
        <div className="profile-page p-6 bg-gray-100 min-h-screen">
            {!isEditing && !isChangingPassword && user && (
                <ProfileInfo user={user} onEdit={handleEditProfile} onChangePassword={handleChangePassword} />
            )}

            {isEditing && user && (
                <EditProfileForm user={user} onSave={handleSaveProfile} onCancel={handleCancel} />
            )}

            {isChangingPassword && (
                <ChangePasswordForm onSave={handleSavePassword} onCancel={handleCancel} />
            )}
        </div>
    );
};

export default Profile;
