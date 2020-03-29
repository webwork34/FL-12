import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../service/users.service';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform{

  transform(users: User[], inpValue: string){
    return users.filter(user => user.name.toLowerCase().includes(inpValue.toLowerCase()) || 
                                user.email.toLowerCase().includes(inpValue.toLowerCase()));
  }

}