export class ArrayUtils {
  public static splitArray(arr: any[], splitEvery: number) {
    let cloneArr: any[] = arr.map((obj) => obj);
    let tempArr: any[];
    let resultArr: any[] = [];
    let iteration: number = parseInt((arr.length / splitEvery).toString()) + 1;

    for (let i = 0; i < iteration; i++) {
      tempArr = cloneArr.splice(0, splitEvery);
      resultArr.push(tempArr);
    }

    return resultArr;
  }
}
