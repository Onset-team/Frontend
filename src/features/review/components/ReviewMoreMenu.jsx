import React, { useRef, useState } from 'react';
import useOnClickOutside from '@/hooks/useOnClickOutside';
// 컴포넌트
import Button from '@/components/ui/Button';
import Dropdown from '@/components/ui/Dropdown';
// 아이콘
import IconDot from '@/assets/icons/IconDot.svg';

export default function ReviewMoreMenu({ isMyReview, onEdit, onDelete, onReport }) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  // 외부 클릭 시 닫힘
  useOnClickOutside(menuRef, () => setIsOpen(false));

  // 메뉴 구성
  const menuItems = isMyReview
    ? [
        { id: 'edit', label: '수정' },
        { id: 'delete', label: '삭제' },
      ]
    : [{ id: 'report', label: '오류 제보' }];

  // 메뉴 클릭 처리
  const handleMenuClick = (id) => {
    if (id === 'edit') onEdit?.();
    if (id === 'delete') onDelete?.();
    if (id === 'report') onReport?.();
    setIsOpen(false);
  };

  return (
    <div ref={menuRef} className='relative'>
      <Button
        variant='icon'
        size='iconXs'
        aria-label='더 보기'
        onClick={() => setIsOpen((v) => !v)}
      >
        <IconDot className='text-stoov-gray-100' aria-hidden='true' />
      </Button>

      {isOpen && (
        <Dropdown
          items={menuItems}
          onItemClick={handleMenuClick}
          className='absolute top-[18px] right-0 z-50'
        />
      )}
    </div>
  );
}
