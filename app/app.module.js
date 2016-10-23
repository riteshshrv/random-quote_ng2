(function(app) {
  var Class = ng.core.Class;
  var Component = ng.core.Component;
  var NgModule = ng.core.NgModule;
  var BrowserModule = ng.platformBrowser.BrowserModule;
  var QuoteService = app.QuoteService;
  var RandomQuoteComponent = app.RandomQuoteComponent;
  var AppComponent = app.AppComponent;
  var AppModule = app.AppModule;

  app.AppModule = NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, RandomQuoteComponent],
  providers: [QuoteService],
  bootstrap: [AppComponent]
  })
  .Class({
   constructor: function() { }
  });

})(window.app || (window.app = {}));
