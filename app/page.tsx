import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Github, Mail } from "lucide-react"

export default function Home() {
  return (
<<<<<<< HEAD
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100 flex items-center justify-center px-4">
      <div className="max-w-4xl w-full">
        <Card className="border border-slate-800 bg-slate-900/70 backdrop-blur-xl shadow-2xl">
          <CardHeader className="flex flex-col gap-2 pb-2 md:pb-4">
            <div className="flex items-center justify-between gap-2">
              <Badge
                variant="outline"
                className="border-emerald-400 text-emerald-300 bg-emerald-400/10"
              >
                Site is live 🚀
              </Badge>

              <span className="text-xs md:text-sm text-slate-400">
                Deployed on Vercel
              </span>
            </div>

            <CardTitle className="text-3xl md:text-4xl font-semibold tracking-tight">
              Hey, I&apos;m Saurabh.
            </CardTitle>

            <CardDescription className="text-slate-300 text-base md:text-lg">
              This place is just getting warmed up. The domain is wired, the
              code is shipped, and more is on the way. For now: enjoy Messi
              waving you in.
            </CardDescription>
          </CardHeader>

          <CardContent className="flex flex-col md:flex-row gap-8 md:gap-10 pt-4">
            {/* Messi image */}
            <div className="relative w-full md:w-1/3 aspect-[3/4] rounded-3xl overflow-hidden border border-slate-800 bg-slate-900">
              <Image
                src="/messi-wave.jpg"
                alt="Lionel Messi waving"
                fill
                priority
                className="object-cover"
              />
            </div>

            {/* Text / meta area */}
            <div className="flex-1 flex flex-col justify-between gap-6">
              <div className="space-y-3">
                <p className="text-sm md:text-base text-slate-300 leading-relaxed">
                  I&apos;m building this space into a home for my projects,
                  experiments, and whatever else I&apos;m obsessed with at the
                  moment.
                </p>
                <p className="text-sm md:text-base text-slate-400">
                  Check back soon for more. The pipeline is ready —
                  I just have to ship.
                </p>
              </div>

              <Separator className="bg-slate-800" />

              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-6">
                {/* Tech stack pills */}
                <div className="flex flex-wrap gap-2 text-xs md:text-sm text-slate-300">
                  <span className="px-3 py-1 rounded-full border border-slate-700 bg-slate-900/70">
                    Next.js
                  </span>
                  <span className="px-3 py-1 rounded-full border border-slate-700 bg-slate-900/70">
                    shadcn/ui
                  </span>
                  <span className="px-3 py-1 rounded-full border border-slate-700 bg-slate-900/70">
                    Tailwind CSS
                  </span>
                  <span className="px-3 py-1 rounded-full border border-slate-700 bg-slate-900/70">
                    TypeScript
                  </span>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3">
                  <Button asChild>
                    <a
                      href="mailto:saurabhrj2001@gmail.com.com"
                      className="flex items-center gap-2"
                    >
                      <Mail className="h-4 w-4" />
                      <span>Say hi</span>
                    </a>
                  </Button>

                  <Button variant="outline" size="icon" asChild>
                    <a
                      href="https://github.com/SaurabhJirli"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
=======
    <main>
      <h1>Hey, I’m Saurabh 👋</h1>
      <p>Site is live, more coming soon.</p>
    </main>
  );
>>>>>>> f0b0d83769e5372a8fd4cb066466a30a3066dfcf
}

