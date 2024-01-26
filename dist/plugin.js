var capacitorJitsi = (function (exports, core) {
    'use strict';

    const Jitsi$1 = core.registerPlugin('Jitsi', {
        web: () => Promise.resolve().then(function () { return web; }).then(m => new m.JitsiWeb()),
    });

    class JitsiWeb extends core.WebPlugin {
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

    var web = /*#__PURE__*/Object.freeze({
        __proto__: null,
        JitsiWeb: JitsiWeb,
        Jitsi: Jitsi
    });

    exports.Jitsi = Jitsi$1;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({}, capacitorExports);
//# sourceMappingURL=plugin.js.map
