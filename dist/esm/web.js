import { WebPlugin } from '@capacitor/core';
export class JitsiWeb extends WebPlugin {
    // @ts-ignore
    async joinConference(options) {
        throw this.unavailable('the web implementation is not available. Please use Jitsi Meet API to implement Jitsi in web app');
    }
    ;
    // @ts-ignore
    async leaveConference(options) {
        throw this.unavailable('the web implementation is not available. Please use Jitsi Meet API to implement Jitsi in web app');
    }
    ;
}
const Jitsi = new JitsiWeb();
export { Jitsi };
//# sourceMappingURL=web.js.map