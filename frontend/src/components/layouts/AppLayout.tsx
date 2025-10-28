import { Link, Outlet, useLocation } from 'react-router-dom';
import {
    Users,
    LayoutDashboard,
    FileText,
    Settings,
    Shield,
    Menu,
    Bell,
    LogOut,
    ChevronDown,
    User
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
    Sidebar,
    SidebarContent,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarProvider,
    SidebarTrigger
} from '@/components/ui/sidebar';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';

const navigation = [
    {
        name: 'Dashboard',
        href: '/dashboard',
        icon: LayoutDashboard
    },
    {
        name: 'Clients',
        href: '/clients',
        icon: Users
    },
    {
        name: 'Onboarding',
        href: '/onboarding',
        icon: FileText
    },
    {
        name: 'Compliance',
        href: '/compliance',
        icon: Shield
    },
    {
        name: 'Settings',
        href: '/settings',
        icon: Settings
    }
];

export const AppLayout = () => {
    const location = useLocation();

    const isActiveLink = (href: string) => {
        if (href === '/dashboard') {
            return location.pathname === '/dashboard';
        }
        return location.pathname.startsWith(href);
    };

    return (
        <SidebarProvider>
            <div className='flex h-screen bg-background'>
                <Sidebar className='border-r'>
                    <SidebarHeader className='p-4'>
                        <div className='flex items-center gap-2'>
                            <div className='w-8 h-8 bg-primary rounded-lg flex items-center justify-center'>
                                <span className='text-primary-foreground font-bold'>R</span>
                            </div>
                            <span className='font-semibold'>RIA Client Portal</span>
                        </div>
                    </SidebarHeader>

                    <SidebarContent className='px-4'>
                        <SidebarMenu>
                            {navigation.map(item => (
                                <SidebarMenuItem key={item.name}>
                                    <SidebarMenuButton
                                        asChild
                                        isActive={isActiveLink(item.href)}
                                    >
                                        <Link to={item.href}>
                                            <item.icon className='mr-2 h-4 w-4' />
                                            {item.name}
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarContent>
                </Sidebar>

                <div className='flex-1 flex flex-col overflow-hidden'>
                    <header className='bg-background border-b px-4 py-3 flex items-center justify-between'>
                        <div className='flex items-center gap-4'>
                            <SidebarTrigger className='md:hidden'>
                                <Menu className='h-5 w-5' />
                            </SidebarTrigger>
                            <h1 className='text-lg font-semibold'>
                                {navigation.find(item => isActiveLink(item.href))?.name || 'Dashboard'}
                            </h1>
                        </div>

                        <div className='flex items-center gap-4'>
                            <Button
                                variant='ghost'
                                size='icon'
                            >
                                <Bell className='h-5 w-5' />
                            </Button>

                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button
                                        variant='ghost'
                                        className='flex items-center gap-2'
                                    >
                                        <div className='w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center'>
                                            <User className='h-4 w-4' />
                                        </div>
                                        <span className='hidden sm:inline'>John Doe</span>
                                        <ChevronDown className='h-4 w-4' />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent
                                    align='end'
                                    className='w-56'
                                >
                                    <DropdownMenuItem>
                                        <User className='mr-2 h-4 w-4' />
                                        Profile
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <Settings className='mr-2 h-4 w-4' />
                                        Account Settings
                                    </DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem className='text-destructive'>
                                        <LogOut className='mr-2 h-4 w-4' />
                                        Sign Out
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </header>

                    <main className='flex-1 overflow-auto p-6'>
                        <Outlet />
                    </main>
                </div>
            </div>
        </SidebarProvider>
    );
};
