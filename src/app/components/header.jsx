import Link from "next/link"
import {NavigationMenu, NavigationMenuList, NavigationMenuItem} from '@/components/ui/navigation-menu'

const Header = () => {
    return(
        <NavigationMenu>
            <NavigationMenuList className="flex flex-row flex-wrap md:gap-5 gap-3 font-mono">
                <NavigationMenuItem><Link href='/'>Home</Link></NavigationMenuItem>
                <NavigationMenuItem><Link href='/about'>About</Link></NavigationMenuItem>
                <NavigationMenuItem><Link href='/skills'>Skills</Link></NavigationMenuItem>
                <NavigationMenuItem><Link href='/projects'>Projects</Link></NavigationMenuItem>
                <NavigationMenuItem><Link href='/certifications'>Certificates</Link></NavigationMenuItem> 
            </NavigationMenuList>
        </NavigationMenu>
    )
}

export default Header