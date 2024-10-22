import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { AlbumFormComponent } from "./components/album-form/album-form.component";

@NgModule({
    imports: [
      BrowserModule,
      ReactiveFormsModule,
      HttpClientModule,
      AppComponent,  // Importa el componente standalone
      AlbumFormComponent  // Importa el componente standalone
    ],
    providers: [],
    bootstrap: [AppComponent]
  })
  export class AppModule { }