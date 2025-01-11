import React, { useState } from 'react';
import ProfileInfo from '../components/Profile/ProfileInfo';
import EditProfileForm from '../components/Profile/EditProfileForm';
import ChangePasswordForm from '../components/Profile/ChangePasswordForm';

const Profile = ({ user }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [isChangingPassword, setIsChangingPassword] = useState(false);

    const handleEditProfile = () => setIsEditing(true);
    const handleChangePassword = () => setIsChangingPassword(true);

    const handleSaveProfile = (updatedProfile) => {
        // Save the updated profile data (e.g., API call)
        console.log('Updated profile:', updatedProfile);
        setIsEditing(false);
    };

    const handleSavePassword = (passwordData) => {
        // Save the new password (e.g., API call)
        console.log('Updated password:', passwordData);
        setIsChangingPassword(false);
    };

    const handleCancel = () => {
        setIsEditing(false);
        setIsChangingPassword(false);
    };

    return (
        <div className="profile p-6">
            {!isEditing && !isChangingPassword && (
                <ProfileInfo user={user} onEdit={handleEditProfile} />
            )}
            {isEditing && (
                <EditProfileForm
                    user={user}
                    onSave={handleSaveProfile}
                    onCancel={handleCancel}
                />
            )}
            {isChangingPassword && (
                <ChangePasswordForm onSave={handleSavePassword} onCancel={handleCancel} />
            )}
        </div>
    );
};

export default Profile;
