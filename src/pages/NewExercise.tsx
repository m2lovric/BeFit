import { doc, updateDoc, arrayUnion } from 'firebase/firestore';
import { db } from '../config/firebaseConfig';
import { useState } from 'react';

const NewExercise = () => {
  const [exercise, setExercise] = useState('');

  const addExercise = async (e: React.FormEvent) => {
    e.preventDefault();
    const dataRef = doc(db, 'exercises', 'q0mvGgAk0gEDTBkC3nR2');
    await updateDoc(dataRef, {
      exercise: arrayUnion(exercise),
    });
    setExercise('');
  };
  return (
    <section>
      <h1>Add New Exercise</h1>
      <form>
        <input
          type='text'
          className='py-2 px-4 bg-slate-100 rounded-xl text-lg'
          onChange={(e) => setExercise(e.target.value)}
          value={exercise}
        />
        <button
          className='ml-4 bg-red-400 rounded-sm p-3 text-white'
          onClick={addExercise}
        >
          Add
        </button>
      </form>
    </section>
  );
};

export default NewExercise;
