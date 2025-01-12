import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProjectCard from '../components/Projects/ProjectCard'; // New ProjectCard component
import { getProjects } from '../services/projectService'; // Fetch projects data
import MainLayout from '../layouts/mainLayout';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch projects on page load
    const fetchProjects = async () => {
      const projectsData = await getProjects();
      setProjects(projectsData);
      setFilteredProjects(projectsData); // Initially show all projects
    };

    fetchProjects();
  }, []);

  // Filter projects based on search term
  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    const filtered = projects.filter((project) =>
      project.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredProjects(filtered);
  };

  // Redirect to the project page when clicking a card
  const handleCardClick = (projectId) => {
    navigate(`/projects/${projectId}`); // Redirect to specific project page
  };

  return (

    <div>
      {/* Search Bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="فیلتر عنوان پروژه ..."
          value={searchTerm}
          onChange={handleSearch}
          className="w-full p-3 border rounded-md"
        />
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Add Project Card */}
        <div
          className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex justify-center items-center cursor-pointer hover:bg-gray-100"
          onClick={() => navigate('/projects/new')} // Redirect to Add Project page
        >
          <div className="text-center text-teal-600">
            <span className="text-4xl font-bold">+</span>
            <p className="mt-2">ایجاد پروژه جدید</p>
          </div>
        </div>

        {/* Existing Projects */}
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={() => handleCardClick(project.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
