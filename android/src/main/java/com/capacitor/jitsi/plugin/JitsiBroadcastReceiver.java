package com.capacitor.jitsi.plugin;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;

public class JitsiBroadcastReceiver extends BroadcastReceiver {

    private static final String TAG = "JitsiBroadcastReceiver";
    private JitsiPlugin jitsi;

    public void setModule(JitsiPlugin module) {
        this.jitsi = module;
    }

    public void onReceive(Context context, Intent intent) {
        String eventName = (String) intent.getSerializableExtra("eventName");
        if (jitsi != null) {
            jitsi.onEventReceived(eventName);
        }
    }
}