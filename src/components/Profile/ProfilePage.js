import React, { useState } from 'react';
import ProfileInfo from './ProfileInfo';
import EditProfileForm from './EditProfileForm';
import ChangePasswordForm from './ChangePasswordForm';

const ProfilePage = () => {
    // Mock user profile
    const mockUser = {
        name: 'John Doe',
        email: 'john.doe@example.com',
        avatar: '/default-avatar.png', // Default avatar
        phone: '+123456789',
        bio: 'This is a mock bio. Edit me!',
    };

    const [user, setUser] = useState(mockUser); // Initialize state with mock data
    const [isEditing, setIsEditing] = useState(false);
    const [isChangingPassword, setIsChangingPassword] = useState(false);

    const handleEditProfile = () => setIsEditing(true);
    const handleChangePassword = () => setIsChangingPassword(true);

    const handleSaveProfile = (updatedProfile) => {
        console.log('Saving updated profile:', updatedProfile);
        setUser(updatedProfile); // Update local state with new profile
        setIsEditing(false);
    };

    const handleSavePassword = (passwordData) => {
        console.log('Saving new password:', passwordData); // Simulate saving password
        setIsChangingPassword(false);
    };

    const handleCancel = () => {
        setIsEditing(false);
        setIsChangingPassword(false);
    };

    return (
        <div className="profile-page p-6 bg-gray-100 min-h-screen">
            {!isEditing && !isChangingPassword && (
                <ProfileInfo user={user} onSave={handleSaveProfile} />
            )}

            {isEditing && (
                <EditProfileForm
                    user={user}
                    onSave={handleSaveProfile}
                    onCancel={handleCancel}
                />
            )}

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
