package com.destinigo;

import android.os.Bundle;
import org.devio.rn.splashscreen.SplashScreen;
import com.facebook.react.ReactActivity;

public class MainActivity extends ReactActivity {
    @Override
  protected void onCreate(Bundle savedInstanceState){
      SplashScreen.show(this); 
    //super.onCreate(savedInstanceState);
    super.onCreate(null);
  }
  @Override
  protected String getMainComponentName() {
    return "destinigo";
  }
}
