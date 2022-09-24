
export function calcPosFromLatLonRad(lat, lon, radius) {

  var phi = (90 - lat) * (Math.PI / 180);
  var theta = (lon + 180) * (Math.PI / 180);

  let x = -((radius) * Math.sin(phi) * Math.cos(theta)) || 0.0;
  let z = ((radius) * Math.sin(phi) * Math.sin(theta)) || 0.0;
  let y = ((radius) * Math.cos(phi)) || 0.0;


  console.log([x, y, z]);
  return [x, y, z];

}