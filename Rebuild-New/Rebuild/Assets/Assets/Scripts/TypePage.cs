using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class TypePage : MonoBehaviour
{   
    public GameObject SedanPage;
    public GameObject HatchbackPage;
    public GameObject typePage;
    
    void Start()
    {
        
    }

   
    void Update()
    {
        
    }
    public void opensedanpage(){
        SedanPage.SetActive(true);
        HatchbackPage.SetActive(false);
    }
    public void openhatchpage(){
        SedanPage.SetActive(false);
        HatchbackPage.SetActive(true);
    }
    public void signout(){
        typePage.SetActive(false);
    }

}
