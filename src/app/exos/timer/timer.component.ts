import { Component } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.scss'
})
export class TimerComponent {
  state : 'start' | 'reset' | 'stop' = 'reset';
  seconds : number = 0;
  secondsInterval : number = 0

  start(): void {
    if(this.state !== 'start'){
      this.secondsInterval = window.setInterval(() => {this.seconds++}, 1000);
      this.state = 'start';
    }

  }

  stop(): void {
    if(this.state !== 'stop'){
      window.clearInterval(this.secondsInterval);
      this.state = 'stop';
    }

  }

  reset(): void {
    if(this.state !== 'reset'){
      this.stop();
      this.seconds = 0;
      this.state = 'reset';
    }

  }

}
