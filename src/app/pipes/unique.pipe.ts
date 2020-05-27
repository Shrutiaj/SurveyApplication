import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "unique",
})
export class UniquePipe implements PipeTransform {
  transform(value: any, _sortParam?: any): any {
    // Remove the duplicate elements
    let uniqueArray = [];
    let objectsArray = [];
    for (let position = 0; position < value.length; position++) {
      if (uniqueArray.indexOf(value[position][_sortParam]) == -1) {
        uniqueArray.push(value[position][_sortParam]);
        objectsArray.push(value[position]);
      }
    }
    objectsArray = this.sortArray(objectsArray, _sortParam);
    return objectsArray;
  }
  sortArray(arr: Array<any>, _sortParam?: any): Array<any> {
    arr.sort(function (a, b) {
      if (typeof _sortParam == "string") {
        return a[_sortParam].localeCompare(b[_sortParam]);
      } else if (typeof _sortParam == "number") {
        return a[_sortParam] - b[_sortParam];
      }
    });
    return arr;
  }
}
