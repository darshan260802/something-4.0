import { Component, OnInit } from '@angular/core';

interface DrawParams {
  x: number | null;
  y: number | null;
  dx: number | null;
}

interface ReservationPositions{
  top: number;
  left: number;
  width: number;
}

@Component({
  selector: 'app-planner',
  templateUrl: './planner.component.html',
  styleUrls: ['./planner.component.scss'],
})
export class PlannerComponent implements OnInit {
  drawParams: DrawParams = {
    x: null,
    y: null,
    dx: null,
  };
  reservations:ReservationPositions[] = [];

  constructor() {}

  ngOnInit(): void {
    const canvas = document.querySelector('#canvas') as HTMLCanvasElement;
    canvas.width = 1920;
    canvas.height = 1080;
    const context = canvas.getContext('2d');
    if (!context) return;
    this.drawGrid(context);
  }

  drawGrid(ctx: CanvasRenderingContext2D): void {
    let x = 0,
      y = 0;

    while (x <= 1920) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, 1080);
      ctx.stroke();
      ctx.closePath();
      x += 30;
    }
    while (y <= 1080) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(1920, y);
      ctx.stroke();
      ctx.closePath();
      y += 60;
    }
  }

  canvas_mouse_down(canvasEvent: MouseEvent): void {
    this.drawParams['x'] = canvasEvent.offsetX - (canvasEvent.offsetX%30) ;
    this.drawParams['y'] = canvasEvent.offsetY + 4 - (canvasEvent.offsetY%60)   ;
  }

  canvas_mouse_move(canvasEvent: MouseEvent): void {
    if (this.drawParams.x === null || this.drawParams.y === null) return;
    const width = (canvasEvent.offsetX - this.drawParams['x']);
    this.drawParams['dx'] = width;
  }

  canvas_mouse_up(canvasEvent: MouseEvent): void {
    if(this.drawParams.x === null || this.drawParams.y === null || this.drawParams.dx === null) return;
    const width = this.drawParams['dx'];
    const newReservation:ReservationPositions = {
      top : this.drawParams['y']-4,
      left: this.drawParams['x'],
      width: width%30 < 15 ? width - width%30 : width + 30 - width%30
    }
    this.reservations.push(newReservation);
    this.drawParams['x'] = null;
    this.drawParams['y'] = null;
    this.drawParams['dx'] = null;
    console.log(this.reservations);
    
  }
}
