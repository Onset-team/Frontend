import Chip from '@/components/ui/Chip';
import React, { useState } from 'react';
import { useMapStore } from '../stores/useMapStore';

export default function ChipGroup() {
  const [selectedValue, setSelectedValue] = useState(null);
  const filterPlaces = useMapStore((state) => state.filterPlaces);

  const options = [
    { value: '강변/공원', variant: 'park' },
    { value: '광장', variant: 'square' },
    { value: '거리', variant: 'street' },
  ];
  const handleChipChange = (newValue) => {
    let finalValue;

    // 선택 & 해제
    if (selectedValue === newValue) {
      finalValue = null;
    } else {
      finalValue = newValue;
    }

    setSelectedValue(finalValue);

    // 스토어의 데이터 필터링/복원 액션 호출
    filterPlaces(finalValue);
  };

  return (
    <div className='flex gap-2'>
      {options.map((option) => (
        <Chip
          key={option.value}
          label={option.label}
          value={option.value}
          variant={option.variant}
          selected={selectedValue === option.value}
          onChange={handleChipChange}
        />
      ))}
    </div>
  );
}
