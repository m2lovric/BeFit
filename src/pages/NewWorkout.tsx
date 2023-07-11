import { collection, getDocs, DocumentData } from 'firebase/firestore';
import { db } from '../config/firebaseConfig';
import { useEffect, useState } from 'react';

const NewWorkout = () => {
  const [exercises, setExercises] = useState<DocumentData | null>(null);
  const [workout, setWorkout] = useState<{ exercise: string; reps: number }[]>(
    []
  );
  const [data, setData] = useState({
    exercise: 'Squat',
    reps: 0,
  });

  async function getExercises() {
    const querySnapshot = await getDocs(collection(db, 'exercises'));
    querySnapshot.forEach((doc) => {
      setExercises(doc.data());
    });
  }

  function handleWorkout(e: React.FormEvent) {
    e.preventDefault();
    setWorkout([...workout, data]);
  }

  useEffect(() => {
    getExercises();
  }, []);
  return (
    <div className='w-1/6'>
      <h1>New Workout</h1>
      <form className='flex flex-col'>
        <h3>Add exercises</h3>
        <select
          onChange={(e) => setData({ ...data, exercise: e.target.value })}
          value={data.exercise}
        >
          {exercises &&
            exercises.exercise.map((el: string) => (
              <option value={el} key={el} selected={el === 'Squat'}>
                {el}
              </option>
            ))}
        </select>
        <div className='flex justify-between'>
          <p>Reps</p>
          <input
            type='number'
            className='border border-black'
            onChange={(e) =>
              setData({ ...data, reps: parseInt(e.target.value) })
            }
            value={data.reps}
          />
        </div>
        <button onClick={handleWorkout}>+</button>
      </form>
      <h2>Workout</h2>
      {workout &&
        workout.map((el) => (
          <li key={el.exercise}>
            {el.exercise} {el.reps}
          </li>
        ))}
    </div>
  );
};

export default NewWorkout;
