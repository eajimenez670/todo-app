import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

// NGRX
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { appReducer } from "./app.reducers";

// Forms
import { ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FooterComponent } from "./components/footer/footer.component";
import { TodoComponent } from "./components/todo/todo.component";
import { TodoItemComponent } from "./components/todo/todo-item/todo-item.component";
import { TodoListComponent } from "./components/todo/todo-list/todo-list.component";
import { TodoFooterComponent } from "./components/todo/todo-footer/todo-footer.component";
import { TodoAddComponent } from "./components/todo/todo-add/todo-add.component";
import { environment } from "src/environments/environment";
import { TodoFilterPipe } from './filter/todo-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    TodoComponent,
    TodoItemComponent,
    TodoListComponent,
    TodoFooterComponent,
    TodoAddComponent,
    TodoFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot(appReducer),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production // Restrict extension to log-only mode
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
