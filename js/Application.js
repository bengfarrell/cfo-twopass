/**
 * Application Class
 * @constructor
 */
function Application() {

    this.doMain = function() {
        var tst = new TestClass();

        // Type enforcement doesn't work from global scope!
        tst.methodA(3);
        tst.methodB("test");

        return "Spacebag is AWESOME";
    }

    // Store the function in a localized property referenced by a string: "Export Symbols"
    this['doMain'] = this.doMain;
}

// Store the function in a global property referenced by a string: "Export Symbols"
window['Application'] = Application;