import Chip from '@/components/ui/Chip';
import React, { useState } from 'react';

export default function ChipGroup() {
  const [selectedValue, setSelectedValue] = useState('option1');

  const options = [
    { value: 'option1', variant: 'park' },
    { value: 'option2', variant: 'square' },
    { value: 'option3', variant: 'street' },
  ];

  return (
    <div className='flex gap-2'>
      {options.map((option) => (
        <Chip
          key={option.value}
          label={option.label}
          value={option.value}
          variant={option.variant}
          selected={selectedValue === option.value}
          onChange={setSelectedValue}
        />
      ))}
    </div>
  );
}
