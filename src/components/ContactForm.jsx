import React, { useState } from "react";
import { Inquiry } from "@/api/entities";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle 
} from "@/components/ui/dialog";
import { CheckCircle, Send } from "lucide-react";

export default function ContactForm({ vehicle, isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "", 
    message: `Hallo,

ich interessiere mich für Ihr Leasingfahrzeug ${vehicle.brand} ${vehicle.model} (${vehicle.monthly_rate}€/Monat, ${vehicle.remaining_months} Monate verbleibend).

Können Sie mir weitere Details zur Übernahme mitteilen?

Vielen Dank!`
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await Inquiry.create({
        vehicle_id: vehicle.id,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message
      });

      setIsSubmitted(true);
      
      // Auto-close after 2 seconds
      setTimeout(() => {
        onClose();
        setIsSubmitted(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: ""
        });
      }, 2000);
    } catch (error) {
      console.error("Fehler beim Senden der Anfrage:", error);
    }
    
    setIsSubmitting(false);
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>
            Kontakt aufnehmen
          </DialogTitle>
        </DialogHeader>

        {isSubmitted ? (
          <div className="text-center py-8">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Anfrage gesendet!
            </h3>
            <p className="text-gray-600">
              Ihre Nachricht wurde erfolgreich übermittelt. 
              Der Anbieter wird sich bei Ihnen melden.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">
                {vehicle.brand} {vehicle.model}
              </h4>
              <div className="text-sm text-gray-600 space-y-1">
                <p>Rate: {vehicle.monthly_rate}€/Monat</p>
                <p>Laufzeit: {vehicle.remaining_months} Monate</p>
                <p>Standort: {vehicle.location}</p>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="name">Name *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">E-Mail *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Telefon</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Nachricht *</Label>
              <Textarea
                id="message"
                rows={6}
                value={formData.message}
                onChange={(e) => handleInputChange("message", e.target.value)}
                required
              />
            </div>

            <div className="flex gap-3 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                className="flex-1"
              >
                Abbrechen
              </Button>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 bg-blue-600 hover:bg-blue-700"
              >
                {isSubmitting ? (
                  "Wird gesendet..."
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Senden
                  </>
                )}
              </Button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}