import React from 'react';
import MealsList from './MealsList';

const App: React.FC = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h1 style={{ textAlign: 'center', color: '#4CAF50' }}>تطبيق وجباتي</h1>
      <MealsList />
    </div>
  );
};

export default App;
