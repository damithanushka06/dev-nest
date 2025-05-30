# DevNest – Developer Productivity Dashboard

DevNest is a modular and modern Angular application designed as a learning playground to master Angular concepts like Standalone APIs, NgRx, Signals, RxJS, Forms, Routing, CDK, Animations, and more — all wrapped into one real-world app.

DevNest demonstrates:

- Modular Architecture using Standalone Components and Lazy Loading
- Task Manager with NgRx and Drag & Drop (CDK)
- Notes App using RxJS and Forms with IndexedDB
- Code Snippet Saver with Reactive Forms and Persistence
- Profile Page with Reactive Forms, Validation, and Theme Toggle
- Built-in Internationalization (i18n)
- Dynamic Light/Dark Theming using SCSS
- Dashboard using Angular Signals for live UI updates
- PWA Support via Angular Service Workers
- Unit Testing for services and core components

Folder Structure:
src/
└── app/
├── core/                 # Interceptors, guards, services, constants
├── shared/               # Reusable components (button, modal, etc.)
├── features/
│   ├── dashboard/        # Signal-based stats and summaries
│   ├── tasks/            # NgRx task management
│   ├── notes/            # RxJS notes editor
│   ├── snippets/         # Code snippet manager
│   └── profile/          # User profile + settings
├── app.routes.ts         # Route definitions
└── main.ts               # Bootstrap entry

Getting Started:

1. Clone the Repo:
   git clone https://github.com/your-username/devnest.git
   cd devnest

2. Install Dependencies:
   npm install

3. Run the App:
   ng serve

Learning Goals by Module:

- dashboard/: Angular Signals, route animations
- tasks/: NgRx store, reducer, selectors, CDK DragDrop
- notes/: RxJS (BehaviorSubject, debounceTime, switchMap)
- snippets/: Reactive forms, CDK drag, copy-to-clipboard
- profile/: Forms, validators, theme persistence, i18n
- core/: Services, interceptors, auth guards, constants
- shared/: Reusable UI (Button, Modal, Card)

Testing:
ng test

Use Angular Testing Library to cover core components and services.

Internationalization (i18n):

DevNest supports internationalization using Angular's built-in i18n tools.

Run:
ng extract-i18n

Translate the generated messages.xlf file and rebuild with:
ng serve --configuration=fr

PWA Support:

Build for production:
ng build --configuration=production

DevNest is installable as a PWA with caching and offline support.

Contributing:

This project is meant to be modular and educational. Fork it and contribute your own modules such as:
- Real-time Chat with WebSocket
- REST API Mocking with msw
- Firebase Authentication
- GitHub API Integration

License:

MIT License
