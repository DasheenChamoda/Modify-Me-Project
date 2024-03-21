using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;

public class Script_Buttons : MonoBehaviour
{

    public string description;
    public TextMeshProUGUI textBox;
    public GameObject PartARscene;
    public GameObject wlcanvas;
    public GameObject blureffect;
  
    void Start()
    {}
 
    void Update()
    {}
    public void openPopupwindow(){
        blureffect.SetActive(true);
    }

    public void closePopupwindow(){
        blureffect.SetActive(false);
    }

    public void openAR(){
        wlcanvas.SetActive(false);
        PartARscene.SetActive(true);
    }

    public void closeAR(){
        wlcanvas.SetActive(true);
        PartARscene.SetActive(false);
         
    }
    
     public void changePara(){
        textBox.text = description;
    }

}
