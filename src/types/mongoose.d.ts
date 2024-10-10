import mongoose from 'mongoose';

declare global {
  let mongoose: {
    conn: mongoose.Mongoose | null;
    promise: Promise<mongoose.Mongoose> | null;
  };
}

// This file needs to be a module to make the global declaration effective
export {};
