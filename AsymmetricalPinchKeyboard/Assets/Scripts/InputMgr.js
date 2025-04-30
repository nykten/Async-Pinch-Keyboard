//@ui {"widget":"label"}
//@input SceneObject BtnHolder 

//@ui {"widget":"label"}
//@input Component.RenderMeshVisual Button1
//@ui {"widget":"label"}
//@input Component.RenderMeshVisual Button2
//@ui {"widget":"label"}
//@input Component.RenderMeshVisual Button3
//@ui {"widget":"label"}
//@input Component.RenderMeshVisual Button4
//@ui {"widget":"label"}
//@input Component.RenderMeshVisual Button5

var btn1Trf = script.Button1.getTransform();
var btn2Trf = script.Button2.getTransform();
var btn3Trf = script.Button3.getTransform();
var btn4Trf = script.Button4.getTransform();
var btn5Trf = script.Button5.getTransform();

var holderTrf = script.BtnHolder.getTransform();
var holderPos = holderTrf.getWorldPosition();


function onStart(){
    holderTrf.setWorldScale(new vec3(0,0,0));
}

function glow() {
    
}

// === scratchpad ===
function pinchystart(pos, isTap){
    print(`pinching start! \n${pos}`); // show status text position
    // holderTrf.scale = new vec3(1,1,1);
    print(`Holder scale:${holderTrf.getWorldScale()}`);
}

HandTracking.onPinchStart.add(pinchystart);

HandTracking.onPinchHold.add(function(pos, isTap){
    holderTrf.setWorldScale(new vec3(1,1,1));
    print(`Holder scale while pinch:${holderTrf.getWorldScale()}`);
    print(`tengah pinching\n${pos}`);
    hoverToSelect(pos);
});

HandTracking.onPinchEnd.add(function(pos, isTap){
    holderTrf.setWorldScale(new vec3(0,0,0));
    print(`Pinch ended, tracking\nhand: ${HandTracking.getActiveHand()}`);
});


function hoverToSelect(pinchPos){
    if (pinchPos <= btn1Trf.getWorldPosition()){
        btn1Trf.setWorldScale(new vec3(3.5, 0.5, 3.5));
    }
}

function select(){

}