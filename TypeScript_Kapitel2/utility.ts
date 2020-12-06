export namespace UtilityNamespace {

    export let inOneMinute: Date = new Date(new Date().getTime() + 1 * 60 * 1000);
    export let inOneHour: Date = new Date(new Date().getTime() + 60 * 60 * 1000);

    /**
     * Get Cookie Function.
     * https://www.w3schools.com/js/js_cookies.asp
     * @param cname - The name of the Cookie to get.
     * @return Returns the cname Cookie.
     */
    export function getCookie(cname: string): string {
        var name: string = cname + "=";
        var decodedCookie: string = decodeURIComponent(document.cookie);
        var ca: string[] = decodedCookie.split(';');
        for (var i: number = 0; i < ca.length; i++) {
            var c: string = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    /**
     * Resets the Cookie.
     * @param cname - The name of the Cookie to reset.
     */
    export function resetCookie(cname: string): void {
        document.cookie = cname + " = 'toDelete'; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
    }
}