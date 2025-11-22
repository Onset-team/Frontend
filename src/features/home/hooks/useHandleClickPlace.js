import { useNavigate } from 'react-router-dom';
import { useMapStore } from '../stores/useMapStore';

export function useHandleClickPlace() {
  const navigate = useNavigate();
  const selectPlace = useMapStore((state) => state.selectPlace);

  const handleClickPlace = (placeId) => {
  
    const place = selectPlace(placeId);
    console.log(place)
    if (place) {
      navigate(`/${placeId}`);
    }
  };
  
  return handleClickPlace;
}