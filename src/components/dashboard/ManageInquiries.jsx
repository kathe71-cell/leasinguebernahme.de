import React, { useState, useEffect } from 'react';
import { Inquiry } from '@/api/entities';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { Trash2 } from 'lucide-react';

export default function ManageInquiries() {
  const [inquiries, setInquiries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadInquiries();
  }, []);

  const loadInquiries = async () => {
    setIsLoading(true);
    try {
      const data = await Inquiry.list('-created_date');
      setInquiries(data);
    } catch (error) {
      console.error("Failed to load inquiries:", error);
    }
    setIsLoading(false);
  };
  
  const handleDelete = async (id) => {
     if (window.confirm("Sind Sie sicher, dass Sie diese Anfrage löschen möchten?")) {
        try {
          await Inquiry.delete(id);
          await loadInquiries();
        } catch (error) {
          console.error(`Failed to delete inquiry ${id}:`, error);
        }
    }
  }

  const getStatusBadge = (status) => {
    switch (status) {
      case 'neu': return <Badge className="bg-blue-500">Neu</Badge>;
      case 'bearbeitet': return <Badge variant="secondary">Bearbeitet</Badge>;
      case 'abgeschlossen': return <Badge variant="outline">Abgeschlossen</Badge>;
      default: return <Badge>{status}</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800">Anfragen verwalten</h2>
      <div className="rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Interessent</TableHead>
              <TableHead>Fahrzeug ID</TableHead>
              <TableHead>Datum</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Aktion</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading ? (
               Array(5).fill(0).map((_, i) => (
                <TableRow key={i}>
                  <TableCell><Skeleton className="h-5 w-32" /></TableCell>
                  <TableCell><Skeleton className="h-5 w-24" /></TableCell>
                  <TableCell><Skeleton className="h-5 w-24" /></TableCell>
                  <TableCell><Skeleton className="h-5 w-20" /></TableCell>
                   <TableCell className="text-right"><Skeleton className="h-8 w-8 ml-auto" /></TableCell>
                </TableRow>
              ))
            ) : (
              inquiries.map(i => (
                <TableRow key={i.id}>
                  <TableCell>
                    <div className="font-medium">{i.name}</div>
                    <div className="text-sm text-muted-foreground">{i.email}</div>
                  </TableCell>
                  <TableCell className="text-xs text-muted-foreground">{i.vehicle_id}</TableCell>
                  <TableCell>{new Date(i.created_date).toLocaleString()}</TableCell>
                  <TableCell>{getStatusBadge(i.status)}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="icon" onClick={() => handleDelete(i.id)}>
                        <Trash2 className="h-4 w-4 text-red-500" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}