import { useState } from 'react';
interface WeightType {
  date: number;
  weight: number;
}
const AddWeight = () => {
  const [weight, setWeight] = useState<WeightType>({
    date: Date.now(),
    weight: 0,
  });
  return (
    <>
      <form>
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
