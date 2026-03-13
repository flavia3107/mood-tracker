import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-march',
  imports: [],
  templateUrl: './march.html',
  styleUrl: './march.scss',
})
export class March {
  marchDays = signal(Array.from({ length: 31 }, (_, i) => {
    // Logic to create a "swirling" path up the screen
    const row = Math.floor(i / 5);
    const col = i % 5;

    return {
      id: i + 1,
      // Staggered layout so they look like they are flying together
      x: col * 80 + (row % 2 === 0 ? 0 : 40),
      y: 450 - (row * 70), // Start from the bottom of the SVG and go up
      rotation: (Math.random() * 20) - 10, // Slight random tilt (-10 to 10 degrees)
      moodColor: '#E0F2FE' // Default sky blue
    };
  }));

}
