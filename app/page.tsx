import LoginButton from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

const font = Poppins({
    subsets: ["latin"],
    weight: ["600"],
});
export default function Home() {
    return (
        <main className=" flex h-screen flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top, _var(--tw-gradient-stops))] from-sky-400 to-blue-800] bg-sky-400">
            <div className="space-y-6 text-center">
                <h1
                    className={cn(
                        " text-6xl text-white drop-shadow-md font-semibold",
                        font.className
                    )}
                >
                    🔐 Auth
                </h1>
                <p className="text-white text-lg">
                    A simple authentication service
                </p>
                <div>
                    <LoginButton>
                        <Button variant="secondary" size={"lg"}>
                            Sign In
                        </Button>
                    </LoginButton>
                </div>
            </div>
        </main>
    );
}
