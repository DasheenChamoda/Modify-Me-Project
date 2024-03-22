using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Sedan_Script : MonoBehaviour
{   

    public GameObject currentPage;
    public GameObject destination;
    public GameObject buttontohide1;
    
    public void goBack(){
        destination.SetActive(true);
        currentPage.SetActive(false);
     
    }

    
    public void toTypepage(){
        destination.SetActive(true);
        currentPage.SetActive(false);
    }
    public void followPage(){
        destination.SetActive(false);
        currentPage.SetActive(true);
    }

}
