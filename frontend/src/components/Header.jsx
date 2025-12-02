function Header() {
    return (
        <header  className="bg-dark-bg sticky top-0 z-50 shadow-lg border-b border-card-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
                {/* Logo*/}
                <div className="flex-shrink-0">
                    <a href="#" className="text-2xl font-extrabold text-primary tracking-tight">SetupScape</a>
                </div>
                
                {/* Desktop Navigation Links*/}
                <nav className="hidden md:flex space-x-6">
                    <a href="#" className="text-sm font-medium hover:text-primary transition duration-150">Browse Builds</a>
                    <a href="#" className="text-sm font-medium hover:text-primary transition duration-150">Submit Setup</a>
                    <a href="#" className="text-sm font-medium hover:text-primary transition duration-150">Leaderboard</a>
                    <a href="#" className="text-sm font-medium hover:text-primary transition duration-150">Community</a>
                </nav>

                {/* Auth/Profile Button*/}
                <div className="flex items-center space-x-4">
                    <button className="hidden md:inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg shadow-sm text-white bg-primary hover:bg-accent transition duration-300 transform hover:scale-105">
                        <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        Sign In
                    </button>
                    {/* Mobile Menu Button*/}
                    <button type="button" className="md:hidden p-2 text-gray-400 hover:text-white rounded-lg hover:bg-card-bg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                    </button>
                </div>
            </div>
        </div>
    </header>
    )
}

export default Header
