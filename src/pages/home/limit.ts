import {Pipe} from '@angular/core'

@Pipe({
    name: 'limit'
})

export class Limit{
    transform(text: string, count: number){
        if(text.length < count) return null;
        
        var about = text.substring(0, count) + ' ...';
        return about;
    }
}
