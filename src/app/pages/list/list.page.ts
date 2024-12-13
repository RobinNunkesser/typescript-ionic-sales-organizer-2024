import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  tasks = [
    { number: 1, title: "Meeting with Susan"},
    { number: 2, title: "Trip to Berlin"},
    { number: 3, title: "Board meeting"},
  ];

  constructor(public alertCtrl: AlertController) { }

  ngOnInit() {
  }

  async addTask() {
    const alert = await this.alertCtrl.create({
      header: 'Add a task',
      inputs: [
        {
          name: 'title',
          type: 'text',
          placeholder: 'Task title'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Add',
          handler: data => {
            this.tasks.push({ number: this.tasks.length + 1, title: data.title });
          }
        }]
      });
        await alert.present();
  }
}
