import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  @Input() btnEnviar!: String;

  contato!: FormGroup;

  ngOnInit() : void{
    this.contato = new FormGroup({
      id: new FormControl(''),
      nome: new FormControl('', [Validators.required]),
      telefone: new FormControl(''),
      email: new FormControl('')
    })
  }

    get nome(){
      return this.contato.get('nome')!;
    }

    get telefone(){
      return this.contato.get('telefone')!;
    }

    get email(){
      return this.contato.get('email')!;
    }


    submit(){
      if(this.contato.invalid){
        return;
      }

      console.log(this.contato.value);
    }

}