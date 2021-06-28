import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { SearchComponent } from './search/search.component';
import { HeroComponent } from './hero/hero.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { SideToolbarComponent } from './side-toolbar/side-toolbar.component';
import { SharedRoutingModule } from './shared-routing.module';

@NgModule({
  declarations: [
    SearchComponent,
    HeroComponent,
    HeaderComponent,
    FooterComponent,
    SideToolbarComponent
  ],
  imports: [
    FormsModule,
    MatIconModule,
    MatExpansionModule,
    MatButtonModule,
    FlexLayoutModule,
    MatSidenavModule,
    MatListModule,
    MatPaginatorModule,
    MatCardModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatMenuModule,
    SharedRoutingModule,
    CommonModule
  ],
  exports:[HeaderComponent,
           FooterComponent,
           SideToolbarComponent,
           HeroComponent,
           SearchComponent
          ]
})
export class SharedModule { }
