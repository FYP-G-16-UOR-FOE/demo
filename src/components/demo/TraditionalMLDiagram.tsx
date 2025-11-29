import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Server, Smartphone, Database, AlertTriangle, Upload } from "lucide-react";

const TraditionalMLDiagram = () => {
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setUploading(true);
      setTimeout(() => setUploading(false), 2000);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const devices = [
    { id: 1, name: "Phone", data: ["📸", "🌅", "🎨"] },
    { id: 2, name: "Laptop", data: ["📧", "💬", "📝"] },
    { id: 3, name: "Watch", data: ["❤️", "🏃", "😴"] },
  ];

  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold mb-2">Traditional Centralized ML</h3>
        <p className="text-muted-foreground">All data is sent to a central server</p>
      </div>

      {/* Central Server */}
      <div className="flex justify-center mb-12">
        <Card className={`p-8 relative overflow-hidden transition-all duration-700 ${
          uploading ? 'bg-destructive/20 border-destructive shadow-2xl' : 'bg-card/50 border-border'
        }`}>
          <div className="relative z-10 text-center">
            <Server className={`w-16 h-16 mx-auto mb-3 transition-all ${
              uploading ? 'text-destructive animate-pulse' : 'text-muted-foreground'
            }`} />
            <p className="font-semibold text-lg">Central Server</p>
            <div className="flex items-center justify-center gap-2 mt-2">
              <Database className="w-4 h-4" />
              <p className="text-sm text-muted-foreground">Stores ALL user data</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Upload Arrows */}
      <div className="relative h-32 mb-8">
        {devices.map((device, index) => {
          const leftPosition = `${index * 33.33 + 16.66}%`;
          
          return (
            <div key={device.id} className="absolute top-0 bottom-0" style={{ left: leftPosition, transform: 'translateX(-50%)' }}>
              {/* Connection Line */}
              <div className={`w-0.5 h-full mx-auto transition-all duration-500 ${
                uploading ? 'bg-destructive' : 'bg-border'
              }`} style={{ 
                opacity: uploading ? 0.8 : 0.3,
                borderStyle: uploading ? 'solid' : 'dashed'
              }} />
              
              {/* Animated Data Upload */}
              {uploading && (
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
            </div>
          );
        })}
      </div>

      {/* Devices */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {devices.map((device) => (
          <Card key={device.id} className={`p-6 transition-all duration-500 ${
            uploading ? 'bg-destructive/10 border-destructive shadow-lg' : 'bg-card/50 border-border'
          }`}>
            <div className="text-center space-y-3">
              <Smartphone className={`w-12 h-12 mx-auto ${
                uploading ? 'text-destructive' : 'text-muted-foreground'
              }`} />
              <p className="font-medium">{device.name}</p>
              <div className="flex gap-2 justify-center">
                {device.data.map((item, i) => (
                  <div key={i} className="text-xl p-2 rounded bg-muted/50">
                    {item}
                  </div>
                ))}
              </div>
              {uploading && (
                <div className="flex items-center justify-center gap-2 text-sm text-destructive">
                  <Upload className="w-4 h-4 animate-bounce" />
                  <p>Uploading raw data...</p>
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
