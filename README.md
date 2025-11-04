# Clean Blog App

Ein Blog-System mit Node.js, Express.js und Nunjucks Templates, basierend auf dem Start Bootstrap Clean Blog Theme.

## 🚀 Features

- **Responsive Design**: Vollständig responsives Layout basierend auf Bootstrap
- **Template Engine**: Nunjucks für flexible und wiederverwendbare Templates
- **Blog Posts**: Dynamische Blog-Posts mit Slug-URLs
- **Formatierung**: Automatische Datum- und Slug-Generierung
- **Modulares Design**: Wiederverwendbare Makros und Template-Struktur
- **TypeScript**: Vollständig typisiert für bessere Entwicklererfahrung
- **Hot Reload**: Automatisches Neuladen während der Entwicklung

## 📋 Voraussetzungen

- Node.js (Version 16 oder höher)
- npm oder yarn

## 🛠️ Installation

1. Repository klonen:

```bash
git clone <repository-url>
cd blog-app
```

2. Dependencies installieren:

```bash
npm install
```

3. Entwicklungsserver starten:

```bash
npm run dev
```

4. Öffne deinen Browser und navigiere zu `http://localhost:3000`

## 📝 Verfügbare Scripts

- `npm run dev` - Startet den Entwicklungsserver mit Hot Reload
- `npm run build` - Kompiliert TypeScript zu JavaScript
- `npm start` - Startet die Produktionsversion
- `npm test` - Führt Tests aus (aktuell nicht implementiert)

## 🏗️ Projektstruktur

```
blog-app/
├── src/
│   ├── app.ts                 # Haupt-Express-Anwendung
│   ├── data/
│   │   └── blogPosts.json     # Blog-Post-Daten
│   ├── templates/             # Nunjucks Templates
│   │   ├── _baseLayout.html   # Basis-Layout
│   │   ├── index.html         # Homepage
│   │   ├── about.html         # Über-uns-Seite
│   │   ├── contact.html       # Kontakt-Seite
│   │   ├── post.html          # Blog-Post-Template
│   │   └── macros/            # Wiederverwendbare Template-Makros
│   └── utils/
│       └── posts.ts           # Hilfsfunktionen für Posts
├── static/
│   ├── assets/                # Statische Assets (Bilder, etc.)
│   ├── css/                   # Stylesheet-Dateien
│   ├── js/                    # Client-seitige JavaScript-Dateien
├── package.json
├── tsconfig.json
├── nodemon.json
└── README.md
```

## 🎨 Template-System

Das Projekt nutzt Nunjucks als Template-Engine mit einem modularen Ansatz:

### Base Layout

- `_baseLayout.html` - Haupt-Layout mit Navigation, Header und Footer
- Dynamische Banner-Bilder und Titel
- Bedingte Renderung für verschiedene Seitentypen

### Makros

- `header.html` - Wiederverwendbares Header-Makro
- `inputField.html` - Formular-Input-Felder

### Template-Variablen

Jedes Template kann folgende Variablen definieren:

- `bannerImage` - Hintergrundbild für den Header
- `pageTitle` - Seitentitel
- `subheading` - Untertitel
- `isPost` - Boolean für Blog-Post-Seiten

## 📊 Blog-Posts

Blog-Posts werden in `src/data/blogPosts.json` gespeichert und automatisch mit zusätzlichen Feldern erweitert:

- **Ursprüngliche Daten**: `title`, `content`, `author`, `createdAt`, `teaser`, `image`
- **Automatisch generiert**: `slug` (URL-freundlich), `formattedDate` (lesbar formatiert)

### Neue Posts hinzufügen

Füge einen neuen Eintrag in `blogPosts.json` hinzu:

```json
{
  "title": "Mein neuer Blog-Post",
  "image": "mein-bild.jpg",
  "author": "Max Mustermann",
  "createdAt": 1699200000,
  "teaser": "Eine kurze Beschreibung des Posts...",
  "content": "<p>Der vollständige Blog-Post Inhalt...</p>"
}
```

## 🌐 Routen

- `/` - Homepage mit Blog-Post-Übersicht
- `/about` - Über-uns-Seite
- `/contact` - Kontakt-Seite mit Formular
- `/post/:slug` - Einzelne Blog-Posts

## 🔧 Entwicklung

### TypeScript

Das Projekt ist vollständig in TypeScript geschrieben. Konfiguration in `tsconfig.json`.

### Hot Reload

Nodemon überwacht Änderungen und startet den Server automatisch neu.

### Code-Formatierung

Prettier ist konfiguriert für konsistente Code-Formatierung, inklusive Jinja/Nunjucks Templates.

## 🚀 Deployment

1. Build erstellen:

```bash
npm run build
```

2. Produktionsserver starten:

```bash
npm start
```

## 🤝 Contributing

1. Fork das Repository
2. Erstelle einen Feature-Branch (`git checkout -b feature/amazing-feature`)
3. Committe deine Änderungen (`git commit -m 'Add amazing feature'`)
4. Push zum Branch (`git push origin feature/amazing-feature`)
5. Öffne einen Pull Request

## 📄 Lizenz

Dieses Projekt steht unter der ISC Lizenz.

## 🎨 Design Credits

Das Design basiert auf dem "Clean Blog" Theme von [Start Bootstrap](https://startbootstrap.com/).
