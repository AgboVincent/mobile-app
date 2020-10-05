import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule} from './material.module';
import { CheckboxModule} from 'angular-bootstrap-md';
import { CollapseModule, WavesModule } from 'angular-bootstrap-md';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AndroidComponent } from './android/android.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultComponent } from './layouts/default/default.component';
import { FlutterComponent } from './flutter/flutter.component';
import { HeaderComponent } from './shared/component/header/header.component';
import { FooterComponent } from './shared/component/footer/footer.component';
import { SidebarComponent } from './shared/component/sidebar/sidebar.component';
import { MatSidenavModule, MatDivider, MatDividerModule, MatToolbarModule, MatIconModule, MatMenuModule, MatListModule, MatCardModule, MatPaginatorModule, MatTableModule } from '@angular/material';
import { FlexLayoutModule }  from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './widgets/card/card.component';
import { UiComponent } from './ui/ui.component';
import { AboutComponent } from './about/about.component';
import { LanguagesComponent } from './languages/languages.component';
//import { StyleComponent } from './style/style.component';
import { ReferencesComponent } from './references/references.component';
import { GoalsComponent } from './goals/goals.component';
import { LeadsComponent } from './leads/leads.component';
//import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  declarations: [
    AndroidComponent,
    AppComponent,
    FlutterComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    HomeComponent,
    DefaultComponent,
   
    CardComponent,
   
    UiComponent,
   
    AboutComponent,
   
    LanguagesComponent,
    ReferencesComponent,
   
    GoalsComponent,
   
    LeadsComponent

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  
    FlexLayoutModule,
     MatSidenavModule,
     MatDividerModule,
     MatToolbarModule,
     MatIconModule,
     MatMenuModule,
     
     MatListModule,    
     MatPaginatorModule,
    
    MaterialModule,
    MatCardModule,
    CollapseModule,
    HttpClientModule,
    FormsModule,
    CheckboxModule,

    RouterModule.forRoot([
      
      
      {
        path: '',
        component: DefaultComponent,
        children:[{
          path: '',
          component:AndroidComponent
      }]
      },
      
      
    {path:'android',
    component:DefaultComponent,
    children:[{
        path: '',
        component:AndroidComponent
    }]
  },
  {path:'flutter',
  component:DefaultComponent,
  children:[{
      path: '',
      component:FlutterComponent
  }]
},
  {path:'ui',
  component:DefaultComponent,
  children:[{
      path: '',
      component:UiComponent
  }]
},
    {
      path:'about_me',
    component:DefaultComponent,
    children:[{
        path: '',
        component:AboutComponent
    }]
  },
  {
    path:'languages',
  component:DefaultComponent,
  children:[{
      path: '',
      component:LanguagesComponent
  }]
},
{
  path:'ref',
component:DefaultComponent,
children:[{
    path: '',
    component:ReferencesComponent
}]
},
{
  path:'goals',
component:DefaultComponent,
children:[{
    path: '',
    component:GoalsComponent
}]
},
{
  path:'leads',
component:DefaultComponent,
children:[{
    path: '',
    component:LeadsComponent
}]
}   
    ]),
    BrowserAnimationsModule
  ],
  providers: [],
  exports:[
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    CardComponent

    
    
  ],

   
   // MatTabsModule
  
  bootstrap: [AppComponent]
})
export class AppModule { }
