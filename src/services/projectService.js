import axios from 'axios';

const API_URL = 'https://your-api.com/api/projects/';

export const getProjects = async () => {
  return [
    {
      id: 1,
      name: 'پروژه عمومی',
      type: 'General Project',
      completionPercentage: 100,
      taskProgress: 100,
      lastTask: 'وظیفه شماره 3',
    },
    {
      id: 2,
      name: 'پروژه تیمی',
      type: 'Team Project',
      completionPercentage: 80,
      taskProgress: 60,
      lastTask: 'وظیفه شماره 5',
    },
    {
      id: 3,
      name: 'پروژه مشتری',
      type: 'Client Project',
      completionPercentage: 50,
      taskProgress: 30,
      lastTask: 'وظیفه شماره 2',
    },
  ];
};

export const createProject = async (projectData) => {
  const response = await axios.post(API_URL, projectData);
  return response.data;
};

export const updateProject = async (projectId, projectData) => {
  const response = await axios.put(`${API_URL}${projectId}`, projectData);
  return response.data;
};

export const deleteProject = async (projectId) => {
  const response = await axios.delete(`${API_URL}${projectId}`);
  return response.data;
};

// Add this function to get project details by ID
// export const getProjectDetails = async (projectId) => {
//   try {
//     const response = await axios.get(`${API_URL}${projectId}`);
//     return response.data;
//   } catch (error) {
//     console.error('Failed to fetch project details:', error);
//     throw error;
//   }
// };

export const getProjectDetails = async (projectId) => {
    const mockProjects = await getProjects();
    return mockProjects.find((project) => project.id === projectId);
  };
  