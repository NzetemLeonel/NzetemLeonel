export default function DoctorDashboard() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Navbar */}
      <nav className="bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <span className="text-2xl font-bold text-blue-600">TalkMeetDokta</span>
            <div className="flex items-center space-x-4">
              <span className="font-medium">Dr. Leonardo Nzetem</span>
              <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition">
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">Doctor Dashboard</h1>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <p className="text-sm font-medium text-gray-500 uppercase">Today&apos;s Appointments</p>
            <p className="text-3xl font-bold text-blue-600 mt-2">8</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <p className="text-sm font-medium text-gray-500 uppercase">Total Patients</p>
            <p className="text-3xl font-bold text-green-600 mt-2">124</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <p className="text-sm font-medium text-gray-500 uppercase">Consultations Done</p>
            <p className="text-3xl font-bold text-purple-600 mt-2">450</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <p className="text-sm font-medium text-gray-500 uppercase">Pending Prescriptions</p>
            <p className="text-3xl font-bold text-orange-600 mt-2">3</p>
          </div>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Upcoming Consultations */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold mb-6">Upcoming Consultations</h2>
            <div className="space-y-4 text-center py-10">
              <p className="text-gray-400">Loading your schedule...</p>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold mb-6">Quick Actions</h2>
            <div className="grid grid-cols-2 gap-4">
              <button className="flex flex-col items-center justify-center p-6 bg-blue-50 text-blue-700 rounded-xl hover:bg-blue-100 transition border border-blue-100">
                <span className="text-2xl mb-2">➕</span>
                <span className="font-semibold">New Patient</span>
              </button>
              <button className="flex flex-col items-center justify-center p-6 bg-green-50 text-green-700 rounded-xl hover:bg-green-100 transition border border-green-100">
                <span className="text-2xl mb-2">💊</span>
                <span className="font-semibold">Prescriptions</span>
              </button>
              <button className="flex flex-col items-center justify-center p-6 bg-purple-50 text-purple-700 rounded-xl hover:bg-purple-100 transition border border-purple-100">
                <span className="text-2xl mb-2">📊</span>
                <span className="font-semibold">Analytics</span>
              </button>
              <button className="flex flex-col items-center justify-center p-6 bg-gray-50 text-gray-700 rounded-xl hover:bg-gray-100 transition border border-gray-200">
                <span className="text-2xl mb-2">⚙️</span>
                <span className="font-semibold">Settings</span>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
