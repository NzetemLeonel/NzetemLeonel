import Link from 'next/link';

export default function PatientDashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar/Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-blue-600">TalkMeetDokta</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-600">Welcome, Patient</span>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Patient Dashboard</h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Appointment Card */}
            <div className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition cursor-pointer">
              <h2 className="text-xl font-semibold text-blue-600 mb-2">Book Appointment</h2>
              <p className="text-gray-600">Schedule a consultation with a healthcare professional.</p>
            </div>

            {/* Medical Records Card */}
            <div className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition cursor-pointer">
              <h2 className="text-xl font-semibold text-green-600 mb-2">Medical Records</h2>
              <p className="text-gray-600">Access your digital consultation notes and history.</p>
            </div>

            {/* Support Card */}
            <div className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition cursor-pointer">
              <h2 className="text-xl font-semibold text-purple-600 mb-2">Help & Support</h2>
              <p className="text-gray-600">Contact our administrative team for assistance.</p>
            </div>
          </div>

          <div className="mt-12 bg-white rounded-xl shadow-sm border p-8 text-center">
            <p className="text-gray-500">You have no upcoming appointments.</p>
            <Link href="#" className="mt-4 inline-block text-blue-600 font-medium hover:underline">
              Find a Doctor →
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
