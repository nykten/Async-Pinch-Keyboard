import { SIK } from '../SpectaclesInteractionKit/SIK';

@component
export class BtnsPos extends BaseScriptComponent {
  @input
  @hint("Button 1")
  Btn0!: RenderMeshVisual

  @input
  @hint("Button 2")
  Btn1!: RenderMeshVisual

  @input
  @hint("Button 3")
  Btn2!: RenderMeshVisual

  @input
  @hint("Button 4")
  Btn3!: RenderMeshVisual

  @input
  @hint("Button 5")
  Btn4!: RenderMeshVisual


    onAwake() {
      this.createEvent('OnStartEvent').bind(() => {
        this.onStart();
      });
    }

    onStart() {
      // Set Btn (this) position
      let groupTransformObj = this.getTransform();
      let groupPos;

      //set scale to 0
      groupTransformObj.setWorldScale(new vec3(0.0, 0.0, 0.0));

      // Retrieve HandInputData from SIK's definitions.
      let handInputData = SIK.HandInputData;

      // Fetch the TrackedHand for left and right hands.
      let leftHand = handInputData.getHand('left');
      let rightHand = handInputData.getHand('right');

      // let leftTipPos = leftHand.indexTip.position;

      

      // Add spawn callbacks for whenever these hands pinch.
      rightHand.onPinchDown.add(() => {
        groupTransformObj.setWorldRotation(quat.fromEulerAngles(20 * Math.PI / 180, 0, 0)); // quat = quartenion
        groupTransformObj.setWorldPosition(rightHand.indexTip.position);
        groupTransformObj.setWorldScale(new vec3(1.0, 1.0, 1.0));
      });

      rightHand.onPinchUp.add(() => {
        groupTransformObj.setWorldScale(new vec3(0.0, 0.0, 0.0));
      });

    }
}
