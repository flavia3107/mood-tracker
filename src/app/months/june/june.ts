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
    { id: 1, d: "M250,30 L210,80 L250,100 L290,80 Z" },
    // Row 2
    { id: 2, d: "M210,80 L170,140 L220,155 L250,100 Z" },
    { id: 3, d: "M250,100 L220,155 L280,155 L290,80 Z" },
    { id: 4, d: "M290,80 L280,155 L330,140 L370,80 Z" },
    // Row 3
    { id: 5, d: "M170,140 L130,210 L190,225 L220,155 Z" },
    { id: 6, d: "M220,155 L190,225 L250,240 L280,155 Z" },
    { id: 7, d: "M280,155 L250,240 L310,225 L330,140 Z" },
    { id: 8, d: "M330,140 L310,225 L370,210 L410,140 Z" },
    // Row 4
    { id: 9, d: "M130,210 L90,280 L160,295 L190,225 Z" },
    { id: 10, d: "M190,225 L160,295 L220,310 L250,240 Z" },
    { id: 11, d: "M250,240 L220,310 L280,310 L310,225 Z" },
    { id: 12, d: "M310,225 L280,310 L340,295 L370,210 Z" },
    { id: 13, d: "M370,210 L340,295 L410,280 L450,210 Z" },
    // Row 5
    { id: 14, d: "M90,280 L60,350 L130,365 L160,295 Z" },
    { id: 15, d: "M160,295 L130,365 L190,380 L220,310 Z" },
    { id: 16, d: "M220,310 L190,380 L250,395 L280,310 Z" },
    { id: 17, d: "M280,310 L250,395 L310,380 L340,295 Z" },
    { id: 18, d: "M340,295 L310,380 L370,365 L410,280 Z" },
    { id: 19, d: "M410,280 L370,365 L440,350 L480,280 Z" },
    // Row 6 (Touching the top edge of the rind)
    { id: 20, d: "M60,350 L40,430 L110,435 L130,365 Z" },
    { id: 21, d: "M130,365 L110,435 L170,438 L190,380 Z" },
    { id: 22, d: "M190,380 L170,438 L230,440 L250,395 Z" },
    { id: 23, d: "M250,395 L230,440 L280,440 L310,380 Z" },
    { id: 24, d: "M310,380 L280,440 L340,438 L370,365 Z" },
    { id: 25, d: "M370,365 L340,438 L400,435 L440,350 Z" },
    { id: 26, d: "M440,350 L400,435 L460,430 L490,350 Z" },
    // Random shards to reach 31
    { id: 27, d: "M230,380 L270,380 L280,410 L220,410 Z" },
    { id: 28, d: "M150,320 L180,335 L170,310 L140,300 Z" },
    { id: 29, d: "M320,320 L350,335 L340,310 L310,300 Z" },
    { id: 30, d: "M240,180 L260,180 L270,210 L230,210 Z" },
    { id: 31, d: "M240,330 L260,330 L270,360 L230,360 Z" }
  ];
}