// src/services/activityService.js
import axios from 'axios';

const API_URL = 'https://your-api.com/api/activities'; // Replace with your API base URL

// Fetch all activities
export const getActivities = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data; // Assuming the API returns a list of activities
  } catch (error) {
    console.error('Error fetching activities:', error);
    throw error;
  }
};

// Fetch a single activity by ID
export const getActivityById = async (activityId) => {
  try {
    const response = await axios.get(`${API_URL}/${activityId}`);
    return response.data; // Assuming the API returns the activity details
  } catch (error) {
    console.error('Error fetching activity:', error);
    throw error;
  }
};

// Create a new activity
export const createActivity = async (activityData) => {
  try {
    const response = await axios.post(API_URL, activityData);
    return response.data; // Assuming the API returns the newly created activity
  } catch (error) {
    console.error('Error creating activity:', error);
    throw error;
  }
};

// Update an existing activity
export const updateActivity = async (activityId, activityData) => {
  try {
    const response = await axios.put(`${API_URL}/${activityId}`, activityData);
    return response.data; // Assuming the API returns the updated activity
  } catch (error) {
    console.error('Error updating activity:', error);
    throw error;
  }
};

// Delete an activity
export const deleteActivity = async (activityId) => {
  try {
    const response = await axios.delete(`${API_URL}/${activityId}`);
    return response.data; // Assuming the API returns a success message
  } catch (error) {
    console.error('Error deleting activity:', error);
    throw error;
  }
};
