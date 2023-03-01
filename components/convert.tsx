'use client';

export default function Convert() {
  return (
    <div className='flex justify-evenly items-center'>
      <div className='flex flex-col'>
        <label htmlFor='input-from'>From</label>
        <input className='text-2xl' type='text' name='from' id='input-from' />
      </div>
      <span>-&gt;</span>
      <div className='flex flex-col'>
        <label htmlFor='input-to'>To</label>
        <input className='text-2xl' type='text' name='to' id='input-to' />
      </div>
    </div>
  );
}
