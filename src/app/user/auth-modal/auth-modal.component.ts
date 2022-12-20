import { ModalService } from './../../services/modal.service'
import { Component, Input, OnDestroy, OnInit } from '@angular/core'

@Component({
  selector: 'app-auth-modal',
  templateUrl: './auth-modal.component.html',
  styleUrls: ['./auth-modal.component.scss'],
})
export class AuthModalComponent implements OnInit, OnDestroy {
  constructor(public modal: ModalService) {}
  ngOnDestroy(): void {
    this.modal.unregister('auth')
  }
  ngOnInit(): void {
    this.modal.register('auth')
  }
}
