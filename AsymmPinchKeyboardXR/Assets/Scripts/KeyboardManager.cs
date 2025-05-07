using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.InputSystem;
using TMPro;

public class KeyboardManager : MonoBehaviour
{
    public InputActionReference leftTriggerBtn;
    public InputActionReference rightTriggerBtn;
    public InputActionReference leftHandPos;
    public InputActionReference rightHandPos;
    public GameObject keyboard;
    public GameObject leftControllerObj;
    public Vector3 targetScale = Vector3.one;
    public float growDuration = 1f;
    public Vector3 leftCtrlrPos;
    public TextMeshPro textMeshPro;
    public GameObject cube;
    public TextMeshPro cubeText;
    public GameObject sphere;
    public TextMeshPro sphereText;

    Coroutine currentCoroutine;


    // Start is called before the first frame update
    void Start()
    {
        keyboard.transform.localScale = Vector3.zero;
        
    }

    // Update is called once per frame
    void Update()
    {
        if (leftTriggerBtn.action.WasPressedThisFrame()){
            leftCtrlrPos = leftControllerObj.transform.position;
            StartCoroutine(SpawnAnimation(Vector3.zero, Vector3.one, growDuration));//play animation forward (grow)
        }
        if (leftTriggerBtn.action.IsPressed()){
            keyboard.transform.position = leftCtrlrPos;
            // keyboard.transform.localScale = new Vector3(1,1,1);
        }
        else {
            // keyboard.transform.localScale = Vector3.zero;
            StartCoroutine(SpawnAnimation(Vector3.one, Vector3.zero, growDuration));//play animation reverse (shrink)
        }

        // if (leftTriggerBtn.action.IsPressed()) {
        //     keyboard.transform.position = leftCtrlrPos;

        //     if (currentCoroutine != null) StopCoroutine(currentCoroutine);
        //     currentCoroutine = StartCoroutine(SpawnAnimation(Vector3.zero, Vector3.one, growDuration));
        // }
        // else {
        //     if (currentCoroutine != null) StopCoroutine(currentCoroutine);
        //     currentCoroutine = StartCoroutine(SpawnAnimation(Vector3.one, Vector3.zero, growDuration));
        // }
    }

    IEnumerator SpawnAnimation(Vector3 startScale, Vector3 endScale, float duration) {
        float elapsed = 0f;

        while (elapsed < duration) {
            transform.localScale = Vector3.Lerp(startScale, endScale, elapsed / duration);
            elapsed += Time.deltaTime;
            yield return null;
        }

        transform.localScale = endScale;
        currentCoroutine = null; // ✅ Clear after finishing
    }

    // function ScratchPad() {
    //     Vector3 leftpos = leftHandPos.action.ReadValue<Vector3>(); //actionInput val
    //     leftCtrlrPos = leftControllerObj.transform.position; //leftCtrlObj pos val
    //     textMeshPro.text = $"Position:\nX: {leftCtrlrPos.x:F2} Y: {leftCtrlrPos.y:F2} Z: {leftCtrlrPos.z:F2}\nBut Keyboard pos:\nX: {keyboard.transform.position.x:F2} Y: {keyboard.transform.position.y:F2} Z: {keyboard.transform.position.z:F2}"; //controller object value
        
        
    //     keyboard.transform.position = leftCtrlrPos; // keyboard follows objec value
    //     // keyboard.transform.rotation = new Vector3(leftControllerObj.transform.rotation.x, leftControllerObj.transform.rotation.y, leftControllerObj.transform.rotation.z);
    //     cube.transform.position = leftpos; //Cube follows IA value
    //     cubeText.text = $"IAPos:\nX: {leftpos.x:F2}\nY: {leftpos.y:F2}\nZ: {leftpos.z:F2}";//IA values

    //     Vector3 spherePos = sphere.transform.position; //sphere is parented under leftcontroller
    //     sphereText.text = $"SpherePos:\nX: {spherePos.x:F2}\nY: {spherePos.y:F2}\nZ: {spherePos.z:F2}";
    // }
}
