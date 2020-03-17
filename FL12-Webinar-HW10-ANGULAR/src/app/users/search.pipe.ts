import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform{

  transform(users, inpValue){
    return users.filter(user => user.name.includes(inpValue) || 
                                user.email.includes(inpValue));
  }

}