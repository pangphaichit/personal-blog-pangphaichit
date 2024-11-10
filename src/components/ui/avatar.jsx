import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { cn } from "@/lib/utils";

const createAvatarComponent = (Component, baseClassName) =>
  React.forwardRef(({ className, ...props }, ref) => (
    <Component
      ref={ref}
      className={cn(baseClassName, className)}
      {...props}
    />
  ));

const Avatar = createAvatarComponent(AvatarPrimitive.Root, "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full");
const AvatarImage = createAvatarComponent(AvatarPrimitive.Image, "aspect-square h-full w-full");
const AvatarFallback = createAvatarComponent(
  AvatarPrimitive.Fallback,
  "flex h-full w-full items-center justify-center rounded-full bg-muted"
);

Avatar.displayName = "Avatar";
AvatarImage.displayName = "AvatarImage";
AvatarFallback.displayName = "AvatarFallback";

export { Avatar, AvatarImage, AvatarFallback };
