import { SignIn } from "@clerk/nextjs";
import { AuthNotConfigured } from "@/components/AuthNotConfigured";
import { clerkAppearance } from "@/lib/clerk-appearance";

export default function ConnexionPage() {
  if (!process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY) {
    return <AuthNotConfigured />;
  }

  return (
    <div className="flex-1 flex items-center justify-center px-6 py-16">
      <SignIn
        path="/connexion"
        routing="path"
        signUpUrl="/inscription"
        appearance={clerkAppearance}
      />
    </div>
  );
}
