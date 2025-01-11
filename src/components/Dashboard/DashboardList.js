// src/components/Dashboard/DashboardList.js
import React, { useState } from 'react';
import DashboardCard from './DashboardCard';
import AddNewDashboardCard from './AddNewDashboardCard';
import AddDashboardModal from './AddDashboardModal';

const DashboardList = ({ dashboards, onSelect, onAdd }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="space-y-4">
      {dashboards.map((dashboard) => (
        <DashboardCard key={dashboard.id} dashboard={dashboard} onSelect={onSelect} />
      ))}
      <AddNewDashboardCard onAdd={() => setIsModalOpen(true)} />
      {isModalOpen && (
        <AddDashboardModal
          onClose={() => setIsModalOpen(false)}
          onAdd={onAdd}
        />
      )}
    </div>
  );
};

export default DashboardList;
