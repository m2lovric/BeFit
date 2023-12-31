import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  useEffect;
  return (
    <div className='w-1/5 flex flex-col justify-between'>
      <h2>Dashboard</h2>
      <section>Last workout:</section>
      <section>
        <Link to='/new-exercise'>Add new exercise</Link>
      </section>
      <section>
        <Link to='/add-weight'>Weight</Link>
      </section>
      <Link
        to='/new'
        className='rounded-lg py-1 px-2 border-green-500 border-2 flex justify-center items-center'
      >
        New Workout
      </Link>
    </div>
  );
};

export default Dashboard;
