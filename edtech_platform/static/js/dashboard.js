// Define Sidebar component first
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

// Main Dashboard Component
const DashboardApp = () => {
    const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);
    const userData = window.USER_DATA;

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
                    <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                            <img src={`https://ui-avatars.com/api/?name=${userData.first_name}+${userData.last_name}`}
                                 alt="Profile" 
                                 className="w-8 h-8 rounded-full" />
                            <span>{userData.first_name} {userData.last_name}</span>
                        </div>
                        {/* Add Sign Out Button */}
                        <a href={window.LOGOUT_URL} 
                           className="px-3 py-2 text-sm text-red-400 hover:text-red-300 hover:bg-red-400/10 rounded-lg transition-colors duration-200 flex items-center space-x-1">
                            <i className="fas fa-sign-out-alt"></i>
                            <span>Sign Out</span>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );

    // User Profile Component
    const UserProfile = () => (
        <div className="glass-morphism rounded-xl p-6 hover-card transition-all duration-300">
            <h3 className="text-lg font-semibold mb-4">Profile Information</h3>
            <div className="space-y-3">
                <div>
                    <label className="text-gray-400">Email:</label>
                    <p className="text-white">{userData.email}</p>
                </div>
                <div>
                    <label className="text-gray-400">Name:</label>
                    <p className="text-white">{userData.first_name} {userData.last_name}</p>
                </div>
                <div>
                    <label className="text-gray-400">Member Since:</label>
                    <p className="text-white">{new Date(userData.date_joined).toLocaleDateString()}</p>
                </div>
                <div>
                    <label className="text-gray-400">Last Login:</label>
                    <p className="text-white">
                        {userData.last_login ? new Date(userData.last_login).toLocaleString() : 'N/A'}
                    </p>
                </div>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen">
            <Sidebar isOpen={isSidebarOpen} />
            <Header />
            
            <main className={`transition-all duration-300 pt-24 ${isSidebarOpen ? 'ml-64' : 'ml-20'}`}>
                <div className="px-6 pb-8">
                    {/* Welcome Section */}
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold mb-2">
                            Welcome back, {userData.first_name}! 👋
                        </h1>
                        <p className="text-gray-400">Here's your profile information</p>
                    </div>

                    {/* User Profile Section */}
                    <div className="mb-8">
                        <UserProfile />
                    </div>
                </div>
            </main>
        </div>
    );
};

// Render the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<DashboardApp />);