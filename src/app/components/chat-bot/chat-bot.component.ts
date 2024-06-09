import { Component } from '@angular/core';
import { Messages } from '../../models/messages';

@Component({
  selector: 'app-chat-bot',
  templateUrl: './chat-bot.component.html',
  styleUrl: './chat-bot.component.scss'
})
export class ChatBotComponent {
  botMessages: Messages[] = [
    { type: 'bot-message', message: 'Soy botito, y estoy aquí para ayudarte.' },
    { type: 'bot-message', message: '¿Cuentame cúal es tu nombre?' },
    { type: 'bot-message', message: '¿En que te puedo ayudar?' },
    { type: 'bot-message', message: 'Muy bien, espera un momento por favor' },
    { type: 'bot-message', message: 'Muy bien, por favor ingresa al siguiente opción del menú: ' },
    { type: 'bot-message', message: 'Hasta pronto! estaré aquí.' }
  ]
  messages: Messages[] = [
    { type: 'bot-message', message: 'Hola, ¡Bienvenido al chat!' }
  ]
  message: string = ""
  count: number = 0

  sendMessage(event: Event): void {
    event.preventDefault()
    this.messages.push({
      type: 'user-message',
      message: this.message
    })
    this.message = ""
    setTimeout(() => {
      this.messages.push(this.botMessages[this.count])
      this.count++
    }, 2000)
  }
}
