import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class AppComponent implements AfterViewInit {
  title = 'flores-amarillas';

  @ViewChild('bgVideo')
  bgVideo!: ElementRef<HTMLVideoElement>;

  ngAfterViewInit(): void {
    const video = this.bgVideo.nativeElement;

    video.muted = true;
    video.playsInline = true;

    const playPromise = video.play();

    if (playPromise) {
      playPromise.catch((error: unknown) => {
        console.log('Autoplay bloqueado:', error);
      });
    }
  }

}
