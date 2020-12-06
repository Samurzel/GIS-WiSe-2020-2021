"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilityNamespace = void 0;
var UtilityNamespace;
(function (UtilityNamespace) {
    UtilityNamespace.inOneMinute = new Date(new Date().getTime() + 1 * 60 * 1000);
    UtilityNamespace.inOneHour = new Date(new Date().getTime() + 60 * 60 * 1000);
    /**
     * Get Cookie Function.
     * https://www.w3schools.com/js/js_cookies.asp
     * @param cname - The name of the Cookie to get.
     * @return Returns the cname Cookie.
     */
    function getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }
    UtilityNamespace.getCookie = getCookie;
    /**
     * Resets the Cookie.
     * @param cname - The name of the Cookie to reset.
     */
    function resetCookie(cname) {
        document.cookie = cname + " = 'toDelete'; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
    }
    UtilityNamespace.resetCookie = resetCookie;
})(UtilityNamespace = exports.UtilityNamespace || (exports.UtilityNamespace = {}));
//# sourceMappingURL=utility.js.map