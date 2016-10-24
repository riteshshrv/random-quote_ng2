import { Component, Inject } from '@angular/core';
import { QuoteService } from './quote.service';

@Component({
  selector: 'random-quote',
  template: '<p><em>{{ quote.line }}</em> - {{ quote.author }}',
})
export class RandomQuoteComponent {
  constructor(@Inject(QuoteService) quoteService) {
    quoteService.generateRandomQuotes(5000, quote =>  this.quote = quote);
  }
}
