'use client';

import { ChangeEvent, useEffect, useRef, useState } from 'react';

export default function Convert() {
  const [selected, setSelected] = useState('C');
  const [value, setValue] = useState<number>();

  const updateUnit = (event: ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault();

    setSelected(event.target.value);
  };

  let firstUnit = 'F';
  let lastUnit = 'K';

  switch (selected) {
    case 'C':
      firstUnit = 'F';
      lastUnit = 'K';
      break;
    case 'F':
      firstUnit = 'C';
      lastUnit = 'K';
      break;
    case 'K':
      firstUnit = 'C';
      lastUnit = 'F';
      break;
    default:
      break;
  }

  const getValue = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    setValue(event.target.valueAsNumber);
  };

  const [firstValue, setFirstValue] = useState<number | null>();
  const [lastValue, setLastValue] = useState<number | null>();

  useEffect(() => {
    if (value === null || value === undefined || Number.isNaN(value)) {
      setFirstValue(null);
      setLastValue(null);
      return;
    }

    console.log(value);

    switch (selected) {
      case 'C':
        setFirstValue(value * 1.8 + 32);
        setLastValue(value + 273);
        break;
      case 'F':
        setFirstValue(((value - 32) * 5) / 9);
        setLastValue(((value - 32) * 5) / 9 + 273);
        break;
      case 'K':
        setFirstValue(value - 273);
        setLastValue(1.8 * (value - 273) + 32);
        break;
    }
  }, [value, selected]);

  return (
    <div className='flex justify-center items-center flex-col gap-4'>
      <div className='flex flex-col justify-center items-center'>
        <label htmlFor='input-from' className='font-bold text-xl'>
          From
        </label>
        <div className='flex justify-center items-center gap-2'>
          <input
            onChange={getValue}
            className='text-2xl h-14 w-24 px-2 bg-mine-shaft-100 rounded-lg'
            placeholder='-273'
            type='number'
            name='from'
            id='input-from'
          />
          <select
            onChange={updateUnit}
            className='h-14 px-2 w-14 md:w-12 cursor-pointer rounded-lg bg-mine-shaft-100'
            name='unit'
            id='input-unit'
          >
            <option defaultValue='C' value='C'>
              °C
            </option>
            <option value='F'>°F</option>
            <option value='K'>°K</option>
          </select>
        </div>
      </div>
      <div className='flex flex-col gap-2 justify-center items-center'>
        <label htmlFor='result' className='font-bold text-xl'>
          Results:
        </label>
        <div className='flex flex-row gap-2'>
          <div className='h-14 text-2xl flex-grow w-24 px-2 flex items-center justify-center bg-mine-shaft-100 rounded-lg'>
            {firstValue !== null ? firstValue?.toFixed(1) : null}
          </div>
          <div
            className='h-14 w-14 md:w-12 pl-1 pr-2 bg-mine-shaft-100 rounded-lg
          flex items-center justify-center'
          >
            °{firstUnit}
          </div>
        </div>
        <div className='flex flex-row gap-2'>
          <div className='h-14 text-2xl flex-grow w-24 px-2 flex items-center justify-center bg-mine-shaft-100 rounded-lg'>
            {lastValue !== null ? lastValue?.toFixed(1) : null}
          </div>
          <div
            className='h-14 w-14 md:w-12 pl-1 pr-2 bg-mine-shaft-100 rounded-lg
          flex items-center justify-center'
          >
            °{lastUnit}
          </div>
        </div>
      </div>
    </div>
  );
}
