import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Server, Smartphone, Database, AlertTriangle, Upload, Brain, Play, Pause, RotateCcw } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const TraditionalMLDiagram = () => {
  const [currentPhase, setCurrentPhase] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  const phases = [
    { 
      name: "Data Collection", 
      description: "All devices send their raw data to the central server",
      duration: 3000 
    },
    { 
      name: "Centralized Training", 
      description: "Server trains the AI model on all collected data in one place",
      duration: 3000 
    },
    { 
      name: "Model Update Distribution", 
      description: "The trained model is sent back to all devices",
      duration: 3000 
    },
    { 
      name: "Clients Receive Model", 
      description: "Devices receive and deploy the updated model",
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
    { id: 1, name: "Phone", data: ["📸", "🌅", "🎨"] },
    { id: 2, name: "Laptop", data: ["📧", "💬", "📝"] },
    { id: 3, name: "Watch", data: ["❤️", "🏃", "😴"] },
  ];

  const handleReset = () => {
    setCurrentPhase(0);
    setProgress(0);
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold mb-2">Traditional Centralized ML</h3>
        <p className="text-muted-foreground">All data is sent to a central server</p>
      </div>

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
      <Card className="p-8 bg-gradient-to-br from-destructive/10 via-destructive/5 to-destructive/10 border-destructive/20">
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

      {/* Central Server */}
      <div className="flex justify-center mb-12">
        <Card className={`p-8 relative overflow-hidden transition-all duration-700 ${
          currentPhase === 0 ? 'bg-destructive/20 border-destructive shadow-2xl shadow-destructive/50' :
          currentPhase === 1 ? 'bg-warning/20 border-warning shadow-2xl shadow-warning/50' :
          currentPhase === 2 ? 'bg-success/20 border-success shadow-2xl shadow-success/50' :
          currentPhase === 3 ? 'bg-primary/20 border-primary shadow-2xl shadow-primary/50' :
          'bg-card/50 border-border'
        }`}>
          <div className="relative z-10 text-center">
            <Server className={`w-16 h-16 mx-auto mb-3 transition-all ${
              currentPhase === 0 ? 'text-destructive animate-pulse' :
              currentPhase === 1 ? 'text-warning animate-pulse' :
              currentPhase === 2 ? 'text-success animate-pulse' :
              currentPhase === 3 ? 'text-primary' :
              'text-muted-foreground'
            }`} />
            <p className="font-semibold text-lg">Central Server</p>
            <div className="flex items-center justify-center gap-2 mt-2">
              <Database className="w-4 h-4" />
              <p className="text-sm text-muted-foreground">
                {currentPhase === 0 && "Receiving ALL user data..."}
                {currentPhase === 1 && "Training model on all data..."}
                {currentPhase === 2 && "Distributing model updates..."}
                {currentPhase === 3 && "Model deployed to all clients"}
              </p>
            </div>
            
            {/* Training Progress on Server */}
            {currentPhase === 1 && (
              <div className="mt-4 space-y-2">
                <div className="flex items-center justify-center gap-2">
                  <Brain className="w-5 h-5 animate-pulse text-warning" />
                  <p className="text-sm font-medium">Training Model...</p>
                </div>
                <Progress value={progress} className="h-2" />
                <p className="text-xs text-muted-foreground">{Math.round(progress)}%</p>
              </div>
            )}

            {/* Distribution Progress */}
            {currentPhase === 2 && (
              <div className="mt-4 space-y-2">
                <div className="flex items-center justify-center gap-2">
                  <Brain className="w-5 h-5 text-success" />
                  <p className="text-sm font-medium">Sending Model Updates...</p>
                </div>
                <Progress value={progress} className="h-2" />
                <p className="text-xs text-muted-foreground">{Math.round(progress)}%</p>
              </div>
            )}
          </div>

          {/* Server Glow Effect */}
          {currentPhase === 1 && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 border-4 border-warning rounded-full animate-pulse-ring" />
              <div className="w-32 h-32 border-4 border-warning rounded-full animate-pulse-ring absolute" style={{ animationDelay: '0.5s' }} />
            </div>
          )}

          {/* Distribution Glow Effect */}
          {currentPhase === 2 && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 border-4 border-success rounded-full animate-pulse-ring" />
              <div className="w-32 h-32 border-4 border-success rounded-full animate-pulse-ring absolute" style={{ animationDelay: '0.5s' }} />
            </div>
          )}
        </Card>
      </div>

      {/* Upload Arrows */}
      <div className="relative h-32 mb-8">
        {devices.map((device, index) => {
          const leftPosition = `${index * 33.33 + 16.66}%`;
          const isUploading = currentPhase === 0;
          const isDownloading = currentPhase === 2 || currentPhase === 3;
          
          return (
            <div key={device.id} className="absolute top-0 bottom-0" style={{ left: leftPosition, transform: 'translateX(-50%)' }}>
              {/* Connection Line */}
              <div className={`w-0.5 h-full mx-auto transition-all duration-500 ${
                isUploading ? 'bg-destructive' : 
                isDownloading ? 'bg-success' :
                'bg-border'
              }`} style={{ 
                opacity: (isUploading || isDownloading) ? 0.8 : 0.3,
              }} />
              
              {/* Animated Data Upload - Phase 0 */}
              {isUploading && (
                <>
                  <div 
                    className="absolute left-1/2 -translate-x-1/2 animate-packet-up"
                    style={{ 
                      bottom: '0%',
                      animationDelay: `${index * 0.3}s`
                    }}
                  >
                    <div className="w-10 h-10 rounded-full bg-destructive flex items-center justify-center text-white text-xl font-bold shadow-xl shadow-destructive/50">
                      🔓
                    </div>
                  </div>
                  <div 
                    className="absolute left-1/2 -translate-x-1/2 animate-packet-up"
                    style={{ 
                      bottom: '0%',
                      animationDelay: `${index * 0.3 + 0.5}s`
                    }}
                  >
                    <div className="w-8 h-8 rounded-full bg-destructive/80 shadow-lg shadow-destructive/30" />
                  </div>
                  <div 
                    className="absolute left-1/2 -translate-x-1/2 animate-packet-up"
                    style={{ 
                      bottom: '0%',
                      animationDelay: `${index * 0.3 + 1}s`
                    }}
                  >
                    <div className="w-6 h-6 rounded-full bg-destructive/60 shadow-md" />
                  </div>
                </>
              )}

              {/* Animated Model Download - Phase 2 & 3 */}
              {isDownloading && (
                <>
                  <div 
                    className="absolute left-1/2 -translate-x-1/2 animate-packet-down"
                    style={{ 
                      top: '0%',
                      animationDelay: `${index * 0.3}s`
                    }}
                  >
                    <div className="w-10 h-10 rounded-full bg-success flex items-center justify-center text-white text-xl font-bold shadow-xl shadow-success/50">
                      🤖
                    </div>
                  </div>
                  <div 
                    className="absolute left-1/2 -translate-x-1/2 animate-packet-down"
                    style={{ 
                      top: '0%',
                      animationDelay: `${index * 0.3 + 0.5}s`
                    }}
                  >
                    <div className="w-8 h-8 rounded-full bg-success/80 shadow-lg shadow-success/30" />
                  </div>
                  <div 
                    className="absolute left-1/2 -translate-x-1/2 animate-packet-down"
                    style={{ 
                      top: '0%',
                      animationDelay: `${index * 0.3 + 1}s`
                    }}
                  >
                    <div className="w-6 h-6 rounded-full bg-success/60 shadow-md" />
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>

      {/* Devices */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {devices.map((device) => (
          <Card key={device.id} className={`p-6 transition-all duration-500 ${
            currentPhase === 0 ? 'bg-destructive/10 border-destructive shadow-lg' : 
            currentPhase === 2 ? 'bg-success/10 border-success shadow-lg' :
            currentPhase === 3 ? 'bg-primary/10 border-primary shadow-lg scale-105' :
            'bg-card/50 border-border'
          }`}>
            <div className="text-center space-y-3">
              <Smartphone className={`w-12 h-12 mx-auto transition-all ${
                currentPhase === 0 ? 'text-destructive' : 
                currentPhase === 2 ? 'text-success' :
                currentPhase === 3 ? 'text-primary animate-pulse' :
                'text-muted-foreground'
              }`} />
              <p className="font-medium">{device.name}</p>
              <div className="flex gap-2 justify-center">
                {device.data.map((item, i) => (
                  <div key={i} className={`text-xl p-2 rounded transition-all duration-300 ${
                    currentPhase === 0 ? 'bg-destructive/20 animate-float' : 'bg-muted/50'
                  }`} style={{ animationDelay: `${i * 0.2}s` }}>
                    {item}
                  </div>
                ))}
              </div>
              
              {/* Upload Status */}
              {currentPhase === 0 && (
                <div className="flex items-center justify-center gap-2 text-sm text-destructive">
                  <Upload className="w-4 h-4 animate-bounce" />
                  <p>Uploading raw data...</p>
                </div>
              )}
              
              {/* Receiving Model Status */}
              {currentPhase === 2 && (
                <div className="flex items-center justify-center gap-2 text-sm text-success">
                  <Brain className="w-4 h-4 animate-bounce" />
                  <p>Receiving model updates...</p>
                </div>
              )}
              
              {/* Model Deployed Status */}
              {currentPhase === 3 && (
                <div className="space-y-2">
                  <div className="flex items-center justify-center gap-2 text-sm text-primary">
                    <Brain className="w-4 h-4" />
                    <p className="font-semibold">Model Updated! ✨</p>
                  </div>
                  <Progress value={progress} className="h-2" />
                  <p className="text-xs text-muted-foreground">Deploying: {Math.round(progress)}%</p>
                </div>
              )}
            </div>
          </Card>
        ))}
      </div>

      {/* Privacy Warning */}
      <Card className="p-6 bg-destructive/10 border-destructive/30">
        <div className="flex items-start gap-4">
          <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
          <div>
            <h4 className="font-bold text-destructive mb-2">Privacy Concerns</h4>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>• All personal data is sent to central server</li>
              <li>• Single point of failure and security risk</li>
              <li>• Data can be leaked, hacked, or misused</li>
              <li>• Users lose control over their information</li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default TraditionalMLDiagram;
