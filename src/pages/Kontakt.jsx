import React, { useState } from "react";
import { SendEmail } from "@/api/integrations";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Mail, MapPin, Phone, Send, Clock } from "lucide-react";

export default function Kontakt() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await SendEmail({
        to: "info@leasinguebernahme.de",
        subject: `Kontaktanfrage: ${formData.subject}`,
        body: `
Name: ${formData.name}
E-Mail: ${formData.email}
Betreff: ${formData.subject}

Nachricht:
${formData.message}
        `
      });

      setIsSubmitted(true);

      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: "", email: "", subject: "", message: "" });
      }, 3000);
    } catch (error) {
      console.error("Fehler beim Senden der E-Mail:", error);
    }

    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Kontakt
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Haben Sie Fragen oder benötigen Sie Hilfe? Wir sind für Sie da.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Kontaktdaten
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <p className="font-medium">E-Mail</p>
                    <p className="text-gray-600">jens@kathe.org</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <p className="font-medium">Adresse</p>
                    <p className="text-gray-600">
                      Vollständige Anschrift siehe <a href="/Impressum" className="text-blue-600 underline">Impressum</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <p className="font-medium">Antwortzeit</p>
                    <p className="text-gray-600">
                      Wir antworten innerhalb von 24 Stunden
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Betreiber</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium">Meng GmbH</p>
                    <p className="text-gray-600">Jens Kathe</p>
                  </div>
                  <div>
                    <p className="font-medium">Projektpartner</p>
                    <p className="text-gray-600">
                      Steven Schulz<br />
                      <a href="https://stevenschulz.de" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                        stevenschulz.de
                      </a>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Nachricht senden</CardTitle>
              </CardHeader>
              <CardContent>
                {isSubmitted ?
                <div className="text-center py-12">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Nachricht gesendet!
                    </h3>
                    <p className="text-gray-600">
                      Vielen Dank für Ihre Nachricht. Wir werden uns schnellstmöglich bei Ihnen melden.
                    </p>
                  </div> :

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name *</Label>
                        <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        required />

                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">E-Mail *</Label>
                        <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required />

                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Betreff *</Label>
                      <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => handleInputChange("subject", e.target.value)}
                      placeholder="Worum geht es in Ihrer Nachricht?"
                      required />

                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Nachricht *</Label>
                      <Textarea
                      id="message"
                      rows={6}
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Beschreiben Sie Ihr Anliegen..."
                      required />

                    </div>

                    <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 hover:bg-blue-700">

                      {isSubmitting ?
                    "Wird gesendet..." :

                    <>
                          <Send className="w-4 h-4 mr-2" />
                          Nachricht senden
                        </>
                    }
                    </Button>
                  </form>
                }
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>);

}