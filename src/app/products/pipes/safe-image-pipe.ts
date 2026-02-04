import { Pipe, PipeTransform } from '@angular/core';

@Pipe(
  {
    name: 'safeImage',
    standalone: false
  })


export class SafeImagePipe implements PipeTransform {
  transform(url: string | undefined, defaultImage: string = '/images/no-image.png', useProxy: boolean = true): string {
    if (!url) return defaultImage; // fallback si no hay URL
    if (useProxy) return url.replace('https://api.escuelajs.co', '/api-img'); // redirige al proxy
    return url; // URL original si no quieres proxy
  }
}
