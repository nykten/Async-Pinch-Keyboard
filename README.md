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
