export function mapCircleMarkers(color = '#0066FF', size = 20) {
  const svgString = `
    <svg 
      width="${size}" 
      height="${size}" 
      viewBox="0 0 ${size} ${size}" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle 
        cx="${size / 2}" 
        cy="${size / 2}" 
        r="${size / 2 - 2}" 
        fill="${color}" 
        stroke="white" 
        stroke-width="2"
      />
    </svg>
  `;
  
  return `data:image/svg+xml;utf8,${encodeURIComponent(svgString)}`;
}