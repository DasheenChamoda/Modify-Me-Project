using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class NewBehaviourScript : MonoBehaviour
{
    public GameObject AR_Camera;
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        
    }

    public void camDeactivator(){
        AR_Camera.SetActive(false);
    }

    public void camActivator(){
        AR_Camera.SetActive(true);
    }
}
