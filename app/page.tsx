import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Mail } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100 flex items-center justify-center px-4">
      <div className="max-w-xl w-full">
        <Card className="border border-slate-800 bg-slate-900/70 backdrop-blur-xl shadow-2xl">
          <CardContent className="flex flex-col items-center text-center gap-8 py-10">
          
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-amber-200 drop-shadow-[0_0_10px_rgba(251,191,36,0.2)]">
              Hey, Saurabh here.
            </h1>

        
            <div className="relative w-56 md:w-64 aspect-[3/4] rounded-3xl overflow-hidden border border-slate-800 bg-slate-900">
              <Image
                src="/messi-wave.jpg"
                alt="Lionel Messi waving"
                fill
                priority
                className="object-cover"
              />
            </div>

          
            <p className="text-base md:text-lg text-slate-200">
              Site is live, more coming soon!
            </p>

          
            <div className="flex items-center gap-3">
              <Button asChild>
                <a
                  href="saurabhrj2001@gmail.com"
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
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
