export class Book {
    id?: number | undefined;
    cover?: string | undefined;
    title: string | undefined;
    description?: string | undefined;

    constructor(input?){
        Object.assign(input);
    }
}
