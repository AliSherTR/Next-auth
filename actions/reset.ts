"use server";

import * as z from "zod";

import { ResetSchema } from "@/schemas";

export async function reset(values: z.infer<typeof ResetSchema>) {
    return { error: "love you", success: "fuck you" };
}
