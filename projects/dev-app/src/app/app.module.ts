import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PrecedeCharDirectiveModule } from '@linch90/precede-char-directive';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, PrecedeCharDirectiveModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
