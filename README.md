# Async-Pinch-Keyboard
A new way of typing in AR using Snapchat's Spectacles


Rename: "**Asymmetrical Pinch Keyboard Input**"

## Strategy:

1. Function for character key detection:

``` Pseudocode
if (pinchPoint collides with charBtn[])
then
    charKeyActive = true
    selectedCharKey = charBtn[x]
end
return true?
```

2. Function for input register:

``` Pseudocode
if (charKeyDetected() && rightHand.pinchDown)
then
    inputChar = selectedCharKey
    inputBox = inputBox.availableStringInsideIt + inputChar
    VisualFeedback()
    AudioFeedback()
end
```
## Diskusi

it kinda need the `rightHand` to act as the `leftHand` to interact the charKeys in the left hand side.

OR 

when `leftHand` hovers and detects, send data to a central `InputManager`, then wait for `rightHand`'s  signal to 'confirm' the action/register the input.

### Flow of processes

1. leftHand pinches
2. keyboard appears
3. leftHandhovers over charKey
4. leftHand outputs InteractorEvent, charKey outputs InteractableEvent ("hey an interactor is trying to interact with me")
5. when the above is true:
6. rightHand will Pinch, sending InteractorEvent (i guess)
7. InputManager will combine the all conditions and output a single 'true' event to drive the registerInput function.