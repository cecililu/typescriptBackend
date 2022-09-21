import { CustomError } from "./CustomError";

export class NotAuthorized extends CustomError{
    constructor(public message:string ){
        super(message)
    }
   statusCode=401;

    serializeErrors(){
    return { message : this.message}
   }
}