import { WebPlugin } from '@capacitor/core';
import { JitsiPlugin } from './definitions';
export declare class JitsiWeb extends WebPlugin implements JitsiPlugin {
    joinConference(options: {
        roomName: string;
        url: string;
        token?: string;
        channelLastN?: string;
        displayName?: string;
        subject?: string;
        email?: string;
        avatarURL?: string;
        startWithAudioMuted?: boolean;
        startWithVideoMuted?: boolean;
        chatEnabled?: boolean;
        inviteEnabled?: boolean;
        callIntegrationEnabled?: boolean;
        recordingEnabled?: boolean;
        liveStreamingEnabled?: boolean;
        screenSharingEnabled?: boolean;
        featureFlags?: any;
        configOverrides?: any;
    }): Promise<{
        success?: boolean;
    }>;
    leaveConference(options?: {}): Promise<{
        success?: boolean;
    }>;
}
declare const Jitsi: JitsiWeb;
export { Jitsi };
