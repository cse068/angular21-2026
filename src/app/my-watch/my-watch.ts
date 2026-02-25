import { Component, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from "../header/header";

@Component({
  selector: 'app-my-watch',
  imports: [Header, CommonModule],
  templateUrl: './my-watch.html',
  styleUrl: './my-watch.scss',
})
export class MyWatch implements OnDestroy {
  elapsedTime: number = 0; // in milliseconds
  isRunning: boolean = false;
  private intervalId: any = null;
  private startTime: number = 0;

  constructor(private cdr: ChangeDetectorRef) {}

  private formatTime(milliseconds: number): string {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const ms = Math.floor((milliseconds % 1000) / 10);

    return `${this.pad(minutes)}:${this.pad(seconds)}:${this.pad(ms)}`;
  }

  private pad(num: number): string {
    return num.toString().padStart(2, '0');
  }

  get displayTime(): string {
    return this.formatTime(this.elapsedTime);
  }

  start(): void {
    if (!this.isRunning) {
      this.isRunning = true;
      this.startTime = Date.now() - this.elapsedTime;

      this.intervalId = setInterval(() => {
        this.elapsedTime = Date.now() - this.startTime;
        this.cdr.markForCheck();
      }, 100);
    }
  }

  stop(): void {
    if (this.isRunning) {
      this.isRunning = false;
      clearInterval(this.intervalId);
    }
  }

  reset(): void {
    this.isRunning = false;
    this.elapsedTime = 0;
    this.startTime = 0;
    clearInterval(this.intervalId);
    this.cdr.markForCheck();
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
