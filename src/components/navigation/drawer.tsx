import * as React from "react";
import * as DrawerPrimitive from "@radix-ui/react-dialog";
import { cva, type VariantProps } from "class-variance-authority";

import { mergeClasses } from "@/lib/utils";

const Drawer = DrawerPrimitive.Root;

const DrawerTrigger = DrawerPrimitive.Trigger;

const DrawerClose = DrawerPrimitive.Close;

const DrawerPortal = ({ ...props }: DrawerPrimitive.DialogPortalProps) => (
  <DrawerPrimitive.Portal {...props} />
);
DrawerPortal.displayName = DrawerPrimitive.Portal.displayName;

const DrawerOverlay = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Overlay
    className={mergeClasses(
      "data-[state=open]:animate-fade-in data-[state=closed]:animate-fade-out fixed inset-0 z-50 bg-black/40 backdrop-blur-sm transition-all duration-300",
      className
    )}
    {...props}
    ref={ref}
  />
));
DrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName;

const drawerVariants = cva(
  "fixed z-50 min-h-screen w-80 max-w-[85vw] border-l border-white/20 shadow-2xl transition-all ease-out duration-300 bg-white dark:bg-gray-900",
  {
    variants: {
      side: {
        right:
          "top-0 right-0 data-[state=open]:translate-x-0 data-[state=closed]:translate-x-full",
      },
    },
    defaultVariants: {
      side: "right",
    },
  }
);

interface DrawerContentProps
  extends React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content>,
    VariantProps<typeof drawerVariants> {}

const DrawerContent = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Content>,
  DrawerContentProps
>(({ side = "right", className, children, ...props }, ref) => (
  <DrawerPortal>
    <DrawerOverlay />
    <DrawerPrimitive.Content
      ref={ref}
      className={mergeClasses(drawerVariants({ side }), className)}
      {...props}
    >
      <div className="relative h-full overflow-hidden">
        {/* Floating Background Elements - matching hero section but subtle */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute right-10 top-20 h-16 w-16 animate-float rounded-full bg-primary-400/10 blur-xl"></div>
          <div
            className="absolute left-10 top-40 h-12 w-12 animate-float rounded-full bg-accent-400/10 blur-lg"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute bottom-40 right-20 h-10 w-10 animate-float rounded-full bg-primary-300/10 blur-lg"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute bottom-20 left-16 h-14 w-14 animate-float rounded-full bg-accent-300/10 blur-xl"
            style={{ animationDelay: "0.5s" }}
          ></div>
        </div>

        {/* Subtle gradient overlay for depth */}
        <div className="dark:from-primary-950/20 dark:to-accent-950/20 pointer-events-none absolute inset-0 bg-gradient-to-b from-primary-50/20 via-transparent to-accent-50/20"></div>

        {/* Content */}
        <div className="relative z-10">{children}</div>
      </div>
    </DrawerPrimitive.Content>
  </DrawerPortal>
));
DrawerContent.displayName = DrawerPrimitive.Content.displayName;

export { Drawer, DrawerTrigger, DrawerClose, DrawerContent };
