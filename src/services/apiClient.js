import axios from 'axios';

const API_BASE_URL = 'https://backend-url.com/api'; // Replace with your backend URL

export const getUserProfile = async () => {
  const response = await axios.get(`${API_BASE_URL}/users/me`, {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  });
  return response.data;
};

export const getProjects = async () => {
  const response = await axios.get(`${API_BASE_URL}/projects`, {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  });
  return response.data;
};

export const getTasks = async () => {
  const response = await axios.get(`${API_BASE_URL}/tasks`, {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  });
  return response.data;
};

export const getDashboards = async () => {
  const response = await axios.get(`${API_BASE_URL}/dashboards`, {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  });
  return response.data;
};

// Login function
export const login = async (credentials) => {
  const response = await axios.post(`${API_BASE_URL}/auth/login`, credentials);
  
  // Save the token to local storage
  localStorage.setItem('token', response.data.token);

  return response.data;
};

// Logout function
export const logout = () => {
  localStorage.removeItem('token'); // Clear token on logout
};

// Get token function
export const getToken = () => {
  return localStorage.getItem('token');
};


// Register function
export const register = async (formData) => {
    const response = await axios.post(`${API_BASE_URL}/auth/register`, formData);
    return response.data;
  };

  export const createProject = async (projectData) => {
    const response = await axios.post(API_BASE_URL, projectData);
    return response.data;
  };


export const updateUserProfile = async (profileData) => {
    const response = await axios.put(`${API_BASE_URL}/me`, profileData);
    return response.data;
};

export const changeUserPassword = async (passwordData) => {
    const response = await axios.post(`${API_BASE_URL}/change-password`, passwordData);
    return response.data;
};


export const fetchGroups = async () => {
    const response = await axios.get(`${API_BASE_URL}/groups`);
    return response.data;
  };
  
  export const sendMessageToBackend = async (groupId, message) => {
    const response = await axios.post(`${API_BASE_URL}/groups/${groupId}/messages`, { message });
    return response.data;
  };
  
  export const addGroupToBackend = async (groupName) => {
    const response = await axios.post(`${API_BASE_URL}/groups`, { name: groupName });
    return response.data;
  };

  export const getMessages = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/messages`);
      return response.data;
    } catch (error) {
      console.error('Error fetching messages:', error);
      throw error;
    }
  };





  export const getNotifications = async () => {
    const response = await axios.get(`${API_BASE_URL}/notifications`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
    return response.data;
  };

  


  export const fetchTaskComments = async (taskId) => {
    const response = await axios.get(`${API_BASE_URL}/tasks/${taskId}/comments`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
    return response.data;
  };
  
  export const addTaskComment = async (taskId, comment) => {
    const response = await axios.post(
      `${API_BASE_URL}/tasks/${taskId}/comments`,
      { comment },
      { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
    );
    return response.data;
  };

  


  export const getSubtasks = async (taskId) => {
    const response = await axios.get(`${API_BASE_URL}/tasks/${taskId}/subtasks`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
    return response.data;
  };
  
  export const createSubtask = async (taskId, subtaskData) => {
    const response = await axios.post(
      `${API_BASE_URL}/tasks/${taskId}/subtasks`,
      subtaskData,
      { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
    );
    return response.data;
  };

  export const updateTaskStatus = async (taskId, newStatus) => {
    const response = await axios.patch(
      `${API_BASE_URL}/tasks/${taskId}/status`,
      { status: newStatus },
      { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
    );
    return response.data;
  };
  
  export const createTask = async (taskData) => {
    try {
      const response = await axios.post(
        `${API_BASE_URL}/tasks`,
        taskData,
        { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
      );
      return response.data;
    } catch (error) {
      console.error('Error creating task:', error);
      throw error;
    }
  };

  export const getProjectMembers = async (projectId) => {
    const response = await axios.get(`${API_BASE_URL}/projects/${projectId}/members`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
    return response.data;
  };
  
  export const addProjectMember = async (projectId, memberId) => {
    const response = await axios.post(
      `${API_BASE_URL}/projects/${projectId}/members`,
      { memberId },
      { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
    );
    return response.data;
  };

  


  export const getTaskAnalytics = async () => {
    const response = await axios.get(`${API_BASE_URL}/analytics/tasks`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
    return response.data;
  };
  
  export const getProjectAnalytics = async () => {
    const response = await axios.get(`${API_BASE_URL}/analytics/projects`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
    return response.data;
  };

  

export const createDashboard = async (dashboardData) => {
    const response = await axios.post(`${API_BASE_URL}/dashboards`, dashboardData, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
    return response.data;
  };
  