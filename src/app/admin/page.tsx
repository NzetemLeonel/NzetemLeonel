export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      {/* Admin Navbar */}
      <nav className="bg-slate-900 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <span className="text-xl font-black tracking-tighter">TALKMEETDOKTA <span className="text-blue-400 text-xs">ADMIN</span></span>
            <div className="flex items-center space-x-6">
              <span className="text-sm text-slate-300 italic">System Administrator</span>
              <button className="bg-slate-700 hover:bg-slate-600 px-3 py-1 rounded text-sm transition font-bold">
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold mb-6">System Oversight</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded shadow-sm border-l-4 border-blue-500">
            <h3 className="text-slate-500 text-xs font-bold uppercase tracking-wider">Total Users</h3>
            <p className="text-3xl font-black mt-1">1,240</p>
          </div>
          <div className="bg-white p-6 rounded shadow-sm border-l-4 border-green-500">
            <h3 className="text-slate-500 text-xs font-bold uppercase tracking-wider">Verified Doctors</h3>
            <p className="text-3xl font-black mt-1">48</p>
          </div>
          <div className="bg-white p-6 rounded shadow-sm border-l-4 border-purple-500">
            <h3 className="text-slate-500 text-xs font-bold uppercase tracking-wider">Monthly Revenue</h3>
            <p className="text-3xl font-black mt-1">FCFA 2.4M</p>
          </div>
        </div>

        <div className="bg-white rounded shadow-sm border border-slate-200 overflow-hidden">
          <div className="bg-slate-50 px-6 py-4 border-b border-slate-200">
            <h2 className="font-bold">Recent Activity Logs</h2>
          </div>
          <div className="p-6 text-slate-500 text-center italic">
            No critical alerts currently.
          </div>
        </div>
      </main>
    </div>
  );
}
