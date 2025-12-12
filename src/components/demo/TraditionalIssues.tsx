import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { AlertTriangle, TrendingDown, Shield, Gauge, Lock, Zap, HardDrive, Clock, Server, Smartphone, ArrowLeftRight, Wifi } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SecurityAnimation from "./SecurityAnimation";

const CommunicationOverheadAnimation = () => {
  const [progress, setProgress] = useState(0);
  const [direction, setDirection] = useState<'toServer' | 'toClient'>('toServer');
  const [round, setRound] = useState(1);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    if (!isAnimating) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          if (direction === 'toServer') {
            setTimeout(() => {
              setDirection('toClient');
              setProgress(0);
            }, 500);
          } else {
            setTimeout(() => {
              setDirection('toServer');
              setProgress(0);
              setRound((r) => (r >= 3 ? 1 : r + 1));
            }, 500);
          }
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [direction, isAnimating]);

  const modelSize = 80;

  return (
    <div className="p-6 rounded-xl bg-gradient-to-br from-destructive/10 to-transparent border border-destructive/20">
      <div className="flex items-center justify-between mb-4">
        <h4 className="font-semibold">High Communicational Overhead</h4>
        <button
          onClick={() => setIsAnimating(!isAnimating)}
          className="text-xs px-3 py-1 rounded-md bg-card hover:bg-card/80 border border-border transition-colors"
        >
          {isAnimating ? 'Pause' : 'Resume'}
        </button>
      </div>

      <div className="space-y-6">
        {/* Round Indicator */}
        <div className="flex items-center justify-center gap-2">
          <div className="text-sm font-medium text-muted-foreground">
            Training Round: <span className="text-foreground font-bold">{round}</span>
          </div>
        </div>

        {/* Communication Visualization */}
        <div className="relative">
          {/* Client and Server */}
          <div className="flex items-center justify-between px-8">
            {/* Client */}
            <div className="flex flex-col items-center gap-2">
              <div className={`p-4 rounded-2xl border-2 transition-all duration-300 ${
                direction === 'toServer' 
                  ? 'bg-primary/20 border-primary shadow-lg shadow-primary/20' 
                  : 'bg-card/50 border-border'
              }`}>
                <Smartphone className={`w-8 h-8 ${
                  direction === 'toServer' ? 'text-primary' : 'text-muted-foreground'
                }`} />
              </div>
              <p className="text-xs font-medium">Client</p>
              {direction === 'toServer' && (
                <div className="text-xs text-primary font-medium animate-pulse">
                  Sending...
                </div>
              )}
            </div>

            {/* Server */}
            <div className="flex flex-col items-center gap-2">
              <div className={`p-4 rounded-2xl border-2 transition-all duration-300 ${
                direction === 'toClient' 
                  ? 'bg-primary/20 border-primary shadow-lg shadow-primary/20' 
                  : 'bg-card/50 border-border'
              }`}>
                <Server className={`w-8 h-8 ${
                  direction === 'toClient' ? 'text-primary' : 'text-muted-foreground'
                }`} />
              </div>
              <p className="text-xs font-medium">Server</p>
              {direction === 'toClient' && (
                <div className="text-xs text-primary font-medium animate-pulse">
                  Sending...
                </div>
              )}
            </div>
          </div>

          {/* Data Transfer Animation */}
          <div className="absolute top-12 left-0 right-0 px-8">
            <div className="relative h-16 flex items-center">
              {/* Connection Line */}
              <div className="absolute inset-0 flex items-center">
                <div className="h-0.5 w-full bg-border" />
                <Wifi className="absolute left-1/2 -translate-x-1/2 w-5 h-5 text-muted-foreground" />
              </div>

              {/* Moving Data Packet */}
              <div 
                className="absolute transition-all duration-100"
                style={{
                  left: direction === 'toServer' 
                    ? `${progress}%` 
                    : `${100 - progress}%`,
                  transform: 'translateX(-50%)'
                }}
              >
                <div className="flex flex-col items-center gap-1">
                  <div className="px-3 py-2 rounded-lg bg-destructive/90 border border-destructive shadow-lg">
                    <div className="flex items-center gap-2">
                      <HardDrive className="w-4 h-4 text-white" />
                      <span className="text-xs font-bold text-white">{modelSize} MB</span>
                    </div>
                  </div>
                  <ArrowLeftRight className={`w-4 h-4 text-destructive ${
                    direction === 'toServer' ? '' : 'rotate-180'
                  }`} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
       {/* <div className="space-y-2 pt-8">
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>
              {direction === 'toServer' ? 'Uploading Model Updates' : 'Downloading Global Model'}
            </span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="h-3 bg-muted/30 rounded-full overflow-hidden relative">
            <div
              className="h-full bg-gradient-to-r from-destructive to-destructive/80 transition-all duration-100"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
        */}

        {/* Statistics */}
        <div className="grid grid-cols-2 gap-3 text-xs">
          <div className="p-3 rounded-lg bg-card/50 border border-border/50">
            <div className="text-xs text-muted-foreground mb-1">Data Transfer</div>
            <div className="text-lg font-bold text-destructive">
              {direction === 'toServer' ? '80 MB ↑' : '80 MB ↓'}
            </div>
          </div>
          <div className="p-3 rounded-lg bg-card/50 border border-border/50">
            <div className="text-xs text-muted-foreground mb-1">Per Round</div>
            <div className="text-lg font-bold text-destructive">160 MB</div>
          </div>
          {/*<div className="p-3 rounded-lg bg-card/50 border border-border/50">
            <div className="text-xs text-muted-foreground mb-1">Current Round</div>
            <div className="text-lg font-bold">{round} / 3</div>
          </div>
          */}
        </div>

        {/* Impact Message */}
        <div className="p-3 rounded-lg bg-destructive/10 border border-destructive/30 text-xs text-center">
          <p className="text-destructive font-medium">
            High bandwidth consumption: 480 MB total for 3 rounds
          </p>
        </div>
      </div>
    </div>
  );
};

const HighComputationalCostAnimation = () => {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState('without'); // 'without' or 'with'
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    if (!isAnimating) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (phase === 'without') {
          if (prev >= 100) {
            setTimeout(() => {
              setPhase('with');
              setProgress(0);
            }, 800);
            return 100;
          }
          return prev + 3;
        } else {
          if (prev >= 100) {
            setTimeout(() => {
              setPhase('without');
              setProgress(0);
            }, 800);
            return 100;
          }
          return prev + 12;
        }
      });
    }, 50);

    return () => clearInterval(interval);
  }, [phase, isAnimating]);

  const modelSize = phase === 'without' ? 80 : 20;
  const encryptionTime = phase === 'without' ? 12.5 : 3.1;
  const isQuantized = phase === 'with';

  return (
    <div className="p-6 rounded-xl bg-gradient-to-br from-destructive/10 to-transparent border border-destructive/20">
      <div className="flex items-center justify-between mb-4">
        <h4 className="font-semibold">High computational cost for encryption</h4>
        <button
          onClick={() => setIsAnimating(!isAnimating)}
          className="text-xs px-3 py-1 rounded-md bg-card hover:bg-card/80 border border-border transition-colors"
        >
          {isAnimating ? 'Pause' : 'Resume'}
        </button>
      </div>

      <div className="space-y-6">
        {/* Model Size Comparison */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm font-medium">
            <HardDrive className="w-4 h-4" />
            <span>Model Size</span>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div
              className={`p-3 rounded-lg border transition-all duration-300 ${
                !isQuantized
                  ? 'bg-destructive/20 border-destructive/40 ring-2 ring-destructive/30'
                  : 'bg-card/50 border-border/50'
              }`}
            >
              <div className="text-xs text-muted-foreground mb-1">Without Quantization</div>
              <div className="text-2xl font-bold text-destructive">80 MB</div>
            </div>
            <div
              className={`p-3 rounded-lg border transition-all duration-300 ${
                isQuantized
                  ? 'bg-green-500/20 border-green-500/40 ring-2 ring-green-500/30'
                  : 'bg-card/50 border-border/50'
              }`}
            >
              <div className="text-xs text-muted-foreground mb-1">With Quantization</div>
              <div className="text-2xl font-bold text-green-600">20 MB</div>
              <div className="text-xs text-green-600 mt-1">75% smaller</div>
            </div>
          </div>
        </div>

        {/* Encryption Progress */}
        <div className="relative bg-card/50 rounded-lg p-4 border border-border/50">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Lock className={`w-5 h-5 ${isQuantized ? 'text-green-600' : 'text-destructive'}`} />
              <span className="font-semibold">
                {progress < 100 ? 'Encrypting...' : 'Encryption Complete'}
              </span>
              {isQuantized && <Zap className="w-4 h-4 text-green-600" />}
            </div>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Clock className="w-3 h-3" />
              <span>{encryptionTime}s</span>
            </div>
          </div>

          {/* Current Model Stats */}
          <div className="mb-3 p-2 rounded bg-background/50 text-xs">
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">
                {isQuantized ? 'Quantized Model' : 'Original Model'}
              </span>
              <span className="font-semibold">{modelSize} MB</span>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Encryption Progress</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div className="h-4 bg-muted/30 rounded-full overflow-hidden relative">
              <div
                className={`h-full transition-all duration-200 ${
                  isQuantized
                    ? 'bg-gradient-to-r from-green-500 to-green-600'
                    : 'bg-gradient-to-r from-destructive to-destructive/80'
                }`}
                style={{ width: `${progress}%` }}
              />
              {progress < 100 && (
                <div
                  className="absolute top-0 h-full w-20 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"
                  style={{ left: `${Math.max(0, progress - 20)}%` }}
                />
              )}
            </div>
          </div>

          {/* Status Message */}
          {progress >= 100 && (
            <div
              className={`mt-3 p-2 rounded text-xs flex items-center gap-2 ${
                isQuantized ? 'bg-green-500/10 text-green-600' : 'bg-destructive/10 text-destructive'
              }`}
            >
              {isQuantized ? (
                <>
                  <Zap className="w-4 h-4" />
                  <span>4x faster encryption with quantization!</span>
                </>
              ) : (
                <>
                  <Clock className="w-4 h-4" />
                  <span>High computational cost without quantization</span>
                </>
              )}
            </div>
          )}
        </div>

        {/* Comparison Stats */}
        <div className="grid grid-cols-2 gap-3 text-xs">
          <div className="p-3 rounded-lg bg-card/50 border border-border/50">
            <div className="text-muted-foreground mb-1">Encryption Time</div>
            <div className="flex items-baseline gap-1">
              <span className="text-lg font-bold">
                {isQuantized ? '3.1s' : '12.5s'}
              </span>
              {isQuantized && (
                <span className="text-green-600 text-xs">(-75%)</span>
              )}
            </div>
          </div>
          <div className="p-3 rounded-lg bg-card/50 border border-border/50">
            <div className="text-muted-foreground mb-1">Data Processed</div>
            <div className="text-lg font-bold">{modelSize} MB</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TraditionalIssues = () => {
  const [hoveredIssue, setHoveredIssue] = useState<string | null>(null);

  return (
    <div className="space-y-12">
      {/* Header */}
      <Card className="p-8 md:p-12 bg-gradient-to-br from-destructive/10 to-card backdrop-blur border-destructive/20">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/20 border border-destructive/30 mb-6">
            <AlertTriangle className="w-5 h-5 text-destructive" />
            <span className="text-sm font-medium">Critical Challenges</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Problems in Traditional Federated Learning
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Understanding the key challenges that limit performance and security
          </p>
        </div>
      </Card>

      {/* Issue Categories */}
      <Tabs defaultValue="non-iid" className="w-full">
        <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 h-auto bg-card/50 backdrop-blur p-2 rounded-2xl">
          <TabsTrigger value="non-iid" className="rounded-xl py-3 data-[state=active]:bg-destructive data-[state=active]:text-destructive-foreground">
            <TrendingDown className="w-4 h-4 mr-2" />
            Non-IID Data
          </TabsTrigger>
          <TabsTrigger value="security" className="rounded-xl py-3 data-[state=active]:bg-destructive data-[state=active]:text-destructive-foreground">
            <Shield className="w-4 h-4 mr-2" />
            Security
          </TabsTrigger>
          <TabsTrigger value="performance" className="rounded-xl py-3 data-[state=active]:bg-destructive data-[state=active]:text-destructive-foreground">
            <Gauge className="w-4 h-4 mr-2" />
            Performance
          </TabsTrigger>
        </TabsList>

        {/* Non-IID Data Issue */}
        <TabsContent value="non-iid" className="mt-8 space-y-8">
          <Card className="p-6 bg-card/50 backdrop-blur border-destructive/20">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <TrendingDown className="w-7 h-7 text-destructive" />
              Non-IID Data Distribution
            </h3>
            <p className="text-muted-foreground mb-6">
              Visualization of data heterogeneity challenges in federated learning environments
            </p>
            <div className="w-full">
              <img 
                src="./images/nonIID-issue.png" 
                alt="Non-IID Data Distribution Issue" 
                className="w-full h-auto rounded-xl border-2 border-destructive/30 shadow-lg"
              />
            </div>
          </Card>

          {/* IID vs Non-IID Distribution Comparison - Column Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* IID Data Distribution - Bar Chart */}
            <Card className="p-6 bg-card/50 backdrop-blur border-success/20">
              <h4 className="text-xl font-bold mb-4 flex items-center gap-2 text-success">
                <span className="w-3 h-3 rounded-full bg-success"></span>
                IID Data Distribution (Ideal)
              </h4>
              <p className="text-sm text-muted-foreground mb-6">
                Each device has balanced samples from all 4 classes
              </p>
              
              {/* Bar Chart for IID */}
              <div className="space-y-6">
                {['Device 1', 'Device 2', 'Device 3'].map((device, idx) => (
                  <div key={idx} className="p-4 rounded-lg bg-success/5 border border-success/20">
                    <p className="text-sm font-medium mb-3">{device}</p>
                    <div className="flex items-end justify-around gap-2 h-32">
                      {/* Class A */}
                      <div className="flex flex-col items-center">
                        <div className="w-10 bg-blue-500 rounded-t" style={{ height: '80px' }}></div>
                        <span className="text-xs mt-1 font-medium">A</span>
                        <span className="text-[10px] text-muted-foreground">25%</span>
                      </div>
                      {/* Class B */}
                      <div className="flex flex-col items-center">
                        <div className="w-10 bg-green-500 rounded-t" style={{ height: '80px' }}></div>
                        <span className="text-xs mt-1 font-medium">B</span>
                        <span className="text-[10px] text-muted-foreground">25%</span>
                      </div>
                      {/* Class C */}
                      <div className="flex flex-col items-center">
                        <div className="w-10 bg-yellow-500 rounded-t" style={{ height: '80px' }}></div>
                        <span className="text-xs mt-1 font-medium">C</span>
                        <span className="text-[10px] text-muted-foreground">25%</span>
                      </div>
                      {/* Class D */}
                      <div className="flex flex-col items-center">
                        <div className="w-10 bg-red-500 rounded-t" style={{ height: '80px' }}></div>
                        <span className="text-xs mt-1 font-medium">D</span>
                        <span className="text-[10px] text-muted-foreground">25%</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-3 rounded-lg bg-success/10 border border-success/30">
                <p className="text-xs text-success font-medium">✓ Uniform distribution across all devices</p>
                <p className="text-xs text-muted-foreground mt-1">Model learns equally from all classes</p>
              </div>
            </Card>

            {/* Non-IID Data Distribution - Bar Chart */}
            <Card className="p-6 bg-card/50 backdrop-blur border-destructive/20">
              <h4 className="text-xl font-bold mb-4 flex items-center gap-2 text-destructive">
                <span className="w-3 h-3 rounded-full bg-destructive"></span>
                Non-IID Data Distribution (Problem)
              </h4>
              <p className="text-sm text-muted-foreground mb-6">
                Each device has imbalanced samples across 4 classes
              </p>
              
              {/* Bar Chart for Non-IID */}
              <div className="space-y-6">
                {/* Device 1 - Only Class A and B */}
                <div className="p-4 rounded-lg bg-destructive/5 border border-destructive/20">
                  <p className="text-sm font-medium mb-3">Device 1</p>
                  <div className="flex items-end justify-around gap-2 h-32">
                    <div className="flex flex-col items-center">
                      <div className="w-10 bg-blue-500 rounded-t" style={{ height: '90px' }}></div>
                      <span className="text-xs mt-1 font-medium">A</span>
                      <span className="text-[10px] text-muted-foreground">60%</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-10 bg-green-500 rounded-t" style={{ height: '60px' }}></div>
                      <span className="text-xs mt-1 font-medium">B</span>
                      <span className="text-[10px] text-muted-foreground">40%</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-10 bg-yellow-500/30 rounded-t" style={{ height: '0px' }}></div>
                      <span className="text-xs mt-1 font-medium text-muted-foreground">C</span>
                      <span className="text-[10px] text-muted-foreground">0%</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-10 bg-red-500/30 rounded-t" style={{ height: '0px' }}></div>
                      <span className="text-xs mt-1 font-medium text-muted-foreground">D</span>
                      <span className="text-[10px] text-muted-foreground">0%</span>
                    </div>
                  </div>
                </div>

                {/* Device 2 - Heavy on Class B and C */}
                <div className="p-4 rounded-lg bg-destructive/5 border border-destructive/20">
                  <p className="text-sm font-medium mb-3">Device 2</p>
                  <div className="flex items-end justify-around gap-2 h-32">
                    <div className="flex flex-col items-center">
                      <div className="w-10 bg-blue-500 rounded-t" style={{ height: '8px' }}></div>
                      <span className="text-xs mt-1 font-medium">A</span>
                      <span className="text-[10px] text-muted-foreground">5%</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-10 bg-green-500 rounded-t" style={{ height: '64px' }}></div>
                      <span className="text-xs mt-1 font-medium">B</span>
                      <span className="text-[10px] text-muted-foreground">40%</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-10 bg-yellow-500 rounded-t" style={{ height: '72px' }}></div>
                      <span className="text-xs mt-1 font-medium">C</span>
                      <span className="text-[10px] text-muted-foreground">45%</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-10 bg-red-500 rounded-t" style={{ height: '16px' }}></div>
                      <span className="text-xs mt-1 font-medium">D</span>
                      <span className="text-[10px] text-muted-foreground">10%</span>
                    </div>
                  </div>
                </div>

                {/* Device 3 - Heavy on Class D */}
                <div className="p-4 rounded-lg bg-destructive/5 border border-destructive/20">
                  <p className="text-sm font-medium mb-3">Device 3</p>
                  <div className="flex items-end justify-around gap-2 h-32">
                    <div className="flex flex-col items-center">
                      <div className="w-10 bg-blue-500 rounded-t" style={{ height: '16px' }}></div>
                      <span className="text-xs mt-1 font-medium">A</span>
                      <span className="text-[10px] text-muted-foreground">10%</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-10 bg-green-500 rounded-t" style={{ height: '8px' }}></div>
                      <span className="text-xs mt-1 font-medium">B</span>
                      <span className="text-[10px] text-muted-foreground">5%</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-10 bg-yellow-500 rounded-t" style={{ height: '24px' }}></div>
                      <span className="text-xs mt-1 font-medium">C</span>
                      <span className="text-[10px] text-muted-foreground">15%</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-10 bg-red-500 rounded-t" style={{ height: '100px' }}></div>
                      <span className="text-xs mt-1 font-medium">D</span>
                      <span className="text-[10px] text-muted-foreground">70%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 p-3 rounded-lg bg-destructive/10 border border-destructive/30">
                <p className="text-xs text-destructive font-medium">✗ Skewed distribution causes bias</p>
                <p className="text-xs text-muted-foreground mt-1">Model struggles with underrepresented classes</p>
              </div>
            </Card>
          </div>

          {/* Class Legend */}
          <Card className="p-4 bg-card/50 backdrop-blur">
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-blue-500 rounded"></div>
                <span className="text-sm">Class A</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-green-500 rounded"></div>
                <span className="text-sm">Class B</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-yellow-500 rounded"></div>
                <span className="text-sm">Class C</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-red-500 rounded"></div>
                <span className="text-sm">Class D</span>
              </div>
            </div>
          </Card>
        </TabsContent>

        {/* Security Issues - Now with Animation */}
        <TabsContent value="security" className="mt-8 space-y-8">
          <Card className="p-8 bg-card/50 backdrop-blur border-primary/20">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Shield className="w-7 h-7 text-primary" />
              Security Vulnerabilities - Interactive Story
            </h3>
            <p className="text-muted-foreground mb-8 text-center max-w-2xl mx-auto">
              Watch this animated story to understand common attacks in Federated Learning and how to protect against them!
            </p>
            
            {/* Animated Security Visualization */}
            <SecurityAnimation />

            {/* Attack Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              <div className="p-4 rounded-xl bg-destructive/10 border border-destructive/30 hover:scale-105 transition-transform cursor-pointer">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">🥷</span>
                  <h4 className="font-semibold">Eavesdropping</h4>
                </div>
                <p className="text-sm text-muted-foreground">Attackers intercept and read unprotected model updates</p>
                <div className="mt-2 text-xs text-success font-medium">✅ Solution: Encryption</div>
              </div>
              
              <div className="p-4 rounded-xl bg-destructive/10 border border-destructive/30 hover:scale-105 transition-transform cursor-pointer">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">🦹</span>
                  <h4 className="font-semibold">Tampering</h4>
                </div>
                <p className="text-sm text-muted-foreground">Man-in-the-middle swaps legitimate updates with malicious ones</p>
                <div className="mt-2 text-xs text-success font-medium">✅ Solution: Digital Signatures</div>
              </div>
              
              <div className="p-4 rounded-xl bg-destructive/10 border border-destructive/30 hover:scale-105 transition-transform cursor-pointer">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">🎭</span>
                  <h4 className="font-semibold">Impersonation</h4>
                </div>
                <p className="text-sm text-muted-foreground">Fake clients pretend to be legitimate participants</p>
                <div className="mt-2 text-xs text-success font-medium">✅ Solution: Identity Verification</div>
              </div>
            </div>
          </Card>
        </TabsContent>

        {/* Performance Issues */}
        <TabsContent value="performance" className="mt-8 space-y-8">
          <Card className="p-8 bg-card/50 backdrop-blur border-destructive/20">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Gauge className="w-7 h-7 text-destructive" />
              Performance Challenges
            </h3>

            <div className="space-y-6">
              {/* High Computational Cost - NEW ANIMATION */}
              <HighComputationalCostAnimation />

              {/* Communication Cost */}
              <CommunicationOverheadAnimation />
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TraditionalIssues;