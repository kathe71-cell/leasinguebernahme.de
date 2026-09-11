import React, { useState, useEffect } from 'react';
import { base44 } from '@/api/base44Client';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { MoreHorizontal, Trash2, CheckCircle, XCircle, ArrowUpDown, Ban } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';
import { Checkbox } from '@/components/ui/checkbox';

export default function ManageListings() {
  const [vehicles, setVehicles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isUpdating, setIsUpdating] = useState(null);
  const [selectedIds, setSelectedIds] = useState(new Set());
  const [sortField, setSortField] = useState('created_date');
  const [sortDirection, setSortDirection] = useState('desc');

  useEffect(() => {
    loadVehicles();
  }, []);

  const loadVehicles = async () => {
    setIsLoading(true);
    try {
      const sortPrefix = sortDirection === 'desc' ? '-' : '';
      const data = await base44.entities.Vehicle.list(`${sortPrefix}${sortField}`);
      setVehicles(data);
    } catch (error) {
      console.error("Failed to load vehicles:", error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    loadVehicles();
    setSelectedIds(new Set());
  }, [sortField, sortDirection]);

  const handleStatusChange = async (id, status) => {
    setIsUpdating(id);
    try {
      await base44.entities.Vehicle.update(id, { status });
      await loadVehicles();
    } catch (error) {
      console.error(`Failed to update status for vehicle ${id}:`, error);
    }
    setIsUpdating(null);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Sind Sie sicher, dass Sie dieses Angebot löschen möchten?")) {
      setIsUpdating(id);
      await loadVehicles(); // Refresh first to check if vehicle still exists
      const vehicleExists = vehicles.some(v => v.id === id);
      if (!vehicleExists) {
        setIsUpdating(null);
        return;
      }
      try {
        await base44.entities.Vehicle.delete(id);
        await loadVehicles();
      } catch (error) {
        if (error.response?.status === 404 || error.message?.includes('not found')) {
          console.log(`Vehicle ${id} already deleted`);
          await loadVehicles();
        } else {
          console.error(`Failed to delete vehicle ${id}:`, error);
        }
      }
      setIsUpdating(null);
    }
  };

  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'desc' ? 'asc' : 'desc');
    } else {
      setSortField(field);
      setSortDirection('desc');
    }
  };

  const handleSelectAll = (checked) => {
    if (checked) {
      const currentIds = vehicles.map(v => v.id);
      setSelectedIds(new Set(currentIds));
    } else {
      setSelectedIds(new Set());
    }
  };

  const handleSelectOne = (id, checked) => {
    const newSelected = new Set(selectedIds);
    if (checked) {
      newSelected.add(id);
    } else {
      newSelected.delete(id);
    }
    setSelectedIds(newSelected);
  };

  const handleBulkAction = async (action) => {
    if (selectedIds.size === 0) return;
    
    const confirmMessage = action === 'delete' 
      ? `${selectedIds.size} Angebote löschen?`
      : `Status von ${selectedIds.size} Angeboten auf "${action}" ändern?`;
    
    if (!window.confirm(confirmMessage)) return;

    const idsToProcess = Array.from(selectedIds);
    setSelectedIds(new Set());
    
    for (const id of idsToProcess) {
      // Fetch fresh list before each operation to verify vehicle still exists
      const currentVehicles = await base44.entities.Vehicle.list(`-${sortField}`);
      const vehicleExists = currentVehicles.some(v => v.id === id);
      
      if (!vehicleExists) {
        continue; // Skip if vehicle no longer exists
      }
      
      try {
        if (action === 'delete') {
          await base44.entities.Vehicle.delete(id);
        } else {
          await base44.entities.Vehicle.update(id, { status: action });
        }
        await new Promise(resolve => setTimeout(resolve, 300));
      } catch (error) {
        // Skip any errors silently
      }
    }
    
    await loadVehicles();
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'aktiv': return <Badge variant="default" className="bg-green-500">Aktiv</Badge>;
      case 'in Prüfung': return <Badge variant="secondary" className="bg-yellow-400">In Prüfung</Badge>;
      case 'reserviert': return <Badge variant="outline">Reserviert</Badge>;
      case 'übernommen': return <Badge variant="destructive">Übernommen</Badge>;
      case 'abgelehnt': return <Badge variant="destructive" className="bg-red-500">Abgelehnt</Badge>;
      case 'deaktiviert': return <Badge variant="secondary" className="bg-gray-400">Deaktiviert</Badge>;
      default: return <Badge>{status}</Badge>;
    }
  };

  const SortableHeader = ({ field, children }) => (
    <TableHead 
      className="cursor-pointer hover:bg-gray-50" 
      onClick={() => handleSort(field)}
    >
      <div className="flex items-center gap-2">
        {children}
        <ArrowUpDown className="h-4 w-4" />
      </div>
    </TableHead>
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-gray-800">Angebote verwalten</h2>
        {selectedIds.size > 0 && (
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">{selectedIds.size} ausgewählt</span>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm">
                  Bulk-Aktionen
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => handleBulkAction('aktiv')}>
                  <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                  Freischalten
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleBulkAction('deaktiviert')}>
                  <Ban className="mr-2 h-4 w-4 text-gray-500" />
                  Deaktivieren
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleBulkAction('abgelehnt')}>
                  <XCircle className="mr-2 h-4 w-4 text-red-500" />
                  Ablehnen
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleBulkAction('delete')} className="text-red-600">
                  <Trash2 className="mr-2 h-4 w-4" />
                  Löschen
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        )}
      </div>
      <div className="rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12">
                <Checkbox 
                  checked={selectedIds.size === vehicles.length && vehicles.length > 0}
                  onCheckedChange={handleSelectAll}
                />
              </TableHead>
              <SortableHeader field="brand">Fahrzeug</SortableHeader>
              <SortableHeader field="created_date">Erstellt am</SortableHeader>
              <SortableHeader field="status">Status</SortableHeader>
              <TableHead className="text-right">Aktionen</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading ? (
              Array(5).fill(0).map((_, i) => (
                <TableRow key={i}>
                  <TableCell><Skeleton className="h-5 w-5" /></TableCell>
                  <TableCell><Skeleton className="h-5 w-48" /></TableCell>
                  <TableCell><Skeleton className="h-5 w-24" /></TableCell>
                  <TableCell><Skeleton className="h-5 w-20" /></TableCell>
                  <TableCell className="text-right"><Skeleton className="h-8 w-8 ml-auto" /></TableCell>
                </TableRow>
              ))
            ) : (
              vehicles.map(v => (
                <TableRow key={v.id} className={isUpdating === v.id ? "opacity-50" : ""}>
                  <TableCell>
                    <Checkbox 
                      checked={selectedIds.has(v.id)}
                      onCheckedChange={(checked) => handleSelectOne(v.id, checked)}
                    />
                  </TableCell>
                  <TableCell className="font-medium">{v.brand} {v.model}</TableCell>
                  <TableCell>{new Date(v.created_date).toLocaleDateString()}</TableCell>
                  <TableCell>{getStatusBadge(v.status)}</TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0" disabled={isUpdating === v.id}>
                          <span className="sr-only">Menü öffnen</span>
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        {(v.status === 'in Prüfung' || v.status === 'deaktiviert') && (
                          <DropdownMenuItem onClick={() => handleStatusChange(v.id, 'aktiv')}>
                            <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                            Freischalten
                          </DropdownMenuItem>
                        )}
                        {v.status === 'aktiv' && (
                          <DropdownMenuItem onClick={() => handleStatusChange(v.id, 'deaktiviert')}>
                            <Ban className="mr-2 h-4 w-4 text-gray-500" />
                            Deaktivieren
                          </DropdownMenuItem>
                        )}
                        {v.status === 'in Prüfung' && (
                           <DropdownMenuItem onClick={() => handleStatusChange(v.id, 'abgelehnt')}>
                            <XCircle className="mr-2 h-4 w-4 text-red-500" />
                            Ablehnen
                          </DropdownMenuItem>
                        )}
                        <DropdownMenuItem onClick={() => handleDelete(v.id)} className="text-red-600">
                          <Trash2 className="mr-2 h-4 w-4" />
                          Löschen
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
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