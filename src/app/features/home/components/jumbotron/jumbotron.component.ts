import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JumbotronComponent {

  @Input() title: string | undefined;
  @Input() lead: string | undefined;
  @Output() doSomething = new EventEmitter<string>();

  someAction(): void {
    this.doSomething.emit('Hello');
  }

}
