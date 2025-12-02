function Main() {
    return (
       <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* <!-- Hero Section --> */}
        <section className="text-center py-16 mb-12 bg-card-bg rounded-2xl shadow-2xl border border-gray-700/50">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4">
                Showcase Your <span className="text-primary">Masterpiece.</span>
            </h1>
            <p className="mt-3 text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-8">
                Explore thousands of custom PC builds and gaming setups. Find inspiration, rate gear, and share your own battle station with the global community.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <button className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-xl shadow-lg text-white bg-primary hover:bg-accent transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-primary/50">
                    Browse Latest Setups
                </button>
                <button className="inline-flex items-center justify-center px-8 py-3 border border-primary text-base font-medium rounded-xl text-primary bg-transparent hover:bg-primary/10 transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-primary/50">
                    Submit Your Build
                </button>
            </div>
        </section>

        {/* <!-- Featured Builds Section --> */}
        <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 border-l-4 border-primary pl-4">🔥 Trending Setups This Week</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                
                {/* <!-- Setup Card Component (1) --> */}
                <div className="bg-card-bg rounded-xl shadow-xl overflow-hidden group hover:shadow-primary/50 transition duration-300 border border-gray-700">
                    <div className="h-48 overflow-hidden">
                        {/* <!-- Placeholder Image (Use a real URL in production) --> */}
                        <img src="https://placehold.co/600x400/1E293B/9CA3AF?text=The+Nebula+Commander" 
                             alt="PC Setup: The Nebula Commander" 
                             className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                    </div>
                    <div className="p-5">
                        <h3 className="text-xl font-semibold text-white truncate mb-1">The Nebula Commander</h3>
                        <p className="text-sm text-gray-400 flex items-center mb-4">
                            <svg className="w-4 h-4 mr-1 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                            Posted by <span className="text-primary ml-1 hover:underline cursor-pointer">@ByteMaster</span>
                        </p>
                        <div className="flex justify-between items-center text-sm text-gray-400">
                            <span className="flex items-center">
                                <svg className="w-4 h-4 mr-1 text-red-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"></path></svg>
                                4.8K Likes
                            </span>
                            <span className="flex items-center">
                                <svg className="w-4 h-4 mr-1 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"></path><path d="M15 7v2a4 4 0 01-4 4H9.586l-1.707 1.707A2 2 0 016 16v-2.414l3.707-3.707A2 2 0 0112 9V7h3z"></path></svg>
                                350 Comments
                            </span>
                        </div>
                    </div>
                </div>

                {/* <!-- Setup Card Component (2) --> */}
                <div className="bg-card-bg rounded-xl shadow-xl overflow-hidden group hover:shadow-primary/50 transition duration-300 border border-gray-700">
                    <div className="h-48 overflow-hidden">
                        <img src="https://placehold.co/600x400/1E293B/9CA3AF?text=Minimal+Workstation+v2" 
                             alt="PC Setup: Minimal Workstation v2" 
                             className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                    </div>
                    <div className="p-5">
                        <h3 className="text-xl font-semibold text-white truncate mb-1">Minimal Workstation v2</h3>
                        <p className="text-sm text-gray-400 flex items-center mb-4">
                            <svg className="w-4 h-4 mr-1 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                            Posted by <span className="text-primary ml-1 hover:underline cursor-pointer">@CleanBuilds</span>
                        </p>
                        <div className="flex justify-between items-center text-sm text-gray-400">
                            <span className="flex items-center">
                                <svg className="w-4 h-4 mr-1 text-red-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"></path></svg>
                                3.1K Likes
                            </span>
                            <span className="flex items-center">
                                <svg className="w-4 h-4 mr-1 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"></path><path d="M15 7v2a4 4 0 01-4 4H9.586l-1.707 1.707A2 2 0 016 16v-2.414l3.707-3.707A2 2 0 0112 9V7h3z"></path></svg>
                                188 Comments
                            </span>
                        </div>
                    </div>
                </div>

                {/* <!-- Setup Card Component (3) --> */}
                <div className="bg-card-bg rounded-xl shadow-xl overflow-hidden group hover:shadow-primary/50 transition duration-300 border border-gray-700">
                    <div className="h-48 overflow-hidden">
                        <img src="https://placehold.co/600x400/1E293B/9CA3AF?text=RGB+Overload" 
                             alt="PC Setup: RGB Overload" 
                             className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                    </div>
                    <div className="p-5">
                        <h3 className="text-xl font-semibold text-white truncate mb-1">Project: RGB Overload</h3>
                        <p className="text-sm text-gray-400 flex items-center mb-4">
                            <svg className="w-4 h-4 mr-1 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                            Posted by <span className="text-primary ml-1 hover:underline cursor-pointer">@NeonGamer</span>
                        </p>
                        <div className="flex justify-between items-center text-sm text-gray-400">
                            <span className="flex items-center">
                                <svg className="w-4 h-4 mr-1 text-red-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"></path></svg>
                                6.2K Likes
                            </span>
                            <span className="flex items-center">
                                <svg className="w-4 h-4 mr-1 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"></path><path d="M15 7v2a4 4 0 01-4 4H9.586l-1.707 1.707A2 2 0 016 16v-2.414l3.707-3.707A2 2 0 0112 9V7h3z"></path></svg>
                                512 Comments
                            </span>
                        </div>
                    </div>
                </div>

                {/* <!-- Setup Card Component (4) --> */}
                <div className="hidden lg:block bg-card-bg rounded-xl shadow-xl overflow-hidden group hover:shadow-primary/50 transition duration-300 border border-gray-700">
                    <div className="h-48 overflow-hidden">
                        <img src="https://placehold.co/600x400/1E293B/9CA3AF?text=Pro+Streamer+HQ" 
                             alt="PC Setup: Pro Streamer HQ" 
                             className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                    </div>
                    <div className="p-5">
                        <h3 className="text-xl font-semibold text-white truncate mb-1">Pro Streamer HQ</h3>
                        <p className="text-sm text-gray-400 flex items-center mb-4">
                            <svg className="w-4 h-4 mr-1 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                            Posted by <span className="text-primary ml-1 hover:underline cursor-pointer">@TwitchGod</span>
                        </p>
                        <div className="flex justify-between items-center text-sm text-gray-400">
                            <span className="flex items-center">
                                <svg className="w-4 h-4 mr-1 text-red-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"></path></svg>
                                2.9K Likes
                            </span>
                            <span className="flex items-center">
                                <svg className="w-4 h-4 mr-1 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"></path><path d="M15 7v2a4 4 0 01-4 4H9.586l-1.707 1.707A2 2 0 016 16v-2.414l3.707-3.707A2 2 0 0112 9V7h3z"></path></svg>
                                98 Comments
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* <!-- Components & Gear Spotlight --> */}
        <section className="mb-16 bg-card-bg p-8 rounded-2xl border border-gray-700">
            <h2 className="text-3xl font-bold text-white mb-6">💡 Component Spotlight</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                <div className="bg-dark-bg p-6 rounded-lg hover:bg-gray-700 transition duration-300">
                    <p className="text-2xl font-bold text-primary mb-2">CPUs</p>
                    <p className="text-gray-400">Intel i9 vs AMD Ryzen</p>
                </div>
                <div className="bg-dark-bg p-6 rounded-lg hover:bg-gray-700 transition duration-300">
                    <p className="text-2xl font-bold text-primary mb-2">GPUs</p>
                    <p className="text-gray-400">RTX 5000 Series Guide</p>
                </div>
                <div className="bg-dark-bg p-6 rounded-lg hover:bg-gray-700 transition duration-300">
                    <p className="text-2xl font-bold text-primary mb-2">Monitors</p>
                    <p className="text-gray-400">High Refresh Rate Picks</p>
                </div>
                <div className="bg-dark-bg p-6 rounded-lg hover:bg-gray-700 transition duration-300">
                    <p className="text-2xl font-bold text-primary mb-2">Keyboards</p>
                    <p className="text-gray-400">Mechanical vs Optical</p>
                </div>
            </div>
        </section>

        {/* <!-- CTA for Submission --> */}
        <section className="bg-primary/10 p-10 rounded-2xl text-center border border-primary/50">
            <h2 className="text-3xl font-bold text-white mb-3">Ready to Join the Ranks?</h2>
            <p className="text-lg text-gray-300 mb-6">Upload your photos, list your specs, and get feedback from the world's best build community.</p>
            <button className="inline-flex items-center px-10 py-3 border border-transparent text-lg font-bold rounded-xl shadow-2xl text-white bg-primary hover:bg-accent transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-primary/50">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path></svg>
                Upload My Setup Now
            </button>
        </section>

    </main>
    )
}

export default Main
