import { Schema } from 'mongoose';

export const contactsSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: false,
    },
    isFavourite: {
      type: Boolean,
      required: true,
      default: false,
    },
    contactType: {
      type: String,
      enum: ['work', 'home', 'personal'],
      default: 'personal',
      required: true,
    },
    createdAt: {
      timestamps: true,
    },
    updatedAt: {
      timestamps: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);
