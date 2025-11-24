import React, { forwardRef } from 'react';
// 유틸
import { cn } from '@/utils/cn';
// 컴포넌트
import Button from '@/components/ui/Button';
// 아이콘 및 이미지
import IconLeft from '@/assets/icons/IconLeft.svg';
import IconSearch from '@/assets/icons/IconSearch.svg';

const SearchBar = forwardRef(
  (
    {
      value,
      onChange,
      onBack,
      onSearch,
      showBack = true,
      placeholder = '장소, 지역명을 입력해 주세요.',
      className,
      ...rest
    },
    ref,
  ) => {
    const handleSubmit = (e) => {
      e.preventDefault();
      onSearch();
    };
    return (
      <form
        onSubmit={handleSubmit}
        className={cn(
          'bg-stoov-gray-800 flex w-full items-center rounded-full pr-4 pl-1',
          className,
        )}
      >
        {/* 뒤로가기 버튼 */}
        {showBack && (
          <Button variant='icon' size='iconLg' aria-label='뒤로가기' onClick={onBack}>
            <IconLeft aria-hidden='true' className='text-stoov-gray-200' />
          </Button>
        )}

        {/* 검색 영역 */}
        <input
          ref={ref}
          type='text'
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          aria-label='장소 검색 입력'
          {...rest}
          className='placeholder:text-stoov-gray-300 text-stoov-white-100 h-12 flex-1 px-3 outline-none'
        />

        {/* 검색 버튼 */}
        <Button type='submit' variant='icon' size='iconSm' aria-label='검색'>
          <IconSearch aria-hidden='true' className='text-stoov-gray-200' />
        </Button>
      </form>
    );
  },
);
SearchBar.displayName = 'SearchBar';
export default SearchBar;
