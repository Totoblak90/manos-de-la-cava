import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'mdlc-hero',
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroComponent {

}
