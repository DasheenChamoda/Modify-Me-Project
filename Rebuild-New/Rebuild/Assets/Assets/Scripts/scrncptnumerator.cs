using System.Collections;
using System.Collections.Generic;
using System.IO;
using UnityEngine;

public class scrshot : MonoBehaviour
{
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        
    }

    private IEnumerator Screenshot(){
        yield return new WaitForEndOfFrame();
        Texture2D texture = new Texture2D(Screen.width,Screen.height, TextureFormat.RGB24, false);
        texture.ReadPixels(new Rect(0,0, Screen.width, Screen.height),0,0);
        texture.Apply();
        string name = "mynameisdasheen.png";

        NativeGallery.SaveImageToGallery(texture, "Camera",name);

    }


    public void takescreenshot(){
        StartCoroutine("Screenshot");
    }
}