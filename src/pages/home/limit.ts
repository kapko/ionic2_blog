import {Pipe} from '@angular/core'

@Pipe({
    name: 'limit'
})

export class Limit{
    transform(text: string, count: number){
        var about = text.substring(0, count) + ' ...';
        return about;
    }
}
