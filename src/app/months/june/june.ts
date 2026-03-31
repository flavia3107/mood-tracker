import { Component, signal } from "@angular/core";

interface Segment {
  id: number;
  points: string;
  color: string;
}

@Component({
  selector: 'app-june',
  standalone: true,
  templateUrl: './june.html',
  styleUrl: './june.scss',
})
export class June {
  selectedColor = signal<string>('#D32F2F');
  wedgePath = signal("M 250,30 L 470,440 Q 250,570 30,440 Z");
  rindPathBase = signal("M 470,440 Q 250,570 30,440"); // Solid Mint base
  rindPathMid = signal("M 465,445 Q 250,565 35,445"); // Translucent Green mid
  rindPathOuter = signal("M 460,455 Q 250,560 40,455"); // Translucent Dark Green edge
  days = signal<string[]>(new Array(31).fill('#FFFFFF'));

  moods = [
    { label: 'Feliz', color: '#D32F2F' },
    { label: 'Contenta', color: '#E57373' },
    { label: 'Tranquila', color: '#F8BBD0' },
    { label: 'Molesta', color: '#FFCCBC' },
    { label: 'Enferma', color: '#D4E157' },
    { label: 'Triste', color: '#AFB42B' }
  ];

  colorDay(index: number) {
    const currentDays = [...this.days()];
    currentDays[index] = this.selectedColor();
    this.days.set(currentDays);
  }


  segments = [
    // Row 1
    { id: 1, x: 250, y: 72, d: "M250,30 L210,80 L250,100 L290,80 Z" },
    // Row 2
    { id: 2, x: 230, y: 124, d: "M220,80 L170,160 L280,155 L250,100 Z" },
    { id: 3, x: 265, y: 122, d: "M250,100 L240,155 L280,155 L290,80 Z" },
    { id: 4, x: 317, y: 114, d: "M290,80 L280,155 L330,140 L370,80 Z" },
    // Row 3
    { id: 5, x: 172, y: 226, d: "M150,160 L130,210 L190,380 L220,155 Z" },
    { id: 6, x: 235, y: 232, d: "M220,155 L190,380 L250,240 L280,155 Z" },
    { id: 7, x: 287, y: 191, d: "M280,155 L250,240 L310,225 L310,140 Z" },
    { id: 8, x: 350, y: 150, d: "M310,40 L310,225 L370,210 L410,140 Z" },
    // Row 4
    { id: 9, x: 147, y: 254, d: "M150,200 L90,280 L160,330 L180,220 Z" },
    { id: 10, x: 227, y: 256, d: "M180,220 L150,310 L320,250 L250,240 Z" },
    { id: 11, x: 250, y: 271, d: "M250,240 L160,310 L280,320 L310,225 Z" },
    { id: 12, x: 325, y: 282, d: "M280,232 L280,310 L340,295 L345,210 Z" },
    { id: 13, x: 392, y: 249, d: "M345,210 L320,300 L410,295 L450,210 Z" },
    // Row 5
    { id: 14, x: 110, y: 322, d: "M90,290 L60,350 L130,365 L140,295 Z" },
    { id: 15, x: 175, y: 337, d: "M140,295 L130,345 L180,380 L220,310 Z" },
    { id: 16, x: 235, y: 349, d: "M200,307 L170,390 L250,395 L240,310 Z" },
    { id: 17, x: 295, y: 345, d: "M240,310 L250,395 L310,380 L320,300 Z" },
    { id: 18, x: 357, y: 331, d: "M320,300 L310,380 L370,365 L370,290 Z" },
    { id: 19, x: 425, y: 319, d: "M350,294 L370,365 L440,350 L415,280 Z" },
    // Row 6
    { id: 20, x: 85, y: 395, d: "M60,350 L40,430 L110,435 L130,365 Z" },
    { id: 21, x: 150, y: 404, d: "M132,335 L110,435 L170,438 L190,380 Z" },
    { id: 22, x: 210, y: 413, d: "M190,380 L170,438 L230,440 L250,395 Z" },
    { id: 23, x: 267, y: 414, d: "M250,395 L230,440 L280,440 L310,380 Z" },
    { id: 24, x: 325, y: 405, d: "M310,380 L280,440 L340,438 L370,365 Z" },
    { id: 25, x: 387, y: 397, d: "M370,365 L340,438 L400,435 L440,350 Z" },
    { id: 26, x: 447, y: 391, d: "M440,350 L400,435 L460,430 L490,350 Z" },
    // Row 7 (Relocated below Row 6)
    { id: 27, x: 130, y: 478, d: "M110,430 L170,435 L190,470 L100,440 Z" },
    { id: 28, x: 205, y: 482, d: "M170,435 L235,440 L220,480 L170,460 Z" },
    { id: 29, x: 285, y: 482, d: "M230,440 L260,435 L300,465 L220,490 Z" },
    { id: 30, x: 370, y: 478, d: "M260,435 L310,440 L390,480 L330,490 Z" },
    { id: 31, x: 450, y: 478, d: "M305,440 L470,420 L480,490 L420,490 Z" }
  ];
}