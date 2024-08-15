import { CardWrapper } from "@/components/auth/card-wrapper";
import { LoginForm } from "@/components/auth/LoginForm";
import React from "react";

export default function LoginPage() {
    return (
        <CardWrapper
            headerLabel="Welcome Back"
            backButtonLabel="Don't have an account"
            backButtonHref="/auth/register"
            showSocial
        >
            <LoginForm />
        </CardWrapper>
    );
}
