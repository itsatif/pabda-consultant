import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHapticFeedback]',
  standalone: true,
})
export class HapticFeedbackDirective {
  /**
   * @description Input property to enable or disable haptic feedback. Default is `true`.
   */
  @Input() enableHapticFeedback: boolean = true;

  constructor(private el: ElementRef) {}

  /**
   * @description HostListener for the 'click' event. Triggers haptic feedback if enabled.
   */
  @HostListener('click') onClick = (): void =>
    this.enableHapticFeedback ? null : this.triggerHapticFeedback();

  /**
   * @description Triggers haptic feedback based on the platform.
   */
  private triggerHapticFeedback(): void {
    this.playOSSound();
  }

  /**
   * @description Plays system sound for macOS.
   */
  private playOSSound(): void {
    const audio: HTMLAudioElement = new Audio('assets/img/audio-new-11.mp3');
    audio.play().then().catch();
  }
}
