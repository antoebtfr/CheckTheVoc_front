export class Vocabulary {
    id?: number | undefined;
    name?: string | undefined;
    book: string | undefined;
    description?: string | undefined;

    constructor(input?){
        Object.assign(input);
    }
}
