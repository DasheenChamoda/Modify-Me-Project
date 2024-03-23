using UnityEngine;
using System.IO;

public class screenshot_Script : MonoBehaviour
{
     
    public string screenshotDirectory = "appscreenshots/";

    public void OnMouseDown()
    {
         
        string screenshotPath = Path.Combine(Application.persistentDataPath, screenshotDirectory, "modifymemodifiedcarimage.png");

       
        string directoryPath = Path.Combine(Application.persistentDataPath, screenshotDirectory);
        if (!Directory.Exists(directoryPath))
        {
            Directory.CreateDirectory(directoryPath);
        }

         
        ScreenCapture.CaptureScreenshot(screenshotPath);

   
        Debug.Log("Screenshot saved to: " + screenshotPath);
    }
}