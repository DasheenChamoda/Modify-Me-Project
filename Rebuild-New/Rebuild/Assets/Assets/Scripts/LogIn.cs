using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class LogIn : MonoBehaviour
{
    public GameObject loginpage;
    public GameObject registerpage;
    public GameObject typespage;
    public bool password_username = true;
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        
    }
    public void onRegister(){
        registerpage.SetActive(true);
        loginpage.SetActive(false);
    }

    public void onLogin(){
        if(password_username){
            typespage.SetActive(true);
            loginpage.SetActive(false);
        }
    }

    public void loginFromRegForm(){

    }

    

}
