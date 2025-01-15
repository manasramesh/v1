// static/js/dashboard.js

const DashboardApp = () => {
    const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);

    // Sidebar Component
    const Sidebar = ({ isOpen }) => (
        <div className={`fixed left-0 top-0 h-full glass-morphism transition-all duration-300 
            ${isOpen ? 'w-64' : 'w-20'} z-30`}>
            <div className="p-4">
                <div className="flex items-center space-x-2 mb-8">
                    <i className="fas fa-shield-alt text-blue-400 text-2xl"></i>
                    {isOpen && <span className="text-xl font-bold gradient-text">VirtuaSec</span>}
                </div>
                
                <nav className="space-y-2">
                    <a href="#" className="flex items-center space-x-2 p-3 rounded-lg bg-blue-500/20 text-blue-300">
                        <i className="fas fa-home w-6"></i>
                        {isOpen && <span>Dashboard</span>}
                    </a>
                    <a href="#" className="flex items-center space-x-2 p-3 rounded-lg hover:bg-white/5">
                        <i className="fas fa-book w-6"></i>
                        {isOpen && <span>My Courses</span>}
                    </a>
                    <a href="#" className="flex items-center space-x-2 p-3 rounded-lg hover:bg-white/5">
                        <i className="fas fa-calendar w-6"></i>
                        {isOpen && <span>Schedule</span>}
                    </a>
                    <a href="#" className="flex items-center space-x-2 p-3 rounded-lg hover:bg-white/5">
                        <i className="fas fa-chart-line w-6"></i>
                        {isOpen && <span>Progress</span>}
                    </a>
                    <a href="#" className="flex items-center space-x-2 p-3 rounded-lg hover:bg-white/5">
                        <i className="fas fa-users w-6"></i>
                        {isOpen && <span>Community</span>}
                    </a>
                </nav>
            </div>
        </div>
    );

    // Header Component
    const Header = () => (
        <header className="fixed top-0 right-0 w-full h-16 glass-morphism z-20">
            <div className="flex items-center justify-between h-full px-4">
                <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} 
                        className="text-gray-400 hover:text-white">
                    <i className="fas fa-bars"></i>
                </button>
                <div className="flex items-center space-x-4">
                    <button className="p-2 hover:bg-white/5 rounded-lg">
                        <i className="fas fa-bell"></i>
                    </button>
                    <div className="flex items-center space-x-2">
                        <img src="https://ui-avatars.com/api/?name=John+Doe" 
                             alt="Profile" 
                             className="w-8 h-8 rounded-full" />
                        <span>John Doe</span>
                    </div>
                </div>
            </div>
        </header>
    );

    // Rest of your components (ProgressCard, CourseCard, SessionCard)...

    // Main Dashboard Layout
    return (
        <div className="min-h-screen">
            <Sidebar isOpen={isSidebarOpen} />
            <Header />
            
            <main className={`transition-all duration-300 pt-24 ${isSidebarOpen ? 'ml-64' : 'ml-20'}`}>
                <div className="px-6 pb-8">
                    {/* Welcome Section */}
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold mb-2">Welcome back, John! 👋</h1>
                        <p className="text-gray-400">Track your progress and upcoming sessions</p>
                    </div>

                    {/* Progress Section */}
                    <div className="mb-8">
                        <ProgressCard 
                            progress={35}
                            title="Network Security Fundamentals"
                            completed={12}
                            total={25}
                        />
                    </div>

                    {/* Active Courses Section */}
                    <div className="mb-8">
                        <h2 className="text-xl font-bold mb-4">Active Courses</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {activeCourses.map(course => (
                                <CourseCard key={course.id} {...course} />
                            ))}
                        </div>
                    </div>

                    {/* Upcoming Sessions Section */}
                    <div>
                        <h2 className="text-xl font-bold mb-4">Upcoming Sessions</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {upcomingSessions.map(session => (
                                <SessionCard key={session.id} {...session} />
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

// Add missing component definitions here (ProgressCard, CourseCard, SessionCard)...

// Render the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<DashboardApp />);