import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendVerificationEmail = async (email: string, token: string) => {
    const emailUrl = `http://localhost:3000/auth/new-verification?token=${token}`;

    await resend.emails.send({
        from: "onboarding@resend.dev",
        to: email,
        subject: "Verify your account",
        html: `<p>Click <a href="${emailUrl}">here</a> to verify.</p>`,
    });
};

interface passwordResetParams {
    email: string;
    token: string;
}

export const sendPasswordResetEmail = async ({
    email,
    token,
}: passwordResetParams) => {
    const passwordResetUrl = `http://localhost:3000/auth/new-password?token=${token}`;

    await resend.emails.send({
        from: "onboarding@resend.dev",
        to: email,
        subject: "Reset your password",
        html: `<p>Click <a href="${passwordResetUrl}">here</a> to reset your password</p>`,
    });
};
