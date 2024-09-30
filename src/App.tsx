import React from 'react';
import Dashboard from './Components/Dashboard';
import { UnitProvider } from './Components/UnitContext';

const App: React.FC = () => {
  return (
    <UnitProvider>
      <Dashboard />
    </UnitProvider>
  );
};

export default App;
