//@ui {"widget":"label"}
//@input Component.RenderMeshVisual status
var statusTrf = script.status.getTransform(); // get status text's transform

HandTracking.onTrackStart.add(function(isTap){
  print(`tracking\nhand: ${HandTracking.getActiveHand()}`);
});

// pinch status
HandTracking.onPinchStart.add(function(pos, isTap){
  print(`pinching start! \n${pos}`); // show status text position
  print(`${HandTracking.getPinching()}`);
});

HandTracking.onPinchHold.add(function(pos, isTap){
  statusTrf.setWorldPosition(pos); // set status text position
  // setRotation(isTap); // set status text rotation
  print(`tengah pinching\n${pos}`);
});

HandTracking.onPinchEnd.add(function(pos, isTap){
  print(`Pinch ended, tracking\nhand: ${HandTracking.getActiveHand()}`);
});
