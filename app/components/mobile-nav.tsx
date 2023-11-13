import React from "react";
import type { LinkProps } from "@remix-run/react";
import { Link, useNavigate, useLocation } from "@remix-run/react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";
import { cn } from "~/lib/utils";
import { Icons } from "./icons";
import { ScrollArea } from "./ui/scroll-area";
import { navConfig } from "~/config/nav";
import { siteConfig } from "~/config/site";

export function MobileNav() {
  const [open, setOpen] = React.useState(false);
  const { pathname } = useLocation();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild className="ml-2">
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          <MenuIcon className="h-5 w-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pr-0">
        <MobileLink to="/" className="flex items-center" onOpenChange={setOpen}>
          <Icons.Logo className="mr-2 h-4 w-4" />
          <span className="font-bold">{siteConfig.name}</span>
        </MobileLink>
        <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
          <div className="flex flex-col space-y-3">
            {navConfig.mainNav.map((item) => (
              <MobileLink
                key={item.to}
                to={item.to}
                className={cn(
                  "transition-colors hover:text-foreground/80",
                  pathname?.startsWith(`/${item.to}`)
                    ? "text-foreground"
                    : "text-foreground/60"
                )}
              >
                {item.title}
              </MobileLink>
            ))}
          </div>
          <div className="flex flex-col space-y-2">
            {navConfig.mobileNav.map((item, index) => (
              <div key={index} className="flex flex-col space-y-3 pt-6">
                <h4 className="font-medium">{item.title}</h4>
                {item.items.map((item) => (
                  <React.Fragment key={item.to}>
                    <MobileLink
                      to={item.to}
                      onOpenChange={setOpen}
                      className={cn(
                        "transition-colors hover:text-foreground/80",
                        pathname?.startsWith(`/${item.to}`)
                          ? "text-foreground"
                          : "text-foreground/60"
                      )}
                    >
                      {item.title}
                    </MobileLink>
                  </React.Fragment>
                ))}
              </div>
            ))}
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}

interface MobileLinkProps extends LinkProps {
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
  className?: string;
}

function MobileLink({
  to,
  onOpenChange,
  className,
  children,
  ...props
}: MobileLinkProps) {
  const navigate = useNavigate();
  return (
    <Link
      to={to}
      onClick={() => {
        navigate(to.toString());
        onOpenChange?.(false);
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </Link>
  );
}
