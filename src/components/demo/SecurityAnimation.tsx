import { useState } from "react";
import { cn } from "@/lib/utils";

type Attack = 'eavesdrop' | 'tamper' | 'impersonate';

const SecurityAnimation = () => {
  const [activeAttack, setActiveAttack] = useState<Attack>('eavesdrop');

  const attacks: { id: Attack; icon: string; title: string; description: string }[] = [
    { id: 'eavesdrop', icon: '👁️', title: 'Sneaky Listener', description: 'Reads data in transit' },
    { id: 'tamper', icon: '🔄', title: 'Data Changer', description: 'Modifies data secretly' },
    { id: 'impersonate', icon: '🎭', title: 'Fake Client', description: 'Pretends to be real' },
  ];

  return (
    <div className="w-full space-y-6">
      {/* Attack Selection Buttons */}
      <div className="flex flex-wrap justify-center gap-3">
        {attacks.map((attack) => (
          <button
            key={attack.id}
            onClick={() => setActiveAttack(attack.id)}
            className={cn(
              "flex items-center gap-3 px-5 py-3 rounded-2xl border-2 transition-all duration-300 font-medium",
              activeAttack === attack.id
                ? "bg-destructive/20 border-destructive text-destructive scale-105 shadow-lg"
                : "bg-card/50 border-border hover:border-destructive/50 hover:bg-destructive/10"
            )}
          >
            <span className="text-2xl">{attack.icon}</span>
            <div className="text-left">
              <p className="font-bold text-sm">{attack.title}</p>
              <p className="text-xs text-muted-foreground">{attack.description}</p>
            </div>
          </button>
        ))}
      </div>

      {/* Animation Stage */}
      <div className="relative bg-gradient-to-b from-sky-100 via-sky-50 to-green-100 dark:from-sky-900/30 dark:via-background dark:to-green-900/30 rounded-3xl p-8 min-h-[420px] overflow-hidden border-2 border-primary/20">
        
        {/* Attack 1: Eavesdropping - Reading Data in Middle */}
        {activeAttack === 'eavesdrop' && (
          <div className="h-full flex flex-col items-center justify-center animate-fade-in">
            <h3 className="text-xl font-bold text-center text-destructive mb-8">
              👁️ Sneaky Listener Attack!
            </h3>
            
            <div className="relative w-full max-w-2xl h-48">
              {/* Communication Line */}
              <div className="absolute top-1/2 left-[12%] right-[12%] h-4 bg-gradient-to-r from-primary/40 via-primary/60 to-primary/40 rounded-full -translate-y-1/2 shadow-inner">
                {/* Animated moving packets */}
                <div className="absolute w-10 h-10 -top-3 rounded-xl bg-primary/30 border-2 border-primary flex items-center justify-center text-lg shadow-lg animate-move-packet-1">
                  📦
                </div>
                <div className="absolute w-10 h-10 -top-3 rounded-xl bg-primary/30 border-2 border-primary flex items-center justify-center text-lg shadow-lg animate-move-packet-2">
                  📦
                </div>
                <div className="absolute w-10 h-10 -top-3 rounded-xl bg-primary/30 border-2 border-primary flex items-center justify-center text-lg shadow-lg animate-move-packet-3">
                  📦
                </div>
              </div>

              <div className="flex items-center justify-between relative z-10 h-full">
                {/* Client */}
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-2xl bg-client-1 flex items-center justify-center text-4xl shadow-lg border-4 border-white dark:border-gray-800">
                    😊
                  </div>
                  <span className="text-sm font-bold mt-2 bg-card px-3 py-1 rounded-full">Client</span>
                </div>

                {/* Attacker in Middle - Watching packets pass */}
                <div className="flex flex-col items-center relative">
                  <div className={cn(
                    "w-24 h-24 rounded-2xl bg-destructive/20 border-4 border-destructive flex items-center justify-center text-5xl shadow-xl transition-all duration-500",
                    "animate-pulse"
                  )}>
                    🥷
                  </div>
                  <span className="text-sm font-bold mt-2 bg-destructive text-destructive-foreground px-3 py-1 rounded-full">Attacker</span>
                  
                  {/* Eye watching animation */}
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2">
                    <div className="w-12 h-12 rounded-full bg-warning/40 border-2 border-warning flex items-center justify-center animate-bounce-gentle">
                      <span className="text-2xl">👁️</span>
                    </div>
                  </div>
                  
                  {/* Data being read */}
                  <div className="absolute -right-20 top-0 animate-fade-in">
                    <div className="w-16 h-16 rounded-xl bg-warning/20 border-2 border-dashed border-warning flex items-center justify-center">
                      <span className="text-xl">📖</span>
                    </div>
                    <div className="text-xs font-bold text-warning mt-1 text-center">Reading<br/>Data!</div>
                  </div>
                </div>

                {/* Server */}
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-2xl bg-success/20 border-4 border-success flex items-center justify-center text-4xl shadow-lg">
                    🏫
                  </div>
                  <span className="text-sm font-bold mt-2 bg-card px-3 py-1 rounded-full">Server</span>
                </div>
              </div>
            </div>

            {/* Explanation */}
            <div className="mt-8 p-5 bg-destructive/10 rounded-2xl border-2 border-destructive/30 max-w-lg">
              <div className="flex items-start gap-4">
                <span className="text-4xl">😈</span>
                <div>
                  <p className="font-bold text-destructive text-lg">Attacker reads your data!</p>
                  <p className="text-muted-foreground mt-1">
                    When data travels without protection, anyone in the middle can secretly read it
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Attack 2: Man-in-the-Middle - Changing Data */}
        {activeAttack === 'tamper' && (
          <div className="h-full flex flex-col items-center justify-center animate-fade-in">
            <h3 className="text-xl font-bold text-center text-destructive mb-8">
              🔄 Data Changer Attack!
            </h3>
            
            <div className="relative w-full max-w-2xl h-48">
              {/* Left Communication Line - Client to Attacker */}
              <div className="absolute top-1/2 left-[12%] w-[30%] h-4 bg-gradient-to-r from-primary/50 to-destructive/50 rounded-full -translate-y-1/2 shadow-inner">
                {/* Good packet coming in */}
                <div className="absolute w-10 h-10 -top-3 rounded-xl bg-primary/30 border-2 border-primary flex items-center justify-center text-lg shadow-lg animate-move-to-middle">
                  📦
                </div>
              </div>
              
              {/* Right Communication Line - Attacker to Server */}
              <div className="absolute top-1/2 right-[12%] w-[30%] h-4 bg-gradient-to-r from-destructive/50 to-warning/50 rounded-full -translate-y-1/2 shadow-inner">
                {/* Bad packet going out */}
                <div className="absolute w-10 h-10 -top-3 rounded-xl bg-destructive/30 border-2 border-destructive flex items-center justify-center text-lg shadow-lg animate-move-from-middle">
                  💀
                </div>
              </div>

              <div className="flex items-center justify-between relative z-10 h-full">
                {/* Client sending real data */}
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-2xl bg-client-2 flex items-center justify-center text-4xl shadow-lg border-4 border-white dark:border-gray-800">
                    😊
                  </div>
                  <span className="text-sm font-bold mt-2 bg-card px-3 py-1 rounded-full">Client</span>
                </div>

                {/* Attacker swapping in the middle */}
                <div className="flex flex-col items-center relative">
                  <div className="w-24 h-24 rounded-2xl bg-destructive/20 border-4 border-destructive flex items-center justify-center text-5xl shadow-xl animate-pulse">
                    🦹
                  </div>
                  <span className="text-sm font-bold mt-2 bg-destructive text-destructive-foreground px-3 py-1 rounded-full">Attacker</span>
                  
                  {/* Swap arrows */}
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 flex items-center gap-2">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 border border-primary flex items-center justify-center text-sm animate-bounce-gentle">
                      📦
                    </div>
                    <span className="text-xl">➡️</span>
                    <div className="w-10 h-10 rounded-lg bg-destructive/30 border border-destructive flex items-center justify-center text-sm animate-bounce-gentle">
                      💀
                    </div>
                  </div>
                </div>

                {/* Server receiving fake data */}
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-2xl bg-warning/20 border-4 border-warning flex items-center justify-center text-4xl shadow-lg animate-shake">
                    😟
                  </div>
                  <span className="text-sm font-bold mt-2 bg-card px-3 py-1 rounded-full">Server</span>
                </div>
              </div>
            </div>

            {/* Explanation */}
            <div className="mt-8 p-5 bg-destructive/10 rounded-2xl border-2 border-destructive/30 max-w-lg">
              <div className="flex items-start gap-4">
                <span className="text-4xl">🦹</span>
                <div>
                  <p className="font-bold text-destructive text-lg">Attacker swaps your data!</p>
                  <p className="text-muted-foreground mt-1">
                    The attacker grabs real data and replaces it with fake/poisoned data before it reaches the server
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Attack 3: Fake Client */}
        {activeAttack === 'impersonate' && (
          <div className="h-full flex flex-col items-center justify-center animate-fade-in">
            <h3 className="text-xl font-bold text-center text-destructive mb-8">
              🎭 Fake Client Attack!
            </h3>
            
            <div className="relative w-full max-w-2xl h-48">
              {/* Communication Lines from all clients */}
              <div className="absolute top-[35%] left-[25%] right-[15%] h-4 bg-gradient-to-r from-primary/40 to-success/40 rounded-full -translate-y-1/2 shadow-inner">
                {/* Real packets */}
                <div className="absolute w-8 h-8 -top-2 rounded-lg bg-primary/30 border-2 border-primary flex items-center justify-center text-sm shadow-lg animate-move-packet-1">
                  📦
                </div>
              </div>
              
              {/* Fake client line */}
              <div className="absolute top-[65%] left-[35%] right-[15%] h-4 bg-gradient-to-r from-destructive/50 to-warning/50 rounded-full -translate-y-1/2 shadow-inner">
                {/* Malicious packet */}
                <div className="absolute w-8 h-8 -top-2 rounded-lg bg-destructive/40 border-2 border-destructive flex items-center justify-center text-sm shadow-lg animate-move-packet-2">
                  💀
                </div>
              </div>

              <div className="flex items-start justify-between relative z-10 h-full pt-4">
                {/* Real Clients */}
                <div className="flex flex-col items-center gap-2">
                  <div className="flex gap-2">
                    <div className="w-14 h-14 rounded-xl bg-client-1 flex items-center justify-center text-2xl shadow-lg border-3 border-white dark:border-gray-800">
                      😊
                    </div>
                    <div className="w-14 h-14 rounded-xl bg-client-3 flex items-center justify-center text-2xl shadow-lg border-3 border-white dark:border-gray-800">
                      😊
                    </div>
                  </div>
                  <span className="text-xs font-bold bg-success/20 text-success px-2 py-1 rounded-full">Real Clients ✓</span>
                </div>

                {/* Fake Client (Attacker) */}
                <div className="flex flex-col items-center relative mt-12">
                  <div className="relative">
                    {/* Mask falling animation */}
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-2xl animate-mask-fall opacity-70">
                      😊
                    </div>
                    <div className="w-16 h-16 rounded-2xl bg-destructive/20 border-4 border-destructive flex items-center justify-center text-3xl shadow-xl animate-bounce-gentle">
                      🎭
                    </div>
                  </div>
                  <span className="text-xs font-bold mt-1 bg-destructive text-destructive-foreground px-2 py-1 rounded-full">
                    Fake! ✗
                  </span>
                </div>

                {/* Server confused */}
                <div className="flex flex-col items-center mt-4">
                  <div className="w-20 h-20 rounded-2xl bg-warning/20 border-4 border-warning flex items-center justify-center text-4xl shadow-lg animate-shake">
                    🤔
                  </div>
                  <span className="text-sm font-bold mt-2 bg-card px-3 py-1 rounded-full">Server</span>
                  <div className="mt-1 text-center">
                    <span className="text-2xl">❓</span>
                    <p className="text-xs text-warning font-bold">Who is real?</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Explanation */}
            <div className="mt-8 p-5 bg-destructive/10 rounded-2xl border-2 border-destructive/30 max-w-lg">
              <div className="flex items-start gap-4">
                <span className="text-4xl">🎭</span>
                <div>
                  <p className="font-bold text-destructive text-lg">Attacker pretends to be a real client!</p>
                  <p className="text-muted-foreground mt-1">
                    A malicious user wears a "mask" to look like a legitimate client and sends poisoned data to the server
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Click to Animate Hint */}
      <p className="text-center text-sm text-muted-foreground">
        👆 Click an attack button above to see the animation
      </p>
    </div>
  );
};

export default SecurityAnimation;
