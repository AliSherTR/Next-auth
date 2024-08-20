"use server";

import { getUserByEmail } from "@/data/user";
import { db } from "@/lib/db";
import { RegisterSchema } from "@/schemas";
import bcrypt from "bcrypt";
import * as z from "zod";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
    const validated = RegisterSchema.safeParse(values);

    if (!validated.success) {
        return { error: "Invalid fields" };
    }

    const { email, name, password } = validated.data;
    const existingUser = await getUserByEmail(email);
    if (existingUser) return { error: "User already exists" };
    const hashedPassword = await bcrypt.hash(password, 10);

    await db.user.create({
        data: {
            name,
            email,
            password: hashedPassword,
        },
    });

    // TODO: send verification email
    return { success: "User Created" };
};
