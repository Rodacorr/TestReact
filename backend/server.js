import dotenv from 'dotenv';
import express from 'express';
import { google } from 'googleapis';
import cors from 'cors';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const config = {
  clientId: 'TU_CLIENT_ID',
  clientSecret: 'TU_CLIENT_SECRET',
  redirectUri: 'TU_REDIRECT_URI',
  refreshToken: 'TU_REFRESH_TOKEN'
};

const oauth2Client = new google.auth.OAuth2(
  config.clientId,
  config.clientSecret,
  config.redirectUri
);

oauth2Client.setCredentials({
  refresh_token: config.refreshToken
});

const calendar = google.calendar({ version: 'v3', auth: oauth2Client });

app.post('/api/create-booking', async (req, res) => {
  try {
    const { date, time, name, email, phone, vehicle, service } = req.body;
    
    // Verificar disponibilidad
    const startTime = new Date(`${date}T${time}`);
    const endTime = new Date(startTime.getTime() + 60 * 60 * 1000); // 1 hora de duración

    const existingEvents = await calendar.events.list({
      calendarId: 'primary',
      timeMin: startTime.toISOString(),
      timeMax: endTime.toISOString(),
      singleEvents: true,
    });

    if (existingEvents.data.items.length > 0) {
      return res.status(400).json({ error: 'Horario no disponible' });
    }

    // Crear evento en Google Calendar
    const event = {
      summary: `Servicio: ${service}`,
      description: `Cliente: ${name}\nTeléfono: ${phone}\nEmail: ${email}\nVehículo: ${vehicle}`,
      start: {
        dateTime: startTime.toISOString(),
        timeZone: 'America/Argentina/Buenos_Aires',
      },
      end: {
        dateTime: endTime.toISOString(),
        timeZone: 'America/Argentina/Buenos_Aires',
      },
    };

    await calendar.events.insert({
      calendarId: 'primary',
      resource: event,
    });

    res.status(200).json({ message: 'Reserva creada exitosamente' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Error al crear la reserva' });
  }
});

app.listen(3001, () => {
  console.log('Server running on port 3001');
}); 