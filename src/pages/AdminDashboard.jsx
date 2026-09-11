import React, { useState, useEffect } from 'react';
import { User } from '@/api/entities';
import { LayoutDashboard, Car, Mail, Settings, ShieldOff, Loader2 } from 'lucide-react';
import { Toaster } from "@/components/ui/sonner"

// Import Dashboard Components
import DashboardOverview from '../components/dashboard/DashboardOverview';
import ManageListings from '../components/dashboard/ManageListings';
import ManageInquiries from '../components/dashboard/ManageInquiries';
import DashboardSettings from '../components/dashboard/DashboardSettings';

export default function AdminDashboard() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [activeView, setActiveView] = useState('overview');

  useEffect(() => {
    const checkAdminStatus = async () => {
      try {
        const user = await User.me();
        if (user && user.role === 'admin') {
          setIsAdmin(true);
        }
      } catch (error) {
        console.error("User is not authenticated or not an admin", error);
        setIsAdmin(false);
      } finally {
        setIsLoading(false);
      }
    };
    checkAdminStatus();
  }, []);
  
  const NavItem = ({ viewName, icon: Icon, children }) => (
    <button
      onClick={() => setActiveView(viewName)}
      className={`flex items-center w-full px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
        activeView === viewName
          ? 'bg-blue-600 text-white'
          : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
      }`}
    >
      <Icon className="w-5 h-5 mr-3" />
      {children}
    </button>
  );

  const renderActiveView = () => {
    switch (activeView) {
      case 'overview': return <DashboardOverview />;
      case 'listings': return <ManageListings />;
      case 'inquiries': return <ManageInquiries />;
      case 'settings': return <DashboardSettings />;
      default: return <DashboardOverview />;
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <Loader2 className="w-12 h-12 text-blue-600 animate-spin" />
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
        <ShieldOff className="w-16 h-16 text-red-500 mb-4" />
        <h1 className="text-2xl font-bold text-gray-800">Zugriff verweigert</h1>
        <p className="text-gray-600">Sie müssen Administrator sein, um diese Seite anzuzeigen.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <aside className="w-64 bg-white border-r p-4 flex-shrink-0">
        <div className="flex items-center space-x-2 mb-8">
            <span className="text-xl font-bold text-gray-900">Admin Dashboard</span>
        </div>
        <nav className="space-y-2">
          <NavItem viewName="overview" icon={LayoutDashboard}>Übersicht</NavItem>
          <NavItem viewName="listings" icon={Car}>Angebote verwalten</NavItem>
          <NavItem viewName="inquiries" icon={Mail}>Anfragen</NavItem>
          <NavItem viewName="settings" icon={Settings}>Einstellungen</NavItem>
        </nav>
      </aside>

      <main className="flex-1 p-8 overflow-y-auto">
        {renderActiveView()}
      </main>
      <Toaster />
    </div>
  );
}