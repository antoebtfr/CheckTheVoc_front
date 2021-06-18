export class Vocabulary {
    id?: number | undefined;
    name?: string | undefined;
    bookId?: string | undefined;
    definition: string | undefined;
    createdAdd?: Date | undefined;
    

    constructor(input?){
        Object.assign(input);
    }
}
