"use server";
import { cache } from "react";
import { revalidatePath, unstable_cache } from "next/cache";
import client from "@/lib/mongodb";
import { redirect } from "next/navigation";

import { ObjectId } from "mongodb";

// Define the Movie interface
interface Profile {
  description: string;
  slug: string[];
  topic: string;
  content: string;
  img: string;
  createdAt: Date;
  updatedAt: Date;
}

function slugify(str: any) {
  return String(str)
    .normalize("NFKD") // split accented characters into their base characters and diacritical marks
    .replace(/[\u0300-\u036f]/g, "") // remove all the accents, which happen to be all in the \u03xx UNICODE block.
    .trim() // trim leading or trailing whitespace
    .toLowerCase() // convert to lowercase
    .replace(/[^a-z0-9 -]/g, "") // remove non-alphanumeric characters
    .replace(/\s+/g, "-") // replace spaces with hyphens
    .replace(/-+/g, "-"); // remove consecutive hyphens
}

export const getProfiles = unstable_cache(
  async () => {
    const db = client.db("corporate");
    const profiles = await db.collection("profiles").find({}).toArray();
    return profiles;
  },
  ["profiles"],
  { revalidate: 1, tags: ["profiles"] }
);

export const getProfile = async (slug: string) => {
  const db = client.db("corporate");
  const profile = await db.collection("profiles").findOne({ slug: slug });
  return profile;
};
