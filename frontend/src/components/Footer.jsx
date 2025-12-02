function Footer() {
    return (
        <footer className="bg-card-bg mt-12 border-t border-gray-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {/* <!-- Column 1: Logo & Mission --> */}
                <div>
                    <h3 className="text-xl font-extrabold text-primary mb-3">SetupScape</h3>
                    <p className="text-sm text-gray-400">The premier destination for showcasing and exploring PC builds from around the globe.</p>
                </div>
                
                {/* <!-- Column 2: Discover --> */}
                <div>
                    <h4 className="text-base font-semibold text-white mb-3">Discover</h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li><a href="#" className="hover:text-primary">Newest Builds</a></li>
                        <li><a href="#" className="hover:text-primary">Highest Rated</a></li>
                        <li><a href="#" className="hover:text-primary">Gaming Setups</a></li>
                        <li><a href="#" className="hover:text-primary">Workstations</a></li>
                    </ul>
                </div>
                
                {/* <!-- Column 3: Company --> */}
                <div>
                    <h4 className="text-base font-semibold text-white mb-3">Company</h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li><a href="#" className="hover:text-primary">About Us</a></li>
                        <li><a href="#" className="hover:text-primary">Contact</a></li>
                        <li><a href="#" className="hover:text-primary">Terms of Service</a></li>
                        <li><a href="#" className="hover:text-primary">Privacy Policy</a></li>
                    </ul>
                </div>

                {/* <!-- Column 4: Follow Us --> */}
                <div>
                    <h4 className="text-base font-semibold text-white mb-3">Connect</h4>
                    <div className="flex space-x-4">
                        {/* <!-- Simple social media placeholders (using Lucide icons) --> */}
                        <a href="#" className="text-gray-400 hover:text-primary transition"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586L6 14M4 16l3-3m0 0l-3-3m3 3h16"></path></svg></a>
                        <a href="#" className="text-gray-400 hover:text-primary transition"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6.29 18.251c7.545 0 11.675-6.253 11.675-11.675 0-.178-.004-.355-.012-.533A8.348 8.348 0 0020 2.25a8.22 8.22 0 01-2.357.646 4.116 4.116 0 001.805-2.27 8.222 8.222 0 01-2.605.996C15.228 1.845 13.801 1 12.235 1c-2.924 0-5.286 2.37-5.286 5.292 0 .416.058.82.17 1.206-4.39-2.227-8.29-4.675-10.9-8.471C.31 1.7 1 .845 1.5 1.5l.5 1.5A3.766 3.766 0 001 5.385v.19c0 2.392 1.34 4.417 3.325 5.5A4.332 4.332 0 011.05 11.5v.08c0 1.97 1.127 3.72 2.75 4.675a8.216 8.216 0 01-4.225 1.15c-.473 0-.943-.048-1.4-.136a5.278 5.278 0 004.856 2.846 10.569 10.569 0 01-6.7 2.388c-.43 0-.853-.025-1.27-.07A14.656 14.656 0 00.5 18.251"></path></svg></a>
                        <a href="#" className="text-gray-400 hover:text-primary transition"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 0C4.477 0 0 4.484 0 10s4.477 10 10 10c5.523 0 10-4.484 10-10S15.523 0 10 0zm2.748 15.345l-1.99-.007a.2.2 0 01-.19-.204v-2.316a.2.2 0 01.203-.198c.552.007 1.11-.005 1.663.003a.2.2 0 01.198.205v2.314a.2.2 0 01-.19.204zM10.01 4.5c-2.003 0-3.626 1.62-3.626 3.62c0 2.003 1.623 3.62 3.626 3.62s3.626-1.62 3.626-3.62c0-2.002-1.623-3.62-3.626-3.62z" clip-rule="evenodd"></path></svg></a>
                    </div>
                </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-700 text-center text-sm text-gray-500">
                &copy; 2024 SetupScape. All Rights Reserved.
            </div>
        </div>
    </footer>
    )
}

export default Footer
