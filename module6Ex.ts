// class MyMap<T extends string, U extends number | string> {

//     constructor(
//         public key: T,
//         public value: U,
//         private data: Array<{key: T, value: U}>
//     ) { }
    
//     get getItem(): [] {
//         const result: [] = this.data.indexOf(this.key);
//         return result;
//     }

//     set setItem<T>(key: T, value: T): T {
//         this.data.push({key: value})
//     }
    
// }


// MAX'S SOLUTION

class MyMap<T> {

    constructor(
        private map: {[key: string]: T} = {}
    ) { }
    
    setItem(key: string, item: T) {
        this.map[key] = item;
    }

    getItem(key: string) {
        return this.map[key];
    }

    clear() {
        this.map = {};
    }

    print() {
        for (let key in this.map) {
            console.log(key, this.map[key]);
        }
    }
}

const numberMap = new MyMap<number>();
numberMap.setItem('apples', 10);
numberMap.setItem('bananas', 2);
numberMap.print();
numberMap.getItem('apples');

const stringMap = new MyMap<string>();
stringMap.setItem('apples', '10');
stringMap.getItem('apples');
stringMap.print();