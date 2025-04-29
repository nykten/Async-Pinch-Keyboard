@component
export class InputManager extends BaseScriptComponent {

    leftHandPinch: boolean = false;
    rightHandPinch: boolean = false;
    pinchPointDistance; // tip of left Hand pinch

    charBtn;
    activeCharKey: boolean = false;
    selectedCharKey: string;
    inputChar: string;



    onAwake() {

    }

    characterDetection() {
        if(this.pinchPointDistance <= this.charBtn) {
            this.activeCharKey = true;
        }
        return true;
    }

    registerInput() {
        if (this.characterDetection && this.rightHandPinch) {
            this.inputChar = this.selectedCharKey;
            // inputBox = inputBox.availableString + this.inputChar;

        }
    }
}
