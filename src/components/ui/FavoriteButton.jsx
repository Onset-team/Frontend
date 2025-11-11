import React, { forwardRef, memo, useCallback } from 'react';
// 컴포넌트
import Button from '@/components/ui/Button';
// 아이콘
import IconHeart from '@/assets/icons/IconHeart.svg';
import IconHeartLarge from '@/assets/icons/IconHeartLarge.svg';

const FavoriteButton = memo(
  forwardRef(
    (
      {
        isActive,
        onToggle,
        size = 'default', // 'default' | 'large'
        className,
        stopPropagation = true,
        ...rest
      },
      ref,
    ) => {
      const ariaLabel = isActive ? '관심 해제' : '관심 추가';
      const HeartIconComponent = size === 'large' ? IconHeartLarge : IconHeart;
      const iconClass = isActive ? 'text-stoov-orange-500' : 'text-stoov-gray-100';

      // 버블링 방지
      const handleClick = useCallback(
        (e) => {
          if (stopPropagation) {
            e.stopPropagation();
          }
          onToggle?.(e);
        },
        [onToggle, stopPropagation],
      );

      return (
        <Button
          ref={ref}
          variant='icon'
          size='iconLg'
          onClick={handleClick}
          aria-pressed={isActive}
          aria-label={ariaLabel}
          className={className}
          {...rest}
        >
          <HeartIconComponent className={iconClass} />
        </Button>
      );
    },
  ),
);

FavoriteButton.displayName = 'FavoriteButton';
export default FavoriteButton;
