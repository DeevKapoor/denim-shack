"use client"
import Link from "next/link"
import Image from "next/image"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../components/ui/navigation-menu"

interface MegaMenuProps {
  trigger: string
}

export function MegaMenu({ trigger }: MegaMenuProps) {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-sm font-medium">{trigger}</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid grid-cols-4 w-[800px] gap-4 p-6">
              <div className="space-y-4">
                <h3 className="font-bold">New & Featured</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="#" className="hover:text-primary transition-colors">
                      New Arrivals
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-primary transition-colors">
                      Bestsellers
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-primary transition-colors">
                      Premium Selection
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-primary transition-colors">
                      Spring Collection
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="font-bold">Shop by Product</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="#" className="hover:text-primary transition-colors">
                      Jeans
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-primary transition-colors">
                      T-shirts & Tops
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-primary transition-colors">
                      Shirts
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-primary transition-colors">
                      Jackets
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-span-2 space-y-4">
                <h3 className="font-bold">Featured</h3>
                <div className="grid grid-cols-2 gap-4">
                  <Link href="#" className="group">
                    <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
                      <Image
                        src="/placeholder.svg"
                        alt="New Collection"
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <h4 className="mt-2 text-sm font-medium">New Collection</h4>
                    <p className="text-sm text-muted-foreground">Shop Now</p>
                  </Link>
                  <Link href="#" className="group">
                    <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
                      <Image
                        src="/placeholder.svg"
                        alt="Premium Denim"
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <h4 className="mt-2 text-sm font-medium">Premium Denim</h4>
                    <p className="text-sm text-muted-foreground">Discover More</p>
                  </Link>
                </div>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

