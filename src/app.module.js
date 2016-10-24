import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { QuoteService } from './quote.service';
import { RandomQuoteComponent } from './random-quote.component';

@NgModule({
imports: [BrowserModule],
declarations: [AppComponent, RandomQuoteComponent],
providers: [QuoteService],
bootstrap: [AppComponent]
})
export class AppModule{ }
