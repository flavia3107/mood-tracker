import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isFuture',
})
export class IsFuturePipe implements PipeTransform {
  transform(day: Date | string | null | undefined): boolean {
    if (!day) return false;

    const dateToCheck = day instanceof Date ? day : new Date(day);
    return !isNaN(dateToCheck.getTime()) && dateToCheck.getTime() > Date.now();
  }
}
