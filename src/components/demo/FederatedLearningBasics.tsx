
import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Server, Smartphone, Brain, ArrowUp, ArrowDown, Image, FileText, BarChart3, Play, Pause, RotateCcw } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TraditionalMLDiagram from "./TraditionalMLDiagram.tsx";

const FederatedLearningBasics = () => {
  const [currentPhase, setCurrentPhase] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  const phases = [
    { 
      name: "Data Collection", 
      description: "Each device has its own unique data - photos, messages, or health records",
      duration: 3000 
    },
    { 
      name: "Local Training", 
      description: "Devices train AI models on their own data privately - nothing leaves the device!",
      duration: 4000 
    },
    { 
      name: "Send Updates", 
      description: "Only the learned patterns (not raw data) are sent to the central server",
      duration: 3000 
    },
    { 
      name: "Server Aggregation", 
      description: "The server combines all the patterns to improve the global model",
      duration: 3000 
    },
    { 
      name: "Distribute Model", 
      description: "The improved model is sent back to all devices - everyone benefits!",
      duration: 3000 
    },
  ];

  useEffect(() => {
    if (!isPlaying) return;

    const phaseInterval = setInterval(() => {
      setCurrentPhase((prev) => (prev + 1) % phases.length);
      setProgress(0);
    }, phases[currentPhase].duration);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        return prev + (100 / (phases[currentPhase].duration / 50));
      });
    }, 50);

    return () => {
      clearInterval(phaseInterval);
      clearInterval(progressInterval);
    };
  }, [isPlaying, currentPhase, phases]);

  const devices = [
    {
      id: 1,
      name: "Phone",
      color: "device-1",
      dataType: "Photos & Cats",
      icon: Image,
      data: ["📸", "🐱", "🌅", "🎨"],
      uniqueData: ["📸", "🌅"],
      sharedData: ["🐱", "🎨"]
    },
    {
      id: 2,
      name: "Laptop",
      color: "device-2",
      dataType: "Cats & Docs",
      icon: FileText,
      data: ["🐱", "📧", "📝", "🎨"],
      uniqueData: ["📧", "📝"],
      sharedData: ["🐱", "🎨"]
    },
    {
      id: 3,
      name: "Watch",
      color: "device-3",
      dataType: "Health & Dogs",
      icon: BarChart3,
      data: ["❤️", "🏃", "🐕", "😴"],
      uniqueData: ["❤️", "🏃", "😴"],
      sharedData: ["🐕"]
    },
  ];

  const handleReset = () => {
    setCurrentPhase(0);
    setProgress(0);
  };

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Federated Learning Explained
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Learn AI Together Without Sharing Private Data
          </p>
        </div>

        {/* Comparison Tabs */}
        <Tabs defaultValue="federated" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-6">
            <TabsTrigger value="federated">Federated Learning</TabsTrigger>
            <TabsTrigger value="traditional">Traditional ML</TabsTrigger>
          </TabsList>
          
          <TabsContent value="federated" className="space-y-8">
            {/* Controls */}
            <Card className="p-6 bg-card/50 backdrop-blur">
              <div className="flex items-center justify-center gap-4">
                <Button
                  onClick={() => setIsPlaying(!isPlaying)}
                  variant="outline"
                  size="lg"
                  className="gap-2"
                >
                  {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                  {isPlaying ? "Pause" : "Play"}
                </Button>
                <Button
                  onClick={handleReset}
                  variant="outline"
                  size="lg"
                  className="gap-2"
                >
                  <RotateCcw className="w-5 h-5" />
                  Reset
                </Button>
              </div>
            </Card>

        {/* Current Phase Display */}
        <Card className="p-8 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 border-primary/20">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">
                Phase {currentPhase + 1}: {phases[currentPhase].name}
              </h2>
              <span className="text-sm font-medium text-muted-foreground">
                {currentPhase + 1} / {phases.length}
              </span>
            </div>
            <p className="text-lg text-muted-foreground">
              {phases[currentPhase].description}
            </p>
            <Progress value={progress} className="h-2" />
          </div>
        </Card>

        {/* Main Visualization */}
        <div className="relative">
          {/* Server at Top */}
          <div className="flex justify-center mb-16">
            <div className={`relative transition-all duration-700 ${
              currentPhase === 3 || currentPhase === 4 ? 'scale-110' : 'scale-100'
            }`}>
              <Card className={`p-8 relative overflow-hidden transition-all duration-700 ${
                currentPhase === 3 ? 'bg-warning/20 border-warning shadow-2xl shadow-warning/50' :
                currentPhase === 4 ? 'bg-success/20 border-success shadow-2xl shadow-success/50' :
                'bg-card/50 border-border'
              }`}>
                <div className="relative z-10 text-center">
                  <Server className={`w-16 h-16 mx-auto mb-3 transition-all duration-700 ${
                    currentPhase === 3 ? 'text-warning animate-pulse' :
                    currentPhase === 4 ? 'text-success' :
                    'text-muted-foreground'
                  }`} />
                  <p className="font-semibold text-lg">Central Server</p>
                  {currentPhase === 3 && (
                    <p className="text-sm text-muted-foreground mt-2">Combining patterns...</p>
                  )}
                  {currentPhase === 4 && (
                    <p className="text-sm text-muted-foreground mt-2">Sending improved model...</p>
                  )}
                </div>
                
                {/* Aggregation Animation */}
                {currentPhase === 3 && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 border-4 border-warning rounded-full animate-pulse-ring" />
                    <div className="w-32 h-32 border-4 border-warning rounded-full animate-pulse-ring absolute" style={{ animationDelay: '0.5s' }} />
                  </div>
                )}
              </Card>
            </div>
          </div>

          {/* Connection Lines and Data Flow */}
          <div className="relative h-40 mb-8">
            {devices.map((device, index) => {
              const leftPosition = `${index * 33.33 + 16.66}%`;
              const isActive = currentPhase === 2 || currentPhase === 4;
              
              return (
                <div key={device.id} className="absolute top-0 bottom-0" style={{ left: leftPosition, transform: 'translateX(-50%)' }}>
                  {/* Connection Line */}
                  <div className={`w-0.5 h-full mx-auto transition-all duration-500 ${
                    isActive ? `bg-${device.color}` : 'bg-border'
                  }`} style={{ opacity: isActive ? 0.6 : 0.3 }} />
                  
                  {/* Animated Data Packets - Upload (Phase 2) */}
                  {currentPhase === 2 && (
                    <>
                      <div 
                        className="absolute left-1/2 -translate-x-1/2 animate-packet-up"
                        style={{ 
                          bottom: '0%',
                          animationDelay: `${index * 0.3}s`
                        }}
                      >
                        <div className={`w-8 h-8 rounded-full bg-${device.color} flex items-center justify-center text-white text-xs font-bold shadow-lg`}>
                          🧠
                        </div>
                      </div>
                      <div 
                        className="absolute left-1/2 -translate-x-1/2 animate-packet-up"
                        style={{ 
                          bottom: '0%',
                          animationDelay: `${index * 0.3 + 1}s`
                        }}
                      >
                        <div className={`w-6 h-6 rounded-full bg-${device.color} shadow-lg`} />
                      </div>
                    </>
                  )}
                  
                  {/* Animated Data Packets - Download (Phase 4) */}
                  {currentPhase === 4 && (
                    <>
                      <div 
                        className="absolute left-1/2 -translate-x-1/2 animate-packet-down"
                        style={{ 
                          top: '0%',
                          animationDelay: `${index * 0.3}s`
                        }}
                      >
                        <div className="w-8 h-8 rounded-full bg-success flex items-center justify-center text-white text-xs font-bold shadow-lg shadow-success/50">
                          ✨
                        </div>
                      </div>
                      <div 
                        className="absolute left-1/2 -translate-x-1/2 animate-packet-down"
                        style={{ 
                          top: '0%',
                          animationDelay: `${index * 0.3 + 1}s`
                        }}
                      >
                        <div className="w-6 h-6 rounded-full bg-success shadow-lg shadow-success/50" />
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>

          {/* Devices Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {devices.map((device, index) => {
              const DataIcon = device.icon;
              
              return (
                <div key={device.id} className="space-y-4">
                  {/* Device Card */}
                  <Card className={`p-6 relative overflow-hidden transition-all duration-700 ${
                    currentPhase === 0 ? `bg-${device.color}/20 border-${device.color} shadow-lg shadow-${device.color}/30` :
                    currentPhase === 1 ? `bg-${device.color}/30 border-${device.color} shadow-xl shadow-${device.color}/40 scale-105` :
                    currentPhase === 2 ? `bg-${device.color}/20 border-${device.color} shadow-lg` :
                    currentPhase === 4 ? `bg-success/20 border-success shadow-lg shadow-success/30` :
                    'bg-card/50 border-border'
                  }`}>
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <Smartphone className={`w-12 h-12 transition-all duration-500 ${
                          currentPhase === 1 ? `text-${device.color} animate-pulse` :
                          currentPhase === 4 ? 'text-success' :
                          `text-${device.color}`
                        }`} />
                        <span className={`text-sm font-semibold px-3 py-1 rounded-full ${
                          currentPhase === 0 ? `bg-${device.color}/30 text-${device.color}` :
                          currentPhase === 1 ? `bg-${device.color}/40 text-${device.color}` :
                          currentPhase === 4 ? 'bg-success/30 text-success' :
                          'bg-muted text-muted-foreground'
                        }`}>
                          {device.name}
                        </span>
                      </div>

                      {/* Data Display */}
                      <div className="mb-4">
                        <div className="flex items-center gap-2 mb-2">
                          <DataIcon className="w-4 h-4" />
                          <p className="text-sm font-medium">{device.dataType}</p>
                        </div>
                        <div className="space-y-2">
                          {/* Show data with labels */}
                          <div className={`flex gap-2 flex-wrap transition-all duration-500 ${
                            currentPhase === 0 ? 'scale-110' : 'scale-100'
                          }`}>
                            {device.data.map((item, i) => {
                              const isShared = device.sharedData.includes(item);
                              return (
                                <div key={i} className="relative group">
                                  <div
                                    className={`text-2xl p-2 rounded-lg transition-all duration-300 ${
                                      currentPhase === 0 ? `bg-${device.color}/20 animate-float` : 'bg-muted/50'
                                    } ${isShared ? 'ring-2 ring-primary/40' : ''}`}
                                    style={{ animationDelay: `${i * 0.2}s` }}
                                  >
                                    {item}
                                  </div>
                                  {isShared && currentPhase === 0 && (
                                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full animate-pulse" 
                                         title="Shared with other devices" />
                                  )}
                                </div>
                              );
                            })}
                          </div>
                          {currentPhase === 0 && (
                            <p className="text-xs text-muted-foreground">
                              <span className="inline-flex items-center gap-1">
                                <span className="w-2 h-2 bg-primary rounded-full"></span>
                                = Also on other devices
                              </span>
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Training Progress */}
                      {currentPhase === 1 && (
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Brain className="w-4 h-4 animate-pulse" />
                              <p className="text-sm font-medium">Training...</p>
                            </div>
                            <p className="text-xs text-muted-foreground">{Math.round(progress)}%</p>
                          </div>
                          <Progress value={progress} className={`h-2 bg-muted`} />
                        </div>
                      )}

                      {/* Status Messages */}
                      {currentPhase === 2 && (
                        <div className="flex items-center gap-2 text-sm">
                          <ArrowUp className="w-4 h-4 animate-bounce" />
                          <p>Sending model updates...</p>
                        </div>
                      )}

                      {currentPhase === 4 && (
                        <div className="flex items-center gap-2 text-sm text-success">
                          <ArrowDown className="w-4 h-4 animate-bounce" />
                          <p>Receiving improved model!</p>
                        </div>
                      )}
                    </div>

                    {/* Background Glow */}
                    {(currentPhase === 0 || currentPhase === 1) && (
                      <div className={`absolute inset-0 bg-gradient-radial from-${device.color}/20 to-transparent`} />
                    )}
                  </Card>

                  {/* Privacy Notice */}
                  {currentPhase === 0 && (
                    <Card className="p-3 bg-muted/50 border-dashed">
                      <p className="text-xs text-center text-muted-foreground">
                        🔒 Data stays on device
                      </p>
                    </Card>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Key Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <Card className="p-6 bg-gradient-to-br from-primary/10 to-transparent hover:shadow-lg transition-all duration-300">
            <div className="text-center space-y-3">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/20 flex items-center justify-center">
                <span className="text-3xl">🔒</span>
              </div>
              <h3 className="font-bold text-lg">Privacy First</h3>
              <p className="text-sm text-muted-foreground">
                Your personal data never leaves your device. Only anonymous patterns are shared.
              </p>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-secondary/10 to-transparent hover:shadow-lg transition-all duration-300">
            <div className="text-center space-y-3">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-secondary/20 flex items-center justify-center">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="font-bold text-lg">Collaborative</h3>
              <p className="text-sm text-muted-foreground">
                Everyone contributes to improve the AI, but no one sees each other's data.
              </p>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-accent/10 to-transparent hover:shadow-lg transition-all duration-300">
            <div className="text-center space-y-3">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-accent/20 flex items-center justify-center">
                <span className="text-3xl">📈</span>
              </div>
              <h3 className="font-bold text-lg">Better Together</h3>
              <p className="text-sm text-muted-foreground">
                The combined knowledge from many devices creates smarter AI for everyone.
              </p>
            </div>
          </Card>
        </div>

            {/* Simple Explanation */}
            <Card className="p-8 bg-gradient-to-br from-card to-muted/30">
              <h3 className="text-2xl font-bold mb-4 text-center">Think of it like...</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🎓</span>
                    <div>
                      <p className="font-semibold">Study Group</p>
                      <p className="text-sm text-muted-foreground">
                        Everyone studies their own notes, then shares what they learned - not their personal notes.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🍳</span>
                    <div>
                      <p className="font-semibold">Recipe Improvement</p>
                      <p className="text-sm text-muted-foreground">
                        Chefs try recipes at home, then share improvements - not their secret ingredients.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="traditional">
            <TraditionalMLDiagram />
          </TabsContent>
        </Tabs>

        {/* Key Differences */}
        <Card className="p-8 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 border-primary/20">
          <h3 className="text-2xl font-bold mb-6 text-center">Key Differences</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-success">
                <div className="w-12 h-12 rounded-full bg-success/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">✅</span>
                </div>
                <div>
                  <p className="font-bold">Federated Learning</p>
                  <p className="text-sm text-muted-foreground">Data stays private on devices</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-success">
                <div className="w-12 h-12 rounded-full bg-success/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">✅</span>
                </div>
                <div>
                  <p className="font-bold">Works with diverse data</p>
                  <p className="text-sm text-muted-foreground">Each device can have different or overlapping data types</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-destructive">
                <div className="w-12 h-12 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">⚠️</span>
                </div>
                <div>
                  <p className="font-bold">Traditional ML</p>
                  <p className="text-sm text-muted-foreground">All data sent to central server</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-destructive">
                <div className="w-12 h-12 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">⚠️</span>
                </div>
                <div>
                  <p className="font-bold">Privacy & security risks</p>
                  <p className="text-sm text-muted-foreground">Single point of failure, data breaches possible</p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default FederatedLearningBasics;












// import { useState, useEffect } from "react";
// import { Card } from "@/components/ui/card";
// import { Server, Smartphone, Brain, ArrowRight, Database } from "lucide-react";

// const FederatedLearningBasics = () => {
//   const [activeStep, setActiveStep] = useState(0);
//   const [dataFlowing, setDataFlowing] = useState(false);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveStep((prev) => (prev + 1) % 4);
//       setDataFlowing(true);
//       setTimeout(() => setDataFlowing(false), 1000);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   const steps = [
//     { icon: Smartphone, label: "Local Devices", color: "primary" },
//     { icon: Brain, label: "Train Locally", color: "secondary" },
//     { icon: ArrowRight, label: "Send Updates", color: "success" },
//     { icon: Server, label: "Global Model", color: "warning" },
//   ];

//   return (
//     <div className="space-y-12">
//       {/* Introduction */}
//       <Card className="p-8 md:p-12 bg-gradient-to-br from-card to-accent/30 backdrop-blur border-primary/20">
//         <div className="text-center mb-8">
//           <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
//             What is Federated Learning?
//           </h2>
//           <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
//             A distributed machine learning approach where multiple devices collaboratively train a model 
//             <span className="font-semibold text-primary"> without sharing raw data</span>
//           </p>
//         </div>
//       </Card>

//       {/* Animated Process Diagram */}
//       <Card className="p-8 md:p-12 bg-card/50 backdrop-blur border-primary/10">
//         <h3 className="text-2xl font-bold mb-8 text-center">How It Works</h3>
        
//         <div className="relative">
//           {/* Central Server */}
//           <div className="flex justify-center mb-12">
//             <div className={`relative p-8 rounded-3xl bg-gradient-to-br from-warning/20 to-warning/5 border-2 transition-all duration-500 ${
//               activeStep === 3 ? 'border-warning scale-110 shadow-xl' : 'border-warning/30'
//             }`}>
//               <Server className="w-16 h-16 text-warning mb-2" />
//               <p className="text-sm font-medium text-center">Global Model</p>
//               {activeStep === 3 && (
//                 <div className="absolute -inset-2 bg-warning/20 rounded-3xl animate-pulse-glow" />
//               )}
//             </div>
//           </div>

//           {/* Data Flow Lines */}
//           <div className="relative h-32 mb-12">
//             {[0, 1, 2].map((index) => (
//               <div
//                 key={index}
//                 className="absolute top-0 left-1/2 h-full -translate-x-1/2"
//                 style={{ transform: `translateX(-50%) rotate(${(index - 1) * 30}deg)` }}
//               >
//                 <div className="relative h-full w-1 bg-gradient-to-b from-primary/50 to-transparent">
//                   {dataFlowing && (
//                     <div
//                       className="absolute top-0 left-1/2 w-3 h-3 bg-primary rounded-full -translate-x-1/2 animate-data-flow"
//                       style={{ animationDelay: `${index * 0.2}s` }}
//                     />
//                   )}
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Local Devices */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {[1, 2, 3].map((device, index) => (
//               <div key={device} className="space-y-4">
//                 {/* Device */}
//                 <div className={`p-6 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border-2 transition-all duration-500 ${
//                   activeStep === 0 ? 'border-primary scale-105 shadow-lg' : 'border-primary/30'
//                 }`}>
//                   <Smartphone className="w-12 h-12 text-primary mx-auto mb-2" />
//                   <p className="text-sm font-medium text-center">Device {device}</p>
//                   {activeStep === 0 && (
//                     <div className="absolute -inset-1 bg-primary/10 rounded-2xl animate-pulse-glow" />
//                   )}
//                 </div>

//                 {/* Local Data */}
//                 <div className={`p-4 rounded-xl bg-gradient-to-br from-secondary/20 to-secondary/5 border-2 transition-all duration-500 ${
//                   activeStep === 1 ? 'border-secondary scale-105' : 'border-secondary/30'
//                 }`}>
//                   <Database className="w-8 h-8 text-secondary mx-auto mb-1" />
//                   <p className="text-xs text-center text-muted-foreground">Local Data</p>
//                 </div>

//                 {/* Training */}
//                 <div className={`p-4 rounded-xl bg-gradient-to-br from-success/20 to-success/5 border-2 transition-all duration-500 ${
//                   activeStep === 2 ? 'border-success scale-105' : 'border-success/30'
//                 }`}>
//                   <Brain className="w-8 h-8 text-success mx-auto mb-1 animate-spin-slow" />
//                   <p className="text-xs text-center text-muted-foreground">Train Model</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Process Steps */}
//         <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
//           {steps.map((step, index) => {
//             const Icon = step.icon;
//             return (
//               <div
//                 key={index}
//                 className={`p-4 rounded-xl border-2 transition-all duration-500 ${
//                   activeStep === index
//                     ? `border-${step.color} bg-${step.color}/10 scale-105`
//                     : 'border-border bg-card/50'
//                 }`}
//               >
//                 <Icon className={`w-8 h-8 mx-auto mb-2 text-${step.color}`} />
//                 <p className="text-xs font-medium text-center">{step.label}</p>
//               </div>
//             );
//           })}
//         </div>
//       </Card>

//       {/* Key Concepts */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <Card className="p-6 bg-gradient-to-br from-primary/10 to-transparent backdrop-blur border-primary/20 hover:shadow-lg transition-all duration-300">
//           <div className="flex items-start gap-4">
//             <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
//               <Database className="w-6 h-6 text-primary" />
//             </div>
//             <div>
//               <h4 className="font-semibold mb-2">Privacy Preserved</h4>
//               <p className="text-sm text-muted-foreground">
//                 Raw data never leaves the device. Only model updates are shared, protecting user privacy.
//               </p>
//             </div>
//           </div>
//         </Card>

//         <Card className="p-6 bg-gradient-to-br from-secondary/10 to-transparent backdrop-blur border-secondary/20 hover:shadow-lg transition-all duration-300">
//           <div className="flex items-start gap-4">
//             <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center flex-shrink-0">
//               <Brain className="w-6 h-6 text-secondary" />
//             </div>
//             <div>
//               <h4 className="font-semibold mb-2">Collaborative Training</h4>
//               <p className="text-sm text-muted-foreground">
//                 Multiple devices work together to improve a shared model without centralizing data.
//               </p>
//             </div>
//           </div>
//         </Card>
//       </div>
//     </div>
//   );
// };

// export default FederatedLearningBasics;
