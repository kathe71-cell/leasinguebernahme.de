import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';
import fs from 'fs';

async function createFillablePdf() {
  const pdfDoc = await PDFDocument.create();
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const boldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const page = pdfDoc.addPage([595.28, 841.89]); // A4
  const form = pdfDoc.getForm();

  let yOffset = 800;

  // Title
  page.drawText('Fahrzeugübernahme-Protokoll', {
    x: 50,
    y: yOffset,
    size: 20,
    font: boldFont,
  });
  yOffset -= 30;

  page.drawText('Datum:', { x: 400, y: yOffset, size: 12, font });
  const dateField = form.createTextField('datum');
  dateField.addToPage(page, { x: 450, y: yOffset - 5, width: 100, height: 20 });
  yOffset -= 40;

  // Section 1
  page.drawText('1. Fahrzeug- & Vertragsdaten', { x: 50, y: yOffset, size: 14, font: boldFont });
  yOffset -= 25;

  const fields1 = [
    { label: 'Hersteller & Modell:', name: 'hersteller' },
    { label: 'Amtliches Kennzeichen:', name: 'kennzeichen' },
    { label: 'Fahrzeug-Id-Nr. (FIN):', name: 'fin' },
    { label: 'Exakter Kilometerstand:', name: 'km' },
    { label: 'Leasinggesellschaft:', name: 'gesellschaft' },
    { label: 'Vertragsnummer:', name: 'vertragsnummer' },
  ];

  fields1.forEach(f => {
    page.drawText(f.label, { x: 50, y: yOffset, size: 10, font });
    const field = form.createTextField(f.name);
    field.addToPage(page, { x: 200, y: yOffset - 5, width: 250, height: 18 });
    yOffset -= 25;
  });

  yOffset -= 15;

  // Section 2
  page.drawText('2. Vertragsparteien', { x: 50, y: yOffset, size: 14, font: boldFont });
  yOffset -= 25;

  page.drawText('Bisheriger Leasingnehmer (Übergeber):', { x: 50, y: yOffset, size: 10, font: boldFont });
  page.drawText('Neuer Leasingnehmer (Übernehmer):', { x: 300, y: yOffset, size: 10, font: boldFont });
  yOffset -= 20;

  page.drawText('Name:', { x: 50, y: yOffset, size: 10, font });
  const uebergeberName = form.createTextField('uebergeberName');
  uebergeberName.addToPage(page, { x: 90, y: yOffset - 5, width: 180, height: 18 });

  page.drawText('Name:', { x: 300, y: yOffset, size: 10, font });
  const uebernehmerName = form.createTextField('uebernehmerName');
  uebernehmerName.addToPage(page, { x: 340, y: yOffset - 5, width: 180, height: 18 });
  yOffset -= 25;

  page.drawText('Anschrift:', { x: 50, y: yOffset, size: 10, font });
  const uebergeberAnschrift = form.createTextField('uebergeberAnschrift');
  uebergeberAnschrift.addToPage(page, { x: 100, y: yOffset - 5, width: 170, height: 18 });

  page.drawText('Anschrift:', { x: 300, y: yOffset, size: 10, font });
  const uebernehmerAnschrift = form.createTextField('uebernehmerAnschrift');
  uebernehmerAnschrift.addToPage(page, { x: 350, y: yOffset - 5, width: 170, height: 18 });
  yOffset -= 40;

  // Section 3
  page.drawText('3. Zustandsprüfung & Zubehör', { x: 50, y: yOffset, size: 14, font: boldFont });
  yOffset -= 25;

  page.drawText('Anzahl übergebener Schlüssel:', { x: 50, y: yOffset, size: 10, font });
  const keys = form.createTextField('schluessel');
  keys.addToPage(page, { x: 250, y: yOffset - 5, width: 100, height: 18 });
  yOffset -= 25;

  page.drawText('Zulassungsbescheinigung Teil I (Fahrzeugschein) übergeben:', { x: 50, y: yOffset, size: 10, font });
  const fzschein = form.createCheckBox('fzschein');
  fzschein.addToPage(page, { x: 350, y: yOffset - 5, width: 18, height: 18 });
  yOffset -= 25;

  page.drawText('Serviceheft / Digitaler Nachweis vorhanden & lückenlos:', { x: 50, y: yOffset, size: 10, font });
  const serviceheft = form.createCheckBox('serviceheft');
  serviceheft.addToPage(page, { x: 350, y: yOffset - 5, width: 18, height: 18 });
  yOffset -= 25;

  page.drawText('Reifen Profiltiefe (Vorne / Hinten):', { x: 50, y: yOffset, size: 10, font });
  const profiltiefe = form.createTextField('profiltiefe');
  profiltiefe.addToPage(page, { x: 250, y: yOffset - 5, width: 200, height: 18 });
  yOffset -= 40;

  // Section 4
  page.drawText('4. Dokumentation bestehender Vorschäden', { x: 50, y: yOffset, size: 14, font: boldFont });
  yOffset -= 25;

  const schaeden = form.createTextField('schaeden');
  schaeden.enableMultiline();
  schaeden.addToPage(page, { x: 50, y: yOffset - 80, width: 450, height: 100 });
  yOffset -= 120;

  // Section 5
  page.drawText('5. Unterschriften', { x: 50, y: yOffset, size: 14, font: boldFont });
  yOffset -= 25;

  page.drawText('Ort, Datum:', { x: 50, y: yOffset, size: 10, font });
  const ortDatumUebergeber = form.createTextField('ortDatumUebergeber');
  ortDatumUebergeber.addToPage(page, { x: 100, y: yOffset - 5, width: 150, height: 18 });

  page.drawText('Ort, Datum:', { x: 300, y: yOffset, size: 10, font });
  const ortDatumUebernehmer = form.createTextField('ortDatumUebernehmer');
  ortDatumUebernehmer.addToPage(page, { x: 350, y: yOffset - 5, width: 150, height: 18 });
  yOffset -= 40;

  page.drawLine({ start: { x: 50, y: yOffset }, end: { x: 250, y: yOffset } });
  page.drawLine({ start: { x: 300, y: yOffset }, end: { x: 500, y: yOffset } });
  yOffset -= 15;

  page.drawText('Unterschrift Übergeber', { x: 50, y: yOffset, size: 10, font });
  page.drawText('Unterschrift Übernehmer', { x: 300, y: yOffset, size: 10, font });

  const pdfBytes = await pdfDoc.save();
  fs.writeFileSync('public/uebergabeprotokoll.pdf', pdfBytes);
}

createFillablePdf().catch(console.error);
