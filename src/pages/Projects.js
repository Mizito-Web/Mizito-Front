import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProjectCard from '../components/Projects/ProjectCard'; // ProjectCard component
import { getProjects } from '../services/projectService'; // Fetch projects


const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true); // Add loading state
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const projectsData = await getProjects();
        setProjects(projectsData);
        setFilteredProjects(projectsData); // Show all projects initially
      } catch (error) {
        console.error('Error fetching projects:', error);
      } finally {
        setLoading(false); // Turn off loading spinner
      }
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

  // Redirect to project details page
  const handleCardClick = (projectId) => {
    navigate(`/projects/${projectId}`);
  };

  return (

      <div className="p-6">
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
        {loading ? (
          <div className="text-center text-gray-500">Loading projects...</div>
        ) : filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Add Project Card */}
            <div
              className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex justify-center items-center cursor-pointer hover:bg-gray-100"
              onClick={() => navigate('/projects/new')}
            >
              <div className="text-center text-teal-600">
                <span className="text-4xl font-bold">+</span>
                <p className="mt-2">ایجاد پروژه جدید</p>
              </div>
            </div>

            {/* Render Project Cards */}
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => handleCardClick(project.id)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500">No projects found.</div>
        )}
      </div>
  );
};

export default Projects;
