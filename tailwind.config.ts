import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          light: "hsl(var(--primary-light))",
          dark: "hsl(var(--primary-dark))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        success: {
          DEFAULT: "hsl(var(--success))",
          foreground: "hsl(var(--success-foreground))",
        },
        warning: {
          DEFAULT: "hsl(var(--warning))",
          foreground: "hsl(var(--warning-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in-right": {
          "0%": { opacity: "0", transform: "translateX(50px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "slide-in-left": {
          "0%": { opacity: "0", transform: "translateX(-50px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 20px hsl(var(--primary) / 0.3)" },
          "50%": { boxShadow: "0 0 40px hsl(var(--primary) / 0.6)" },
        },
        "data-flow": {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "50%": { opacity: "1" },
          "100%": { transform: "translateX(100%)", opacity: "0" },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
         "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "bounce-gentle": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0) rotate(-2deg)" },
          "50%": { transform: "translateY(-12px) rotate(2deg)" },
        },
        "walk": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(200px)" },
        },
        "peek": {
          "0%, 100%": { transform: "translateX(0) scale(1)" },
          "50%": { transform: "translateX(15px) scale(1.1)" },
        },
        "shake": {
          "0%, 100%": { transform: "rotate(0)" },
          "25%": { transform: "rotate(-10deg)" },
          "75%": { transform: "rotate(10deg)" },
        },
        "sparkle": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.6", transform: "scale(1.2)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 20px hsl(var(--shield) / 0.4)" },
          "50%": { boxShadow: "0 0 50px hsl(var(--shield) / 0.8)" },
        },
        "data-flow": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(200%)" },
        },
        "pop-in": {
          "0%": { transform: "scale(0)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        "run-away": {
          "0%": { transform: "translateX(0) rotate(0)", opacity: "1" },
          "100%": { transform: "translateX(-100px) rotate(-30deg)", opacity: "0" },
        },
        "happy-bounce": {
          "0%, 100%": { transform: "translateY(0) scale(1)" },
          "50%": { transform: "translateY(-20px) scale(1.1)" },
        },
        "mask-fall": {
          "0%": { transform: "translateY(0) rotate(0)", opacity: "1" },
          "100%": { transform: "translateY(50px) rotate(60deg)", opacity: "0" },
        },
        "poof": {
          "0%": { transform: "scale(1)", opacity: "1" },
          "100%": { transform: "scale(2.5)", opacity: "0" },
        },
        "slide-box": {
          "0%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(100px)" },
          "100%": { transform: "translateX(0)" },
        },
        "move-packet-1": {
          "0%": { left: "0%", opacity: "1" },
          "45%": { opacity: "1" },
          "50%": { opacity: "0.3" },
          "55%": { opacity: "1" },
          "100%": { left: "calc(100% - 40px)", opacity: "1" },
        },
        "move-packet-2": {
          "0%": { left: "0%", opacity: "0" },
          "10%": { opacity: "1" },
          "45%": { opacity: "1" },
          "50%": { opacity: "0.3" },
          "55%": { opacity: "1" },
          "100%": { left: "calc(100% - 40px)", opacity: "0" },
        },
        "move-packet-3": {
          "0%": { left: "0%", opacity: "0" },
          "20%": { opacity: "1" },
          "45%": { opacity: "1" },
          "50%": { opacity: "0.3" },
          "55%": { opacity: "1" },
          "90%": { opacity: "1" },
          "100%": { left: "calc(100% - 40px)", opacity: "0" },
        },
        "move-to-middle": {
          "0%": { left: "0%" },
          "100%": { left: "calc(100% - 40px)" },
        },
        "move-from-middle": {
          "0%": { left: "0%" },
          "100%": { left: "calc(100% - 40px)" },
        },
      
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-out forwards",
        "bounce-gentle": "bounce-gentle 2s ease-in-out infinite",
        "float": "float 3s ease-in-out infinite",
        "walk": "walk 3s ease-in-out infinite",
        "peek": "peek 2s ease-in-out infinite",
        "shake": "shake 0.4s ease-in-out infinite",
        "sparkle": "sparkle 1.5s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "data-flow": "data-flow 1.5s linear infinite",
        "pop-in": "pop-in 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards",
        "run-away": "run-away 1s ease-in forwards",
        "happy-bounce": "happy-bounce 0.6s ease-in-out infinite",
        "mask-fall": "mask-fall 0.8s ease-in forwards",
        "poof": "poof 0.6s ease-out forwards",
        "slide-box": "slide-box 4s ease-in-out infinite",
        "move-packet-1": "move-packet-1 3s ease-in-out infinite",
        "move-packet-2": "move-packet-2 3s ease-in-out infinite 1s",
        "move-packet-3": "move-packet-3 3s ease-in-out infinite 2s",
        "move-to-middle": "move-to-middle 2s ease-in-out infinite",
        "move-from-middle": "move-from-middle 2s ease-in-out infinite 1s",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
