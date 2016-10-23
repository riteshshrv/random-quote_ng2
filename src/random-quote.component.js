(function(app) {
  var Class = ng.core.Class;
  var Component = ng.core.Component;
  var QuoteService = app.QuoteService;

  app.RandomQuoteComponent = Component({
    selector: 'random-quote',
    template: '<p><em>{{ quote.line }}</em> - {{ quote.author }}',
  })
  .Class({
    constructor: [QuoteService, function RandomQuoteComponent(quoteService) {
      var self = this;
      quoteService.generateRandomQuotes(5000, function(quote) {
        self.quote = quote;
      });
    }]
  });

})(window.app || (window.app = {}));
