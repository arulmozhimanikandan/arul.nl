import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SkillsComponent } from './skills/skills.component';
import { BorderComponent } from './border/border.component';
import { SkillComponent } from './skill/skill.component';
import { TileComponent } from './tile/tile.component';
import { PanelComponent } from './panel/panel.component';
import { PaginationComponent } from './pagination/pagination.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HighlightComponent } from './highlight/highlight.component';
import { PostComponent } from './post/post.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SkillsComponent,
    BorderComponent,
    SkillComponent,
    TileComponent,
    PanelComponent,
    PaginationComponent,
    HighlightComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
