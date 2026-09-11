import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Car, Mail, Check, Clock } from 'lucide-react';
import { Vehicle } from '@/api/entities';
import { Inquiry } from '@/api/entities';

export default function DashboardOverview() {
  const [stats, setStats] = useState({
    activeListings: 0,
    pendingListings: 0,
    newInquiries: 0,
    totalListings: 0,
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      setIsLoading(true);
      try {
        const [vehicles, inquiries] = await Promise.all([
          Vehicle.list(),
          Inquiry.list(),
        ]);

        setStats({
          activeListings: vehicles.filter(v => v.status === 'aktiv').length,
          pendingListings: vehicles.filter(v => v.status === 'in Prüfung').length,
          newInquiries: inquiries.filter(i => i.status === 'neu').length,
          totalListings: vehicles.length,
        });
      } catch (error) {
        console.error("Failed to fetch dashboard stats:", error);
      }
      setIsLoading(false);
    };
    fetchStats();
  }, []);

  const StatCard = ({ title, value, icon: Icon, isLoading }) => (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <Skeleton className="h-8 w-1/2" />
        ) : (
          <div className="text-2xl font-bold">{value}</div>
        )}
      </CardContent>
    </Card>
  );

  return (
    <div className="space-y-6">
       <h2 className="text-2xl font-semibold text-gray-800">Übersicht</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard title="Aktive Angebote" value={stats.activeListings} icon={Car} isLoading={isLoading} />
        <StatCard title="Angebote in Prüfung" value={stats.pendingListings} icon={Clock} isLoading={isLoading} />
        <StatCard title="Neue Anfragen" value={stats.newInquiries} icon={Mail} isLoading={isLoading} />
        <StatCard title="Angebote Gesamt" value={stats.totalListings} icon={Check} isLoading={isLoading} />
      </div>
    </div>
  );
}