import { AuthForm } from "@/components/site/AuthForm";
import { AuthNotConfigured } from "@/components/AuthNotConfigured";
import { firebaseEnabled } from "@/lib/firebase";

export default function ConnexionPage() {
  if (!firebaseEnabled) {
    return <AuthNotConfigured />;
  }

  return (
    <div className="flex-1 flex items-center justify-center px-6 py-16">
      <AuthForm mode="connexion" />
    </div>
  );
}
