import { Pipe, PipeTransform } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Pipe({
  name: 'safeImage',
  standalone: true
})
export class SafeImagePipe implements PipeTransform {
  constructor(private http: HttpClient) {}

  transform(url: string | undefined, defaultImage: string = '/images/no-image.png'): Observable<string> {
    if (!url) {
      return of(defaultImage);
    }

    return this.http.head(url, { observe: 'response' }).pipe(
      map(response => response.ok ? url : defaultImage),
      catchError(() => of(defaultImage))
    );
  }
}