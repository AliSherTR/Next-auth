import { db } from "@/lib/db";

export const getVerificationTokenByEmail = async (email: string) => {
    try {
        return await db.verificationToken.findFirst({
            where: {
                email,
            },
        });
    } catch {
        return null;
    }
};

export const getVerificationTokenById = async (id: string) => {
    try {
        return await db.verificationToken.findUnique({
            where: {
                id,
            },
        });
    } catch {
        return null;
    }
};
