import { Component } from '@angular/core'
import { AngularFireAuth } from '@angular/fire/compat/auth'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  credentials = {
    email: '',
    password: '',
  }

  inSubmission = false
  showAlert = false
  alertMsg = 'Please wait! We are logging you in.'
  alertColor = 'blue'

  constructor(private auth: AngularFireAuth) {}

  async login() {
    this.showAlert = true
    this.alertMsg = 'Please wait! Your account is being logged in.'
    this.alertColor = 'blue'
    this.inSubmission = true

    try {
      await this.auth.signInWithEmailAndPassword(
        this.credentials.email,
        this.credentials.password
      )
    } catch (e) {
      console.error(e)
      this.alertMsg = 'An unexpected error occurred. Please try again later.'
      this.alertColor = 'red'
      this.inSubmission = false
      return
    }
    this.alertMsg = 'Login Success!'
    this.alertColor = 'green'
    this.inSubmission = false
  }
}
