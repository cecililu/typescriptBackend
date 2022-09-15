import { CustomError } from "./CustomError";

export class BadRequest extends CustomError{
    constructor(public message:string ){
        super(message)
    }
   statusCode=400;

    serializeErrors(){
    return { message : this.message}
   }
}