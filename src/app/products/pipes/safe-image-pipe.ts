import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'safeImage',
})
export class SafeImagePipe implements PipeTransform {

  transform(url: string | undefined, defaultImage: string = '/images/no-image.png'): string {
    console.log(url)
    return url || defaultImage;
  }

}
