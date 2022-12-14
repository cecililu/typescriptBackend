import mongoose from "mongoose";

export enum Role {
    admin = "admin",
    user = "user", }

   
    
    interface UserAttrs {
      email: string;
      password: string;
      role: Role;
      name?: string;
    }
    
    interface UserModel extends mongoose.Model<UserDoc> {
      build(attrs: UserAttrs): UserDoc;
    }
    
    export interface UserDoc extends mongoose.Document, UserAttrs {
      email: string;
      password: string;
      role: Role;
      name?: string;
    
      createdAt: Date;
      updatedAt: Date;
    }
    
    const userSchema = new mongoose.Schema<UserDoc>(
      {
        email: String,
        password: String,
        role: {
          type: String,
          enum: Role,
          default: Role.user,
        },
        name: String,
      },
      {
        toJSON: {
          transform(doc, ret) {
            delete ret.password;
            ret.id = ret._id;
            delete ret._id;
            delete ret.__v;
          },
        },
        timestamps: true,
      }
    );
    
    userSchema.statics.build = (attrs: UserAttrs) => {
      return new User(attrs);
    };
    
    const User = mongoose.model<UserDoc, UserModel>("User", userSchema);
    
    export { User };