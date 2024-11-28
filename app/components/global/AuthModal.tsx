import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";

import Image from "next/image";
import GooleLogo from "@/public/google.svg";
import GitHubLogo from "@/public/github.svg";
import { googleSignInAction, githubSignInAction } from "@/app/lib/actions";
import { GitHubAuthButton, GoogleAuthButton } from "../SubmitButton";

export function AuthModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-indigo-400 hover:bg-indigo-500 text-white">Try For Free</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[360px]">
        <DialogHeader className="flex-row justify-center items-center gap-x-2">
          <h4>
            <span className="bg-gradient-to-r from-[#f78fb3] via-[#f8a5c2] to-[#c8d6e5]
                 text-4xl font-bold text-transparent bg-clip-text">
              Planzy</span>
          </h4>
        </DialogHeader>
        <div className="flex flex-col gap-3 mt-5">
          <form className="w-full" action={googleSignInAction}>
            <GoogleAuthButton />
          </form>

          <form className="w-full" action={githubSignInAction}>
            <GitHubAuthButton />
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}