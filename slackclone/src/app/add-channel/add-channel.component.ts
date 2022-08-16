import { Component, OnInit } from '@angular/core';
import { Channel } from 'src/models/channel.class';
import { AngularFirestore } from '@angular/fire/compat/firestore'
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-add-channel',
  templateUrl: './add-channel.component.html',
  styleUrls: ['./add-channel.component.scss']
})
export class AddChannelComponent implements OnInit {
  Channel: Channel;

  info = {
    channel: 'Channelname',
    info: 'Description'
  }

  constructor(private firestore: AngularFirestore) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    console.log(form.value)
    if (form.value) {
      this.Channel = new Channel(form.value);
      console.log(this.Channel)

    }
  }
}
