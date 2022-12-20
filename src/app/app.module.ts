import { AngularFirestoreModule } from '@angular/fire/compat/firestore'
import { AngularFireAuthModule } from '@angular/fire/compat/auth/'
import { AngularFireModule } from '@angular/fire/compat'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { UserModule } from './user/user.module'
import { NavComponent } from './nav/nav.component'
import { provideFirebaseApp, initializeApp } from '@angular/fire/app'
import { getAuth, provideAuth } from '@angular/fire/auth'
import { getFirestore, provideFirestore } from '@angular/fire/firestore'
import { environment } from 'src/environments/environment'

@NgModule({
  declarations: [AppComponent, NavComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    // provideFirebaseApp(() => initializeApp(environment.firebase)),
    // provideFirestore(() => getFirestore()),
    // provideAuth(() => getAuth()),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
