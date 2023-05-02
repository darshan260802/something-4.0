import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planner',
  templateUrl: './planner.component.html',
  styleUrls: ['./planner.component.scss'],
})
export class PlannerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const canvas = document.querySelector('#canvas') as HTMLCanvasElement;
    canvas.width = 1920;
    canvas.height = 1080;
    const context = canvas.getContext('2d');
    if (!context) return;
    this.drawGrid(context);
  }

  canvas_mouse_down(event:MouseEvent):void{
    console.log(event);
    
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
}
