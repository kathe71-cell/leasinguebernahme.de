import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Filter, X } from "lucide-react";

export default function VehicleFilters({ filters, onFiltersChange, onReset, resultsCount }) {
  const handleFilterChange = (key, value) => {
    onFiltersChange(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const getActiveFiltersCount = () => {
    return Object.values(filters).filter(value => value !== "").length;
  };

  return (
    <Card className="sticky top-4">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Filter className="w-5 h-5" />
            Filter
          </CardTitle>
          {getActiveFiltersCount() > 0 && (
            <Badge variant="secondary">
              {getActiveFiltersCount()}
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Offer Type Filter */}
        <div className="space-y-3">
          <Label>Angebotsart</Label>
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="leasing" 
              checked={filters.showLeasing !== false}
              onCheckedChange={(checked) => handleFilterChange("showLeasing", checked)}
            />
            <label htmlFor="leasing" className="text-sm cursor-pointer">Leasing</label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="kauf" 
              checked={filters.showKauf === true}
              onCheckedChange={(checked) => handleFilterChange("showKauf", checked)}
            />
            <label htmlFor="kauf" className="text-sm cursor-pointer">Kauf</label>
          </div>
        </div>

        {/* Brand Filter */}
        <div className="space-y-2">
          <Label htmlFor="brand">Marke</Label>
          <Select value={filters.brand} onValueChange={(value) => handleFilterChange("brand", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Alle Marken" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value={null}>Alle Marken</SelectItem>
              <SelectItem value="Audi">Audi</SelectItem>
              <SelectItem value="BMW">BMW</SelectItem>
              <SelectItem value="Citroen">Citroën</SelectItem>
              <SelectItem value="Cupra">Cupra</SelectItem>
              <SelectItem value="Fiat">Fiat</SelectItem>
              <SelectItem value="Ford">Ford</SelectItem>
              <SelectItem value="Hyundai">Hyundai</SelectItem>
              <SelectItem value="Kia">Kia</SelectItem>
              <SelectItem value="Mazda">Mazda</SelectItem>
              <SelectItem value="Mercedes">Mercedes</SelectItem>
              <SelectItem value="Mini">Mini</SelectItem>
              <SelectItem value="Nissan">Nissan</SelectItem>
              <SelectItem value="Opel">Opel</SelectItem>
              <SelectItem value="Peugeot">Peugeot</SelectItem>
              <SelectItem value="Renault">Renault</SelectItem>
              <SelectItem value="Seat">Seat</SelectItem>
              <SelectItem value="Skoda">Škoda</SelectItem>
              <SelectItem value="Tesla">Tesla</SelectItem>
              <SelectItem value="Toyota">Toyota</SelectItem>
              <SelectItem value="Volkswagen">Volkswagen</SelectItem>
              <SelectItem value="Volvo">Volvo</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Max Rate Filter */}
        <div className="space-y-2">
          <Label htmlFor="maxRate">Maximale Rate (€)</Label>
          <Input
            id="maxRate"
            type="number"
            placeholder="z.B. 500"
            value={filters.maxRate}
            onChange={(e) => handleFilterChange("maxRate", e.target.value)}
          />
        </div>

        {/* Location Filter */}
        <div className="space-y-2">
          <Label htmlFor="location">Standort</Label>
          <Input
            id="location"
            placeholder="PLZ oder Ort"
            value={filters.location}
            onChange={(e) => handleFilterChange("location", e.target.value)}
          />
        </div>

        {/* Fuel Type Filter */}
        <div className="space-y-2">
          <Label htmlFor="fuelType">Kraftstoff</Label>
          <Select value={filters.fuelType} onValueChange={(value) => handleFilterChange("fuelType", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Alle Kraftstoffe" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value={null}>Alle Kraftstoffe</SelectItem>
              <SelectItem value="Benzin">Benzin</SelectItem>
              <SelectItem value="Diesel">Diesel</SelectItem>
              <SelectItem value="Elektro">Elektro</SelectItem>
              <SelectItem value="Hybrid">Hybrid</SelectItem>
              <SelectItem value="Plug-in Hybrid">Plug-in Hybrid</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Transmission Filter */}
        <div className="space-y-2">
          <Label htmlFor="transmission">Getriebe</Label>
          <Select value={filters.transmission} onValueChange={(value) => handleFilterChange("transmission", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Alle Getriebe" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value={null}>Alle Getriebe</SelectItem>
              <SelectItem value="Manuell">Manuell</SelectItem>
              <SelectItem value="Automatik">Automatik</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Year Filter */}
        <div className="space-y-2">
          <Label htmlFor="minYear">Erstzulassung ab</Label>
          <Select value={filters.minYear || ""} onValueChange={(value) => handleFilterChange("minYear", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Beliebig" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value={null}>Beliebig</SelectItem>
              <SelectItem value="2024">2024</SelectItem>
              <SelectItem value="2023">2023</SelectItem>
              <SelectItem value="2022">2022</SelectItem>
              <SelectItem value="2021">2021</SelectItem>
              <SelectItem value="2020">2020</SelectItem>
              <SelectItem value="2019">2019</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Max Mileage Filter */}
        <div className="space-y-2">
          <Label htmlFor="maxMileage">Max. Kilometerstand</Label>
          <Select value={filters.maxMileage || ""} onValueChange={(value) => handleFilterChange("maxMileage", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Beliebig" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value={null}>Beliebig</SelectItem>
              <SelectItem value="10000">bis 10.000 km</SelectItem>
              <SelectItem value="25000">bis 25.000 km</SelectItem>
              <SelectItem value="50000">bis 50.000 km</SelectItem>
              <SelectItem value="75000">bis 75.000 km</SelectItem>
              <SelectItem value="100000">bis 100.000 km</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Results Count */}
        <div className="pt-4 border-t">
          <p className="text-sm text-gray-600 mb-3">
            {resultsCount} Fahrzeuge gefunden
          </p>
          
          {getActiveFiltersCount() > 0 && (
            <Button 
              variant="outline" 
              size="sm" 
              onClick={onReset}
              className="w-full"
            >
              <X className="w-4 h-4 mr-2" />
              Filter zurücksetzen
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}