let positionLat = prompt("Enter position latitude:");
let positionLng = prompt("Enter position longitude:");
let addressLat = prompt("Enter address latitude:");
let addressLng = prompt("Enter address longitude:");


let distance = Math.sqrt((addressLat - positionLat)**2 + (addressLng - positionLng)**2);

alert(`Distance: ${distance}`);

