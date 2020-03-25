import { Pipe, PipeTransform } from '@angular/core';
import {MachineType} from "../models/types";

@Pipe({
    name: 'filterPipe',
    pure: false
})
export class FilterPipe implements PipeTransform {
    transform(items: MachineType[], filter: string): MachineType[] {
        if (!items || !filter) {
            return items;
        }
        let regex = new RegExp( "\\b"+filter, 'gi' );
        return items.filter(item => regex.test(item.title));
    }
}
