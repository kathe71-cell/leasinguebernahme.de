import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Vehicle } from "@/api/entities";
import { UploadFile } from "@/api/integrations";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Upload,
  X,
  CheckCircle,
  Car,
  Euro,
  Clock,
  MapPin,
  User,
  ArrowLeft
} from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

export default function Inserat() {
  const location = useLocation();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    brand: "",
    model: "",
    year: new Date().getFullYear(),
    mileage: "",
    monthly_rate: "",
    remaining_months: "",
    takeover_fee: "",
    location: "",
    fuel_type: "",
    transmission: "",
    color: "",
    description: "",
    contact_name: "",
    contact_email: "",
    contact_phone: "",
    is_private: true
  });

  const [images, setImages] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [uploadingImages, setUploadingImages] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleImageUpload = async (e) => {
    const files = Array.from(e.target.files);
    if (files.length === 0) return;

    setUploadingImages(true);

    try {
      const uploadPromises = files.map(file => UploadFile({ file }));
      const results = await Promise.all(uploadPromises);
      const imageUrls = results.map(result => result.file_url);

      setImages(prev => [...prev, ...imageUrls]);
    } catch (error) {
      console.error("Fehler beim Hochladen der Bilder:", error);
    }

    setUploadingImages(false);
  };

  const removeImage = (indexToRemove) => {
    setImages(prev => prev.filter((_, index) => index !== indexToRemove));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await Vehicle.create({
        ...formData,
        year: parseInt(formData.year),
        mileage: parseInt(formData.mileage),
        monthly_rate: parseFloat(formData.monthly_rate),
        remaining_months: parseInt(formData.remaining_months),
        takeover_fee: formData.takeover_fee ? parseFloat(formData.takeover_fee) : 0,
        images: images,
        status: "in Prüfung"
      });

      setIsSubmitted(true);
    } catch (error) {
      console.error("Fehler beim Erstellen des Inserats:", error);
    }

    setIsSubmitting(false);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="max-w-md w-full mx-4">
          <CardContent className="text-center py-12">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Angebot zur Prüfung eingereicht!
            </h2>
            <p className="text-gray-600 mb-8">
              Vielen Dank! Ihr Leasingangebot wurde zur Prüfung eingereicht und wird
              nach erfolgreicher Freischaltung auf der Seite veröffentlicht.
            </p>
            <div className="space-y-3">
              <Link to="/">
                <Button variant="outline" className="w-full">
                  Zur Startseite
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Zurück zur Startseite
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Fahrzeug zur Leasingübernahme einstellen
          </h1>
          <p className="text-gray-600">
            Sie möchten Ihren laufenden Leasingvertrag vorzeitig abgeben? Stellen Sie Ihr Fahrzeug hier ein - kostenlos und unkompliziert.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8" noValidate>
          {/* Pflichtfeld-Hinweis */}
          <p className="text-sm text-gray-600">
            <span className="text-red-500">*</span> Pflichtfelder
          </p>

          {/* Vehicle Details */}
          <Card className="bg-white shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-gray-900">
                <Car className="w-5 h-5" aria-hidden="true" />
                Fahrzeugdaten
              </CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="brand" className="text-gray-700">Marke <span className="text-red-500" aria-hidden="true">*</span></Label>
                <Select value={formData.brand} onValueChange={(value) => handleInputChange("brand", value)} required aria-required="true">
                  <SelectTrigger id="brand" className="w-full text-left text-gray-900 data-[placeholder]:text-white">
                    <SelectValue placeholder="Marke wählen" />
                  </SelectTrigger>
                  <SelectContent>
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
                    <SelectItem value="Sonstige">Sonstige</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="model" className="text-gray-700">Modell <span className="text-red-500" aria-hidden="true">*</span></Label>
                <Input
                  id="model"
                  value={formData.model}
                  onChange={(e) => handleInputChange("model", e.target.value)}
                  placeholder="z.B. A4 Avant"
                  className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500"
                  required
                  aria-required="true"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="year" className="text-gray-700">Baujahr <span className="text-red-500" aria-hidden="true">*</span></Label>
                <Input
                  id="year"
                  type="number"
                  min="2010"
                  max={new Date().getFullYear() + 1}
                  value={formData.year}
                  onChange={(e) => handleInputChange("year", e.target.value)}
                  className="bg-white border-gray-300 text-gray-900"
                  required
                  aria-required="true"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="mileage" className="text-gray-700">Kilometerstand</Label>
                <Input
                  id="mileage"
                  type="number"
                  value={formData.mileage}
                  onChange={(e) => handleInputChange("mileage", e.target.value)}
                  placeholder="z.B. 25000"
                  className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="fuel_type" className="text-gray-700">Kraftstoff</Label>
                <Select value={formData.fuel_type} onValueChange={(value) => handleInputChange("fuel_type", value)}>
                  <SelectTrigger className="w-full text-left text-gray-900 data-[placeholder]:text-white">
                    <SelectValue placeholder="Kraftstoff wählen" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Benzin">Benzin</SelectItem>
                    <SelectItem value="Diesel">Diesel</SelectItem>
                    <SelectItem value="Elektro">Elektro</SelectItem>
                    <SelectItem value="Hybrid">Hybrid</SelectItem>
                    <SelectItem value="Plug-in Hybrid">Plug-in Hybrid</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="transmission" className="text-gray-700">Getriebe</Label>
                <Select value={formData.transmission} onValueChange={(value) => handleInputChange("transmission", value)}>
                  <SelectTrigger className="w-full text-left text-gray-900 data-[placeholder]:text-white">
                    <SelectValue placeholder="Getriebe wählen" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Manuell">Manuell</SelectItem>
                    <SelectItem value="Automatik">Automatik</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="color" className="text-gray-700">Farbe</Label>
                <Input
                  id="color"
                  value={formData.color}
                  onChange={(e) => handleInputChange("color", e.target.value)}
                  placeholder="z.B. Schwarz metallic"
                  className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="location" className="text-gray-700">Standort (PLZ/Ort) <span className="text-red-500" aria-hidden="true">*</span></Label>
                <Input
                  id="location"
                  value={formData.location}
                  onChange={(e) => handleInputChange("location", e.target.value)}
                  placeholder="z.B. 34119 Kassel"
                  className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500"
                  required
                  aria-required="true"
                  autoComplete="postal-code"
                />
              </div>
            </CardContent>
          </Card>

          {/* Leasing Details */}
          <Card className="bg-white shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-gray-900">
                <Euro className="w-5 h-5" />
                Leasingdetails
              </CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="monthly_rate" className="text-gray-700">Monatliche Rate (€) <span className="text-red-500" aria-hidden="true">*</span></Label>
                <Input
                  id="monthly_rate"
                  type="number"
                  step="0.01"
                  min="0"
                  value={formData.monthly_rate}
                  onChange={(e) => handleInputChange("monthly_rate", e.target.value)}
                  placeholder="z.B. 299.99"
                  className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500"
                  required
                  aria-required="true"
                  aria-describedby="monthly_rate_hint"
                />
                <p id="monthly_rate_hint" className="text-xs text-gray-500">Brutto-Leasingrate inkl. MwSt.</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="remaining_months" className="text-gray-700">Verbleibende Laufzeit (Monate) <span className="text-red-500" aria-hidden="true">*</span></Label>
                <Input
                  id="remaining_months"
                  type="number"
                  min="1"
                  max="60"
                  value={formData.remaining_months}
                  onChange={(e) => handleInputChange("remaining_months", e.target.value)}
                  placeholder="z.B. 18"
                  className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500"
                  required
                  aria-required="true"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="takeover_fee" className="text-gray-700">Übernahmegebühr (€)</Label>
                <Input
                  id="takeover_fee"
                  type="number"
                  step="0.01"
                  value={formData.takeover_fee}
                  onChange={(e) => handleInputChange("takeover_fee", e.target.value)}
                  placeholder="z.B. 500 (optional)"
                  className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500"
                />
              </div>
            </CardContent>
          </Card>

          {/* Images */}
          <Card className="bg-white shadow-sm">
            <CardHeader>
              <CardTitle className="text-gray-900">Fahrzeugbilder</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center bg-gray-50">
                  <Upload className="w-8 h-8 text-gray-400 mx-auto mb-4" />
                  <div className="space-y-2">
                    <p className="text-sm text-gray-600">
                      Laden Sie Bilder Ihres Fahrzeugs hoch
                    </p>
                    <input
                      type="file"
                      multiple
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                      id="imageUpload"
                    />
                    <label htmlFor="imageUpload">
                      <Button type="button" variant="outline" asChild className="bg-white">
                        <span>
                          {uploadingImages ? "Wird hochgeladen..." : "Bilder auswählen"}
                        </span>
                      </Button>
                    </label>
                  </div>
                </div>

                {images.length > 0 && (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {images.map((image, index) => (
                      <div key={index} className="relative group">
                        <img
                          src={image}
                          alt={`Fahrzeugbild ${index + 1}`}
                          className="w-full h-24 object-cover rounded-lg"
                        />
                        <button
                          type="button"
                          onClick={() => removeImage(index)}
                          className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Description */}
          <Card className="bg-white shadow-sm">
            <CardHeader>
              <CardTitle className="text-gray-900">Beschreibung</CardTitle>
            </CardHeader>
            <CardContent>
              <Textarea
                placeholder="Beschreiben Sie Ihr Fahrzeug, besondere Ausstattung, Zustand, etc..."
                rows={4}
                value={formData.description}
                onChange={(e) => handleInputChange("description", e.target.value)}
                className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500"
              />
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="bg-white shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-gray-900">
                <User className="w-5 h-5" />
                Kontaktdaten
              </CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="contact_name" className="text-gray-700">Name <span className="text-red-500" aria-hidden="true">*</span></Label>
                <Input
                  id="contact_name"
                  value={formData.contact_name}
                  onChange={(e) => handleInputChange("contact_name", e.target.value)}
                  className="bg-white border-gray-300 text-gray-900"
                  required
                  aria-required="true"
                  autoComplete="name"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact_email" className="text-gray-700">E-Mail <span className="text-red-500" aria-hidden="true">*</span></Label>
                <Input
                  id="contact_email"
                  type="email"
                  value={formData.contact_email}
                  onChange={(e) => handleInputChange("contact_email", e.target.value)}
                  className="bg-white border-gray-300 text-gray-900"
                  required
                  aria-required="true"
                  autoComplete="email"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact_phone" className="text-gray-700">Telefon</Label>
                <Input
                  id="contact_phone"
                  type="tel"
                  value={formData.contact_phone}
                  onChange={(e) => handleInputChange("contact_phone", e.target.value)}
                  className="bg-white border-gray-300 text-gray-900"
                  autoComplete="tel"
                />
              </div>
            </CardContent>
          </Card>

          {/* Datenschutz-Hinweis */}
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-6">
              <p className="text-sm text-gray-700">
                Mit dem Absenden dieses Formulars erklären Sie sich mit unserer{" "}
                <Link to={createPageUrl("Datenschutz")} className="text-blue-600 hover:underline" target="_blank">
                  Datenschutzerklärung
                </Link>{" "}
                einverstanden. Ihre Daten werden ausschließlich zur Bearbeitung Ihres Inserats verwendet 
                und nicht an Dritte weitergegeben. Das Inserat wird nach einer kurzen Prüfung veröffentlicht.
              </p>
            </CardContent>
          </Card>

          {/* Submit */}
          <div className="flex justify-end">
            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting}
              className="bg-blue-600 hover:bg-blue-700 px-12"
            >
              {isSubmitting ? (
                "Wird erstellt..."
              ) : (
                "Inserat kostenlos erstellen"
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}