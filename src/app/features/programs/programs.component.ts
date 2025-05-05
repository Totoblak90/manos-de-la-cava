import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'mdlc-programs',
  imports: [RouterModule],
  templateUrl: './programs.component.html',
  styleUrl: './programs.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProgramsComponent {

}
