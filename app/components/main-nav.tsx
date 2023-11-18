import { Link, NavLink, useLocation } from "@remix-run/react";
import { Icons } from "./icons";
import { cn } from "~/lib/utils";
import { navConfig } from "~/config/nav";
import { siteConfig } from "~/config/site";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";

export function MainNav() {
  const { pathname } = useLocation();
  const consultationLink = navConfig.mobileNav[0];
  return (
    <div className="m-auto max-w-5xl hidden md:flex container h-14 items-center justify-evenly">
      <Link to="/" className="mr-6 flex items-center space-x-2">
        <Icons.Logo className="h-6 w-6" />
        <span className="hidden sm:inline-block font-bold">
          {siteConfig.name}
        </span>
      </Link>
      <nav className="flex items-center space-x-6 text-sm font-medium">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Consultation</NavigationMenuTrigger>
              <NavigationMenuContent>
                {/* TODO: use NavLink */}
                <div className="border-t-4 border-orange-500"></div>
                <ul className="grid gap-3 p-4 w-52 ">
                  {consultationLink.items.map((link) => (
                    <NavigationMenuLink key={link.to}>
                      <NavLink
                        to={link.to}
                        className={({ isActive }) =>
                          cn(
                            "transition-colors hover:text-foreground/80",
                            pathname?.startsWith(`/${link.to}`)
                              ? "text-foreground"
                              : "text-foreground/60",
                            { "text-orange-500": isActive }
                          )
                        }
                      >
                        {link.title}
                      </NavLink>
                    </NavigationMenuLink>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        {/* TODO: use NavLink */}
        <div className="flex items-center space-x-3">
          {navConfig.mainNav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  "transition-colors hover:text-foreground/80",
                  pathname?.startsWith(`/${item.to}`)
                    ? "text-foreground"
                    : "text-foreground/60",
                  { "text-orange-500": isActive }
                )
              }
            >
              {item.title}
            </NavLink>
          ))}
        </div>
      </nav>
    </div>
  );
}
