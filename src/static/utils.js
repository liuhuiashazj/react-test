let App = App || {};

App.Utils = {
    logException: function(ex, context) {
        Raven.captureException(ex, {
            extra: context
        });
        /*eslint no-console:0*/
        window.console && console.error && console.error(ex);
    }
}
export default App;
