'use client'
import {NavigationMenu, NavigationMenuList, NavigationMenuItem} from '@/components/ui/navigation-menu'

const Header = () => {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
    }

    const navItems = [
        { label: 'Home', id: 'landing' },
        { label: 'Skills', id: 'skills' },
        { label: 'Projects', id: 'projects' },
        { label: 'Experience', id: 'experience' },
    ]

    return(
        <NavigationMenu className="bg-white/10 backdrop-blur-md border border-white/15 rounded-full p-4 sticky top-6 z-50 mx-auto">
            <NavigationMenuList className="flex md:gap-5 gap-3 font-mono flex-wrap">
                {navItems.map((item) => (
                    <NavigationMenuItem key={item.id}>
                        <button
                            onClick={() => scrollToSection(item.id)}
                            className="hover:text-emerald-300 transition-colors cursor-pointer text-sm md:text-base"
                        >
                            {item.label}
                        </button>
                    </NavigationMenuItem>
                ))}
            </NavigationMenuList>
        </NavigationMenu>
    )
}

export default Header