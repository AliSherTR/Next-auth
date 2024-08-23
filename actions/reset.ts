"use server";

import * as z from "zod";

import { ResetSchema } from "@/schemas";
import { getPasswordResetTokenByEmail } from "@/data/password-token";
import { db } from "@/lib/db";
import { getUserByEmail } from "@/data/user";
import { sendPasswordResetEmail } from "@/lib/mail";
import { generatePasswordResetToken } from "@/lib/verification-token";

export async function reset(values: z.infer<typeof ResetSchema>) {
    const validatedFields = ResetSchema.safeParse(values);

    if (!validatedFields.success) {
        return { error: "Please input valid email address" };
    }

    const { email } = validatedFields.data;
    const existingUser = await getUserByEmail(email);

    if (!existingUser) {
        return { error: "Email not found!" };
    }

    const passwordResetToken = await generatePasswordResetToken(email);
    await sendPasswordResetEmail({
        email: passwordResetToken.email,
        token: passwordResetToken.token,
    });

    return { success: "Reset email sent!" };
}
