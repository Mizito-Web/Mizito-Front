import React, { useState } from 'react';
import ProfileInfo from './ProfileInfo'; 
import EditProfileForm from './EditProfileForm';
import ChangePasswordForm from './ChangePasswordForm';

const ProfilePage = ({ user }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [isChangingPassword, setIsChangingPassword] = useState(false);

    const handleEditProfile = () => setIsEditing(true);
    const handleChangePassword = () => setIsChangingPassword(true);

    const handleSaveProfile = (updatedProfile) => {
        // Call API to save updated profile
        console.log('Saving updated profile:', updatedProfile);
        setIsEditing(false);
    };

    const handleSavePassword = (passwordData) => {
        // Call API to change the password
        console.log('Saving new password:', passwordData);
        setIsChangingPassword(false);
    };

    const handleCancel = () => {
        setIsEditing(false);
        setIsChangingPassword(false);
    };

    return (
        <div className="profile-page p-6">
            {/* Conditional rendering: show ProfileInfo when not editing or changing password */}
            {!isEditing && !isChangingPassword && (
                <ProfileInfo user={user} onEdit={handleEditProfile} />
            )}
            
            {/* Show EditProfileForm when editing */}
            {isEditing && (
                <EditProfileForm
                    user={user}
                    onSave={handleSaveProfile}
                    onCancel={handleCancel}
                />
            )}

            {/* Show ChangePasswordForm when changing password */}
            {isChangingPassword && (
                <ChangePasswordForm
                    onSave={handleSavePassword}
                    onCancel={handleCancel}
                />
            )}
        </div>
    );
};

export default ProfilePage;
