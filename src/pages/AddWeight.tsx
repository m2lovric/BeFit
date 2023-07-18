import { useState } from 'react';
import useUserStore from '../store/userStore';
import { doc, updateDoc, arrayUnion } from 'firebase/firestore';
import { db } from '../config/firebaseConfig';

interface WeightType {
  date: number;
  weight: number;
}
const AddWeight = () => {
  const user = useUserStore((state) => state.user);
  const [weight, setWeight] = useState<WeightType>({
    date: Date.now(),
    weight: 0,
  });

  async function handleWeight(e: React.FormEvent) {
    e.preventDefault();
    if (user) {
      const washingtonRef = doc(db, 'users', user.uid);

      await updateDoc(washingtonRef, {
        weight: arrayUnion(weight),
      });
    }
  }
  return (
    <>
      <form onSubmit={(e) => handleWeight(e)}>
        <input
          type='number'
          onChange={(e) =>
            setWeight({ ...weight, weight: parseFloat(e.target.value) })
          }
          value={weight.weight}
        />
        <input
          type='date'
          onChange={(e) =>
            setWeight({ ...weight, date: parseInt(e.target.value) })
          }
          value={weight.date}
        />
        <button type='submit'>Save</button>
      </form>
    </>
  );
};

export default AddWeight;
