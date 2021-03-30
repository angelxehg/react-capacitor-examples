# react-capacitor-examples

Ejemplos de uso de Capacitor en un proyecto con React

- [Código](https://github.com/angelxehg/react-capacitor-examples)
- [Demo PWA](https://react-capacitor-examples.netlify.app/)
- [Demo Android](https://github.com/angelxehg/react-capacitor-examples/releases)
- [Más proyectos](https://angelxehg.com/projects)

## Instalación

Utilice estos comandos para clonar e instalar la aplicación:

- Clonar el repositorio: `git clone https://github.com/angelxehg/react-capacitor-examples`

- Instalar dependencias: `cd react-capacitor-examples` & `npm install`

- Iniciar servidor de desarrollo: `npm run start`

## Calidad

Utilice estos comandos para mantener la calidad del código

- Unit testing: `npm run test`

- Code linting: `npm run lint`

## Instalación en Dispositivos

Compilar y probar aplicación en dispositivos:

- Compilar assets: `npm run build`

- Añadir plataforma (solo si no se ha añadido los directorios `android` y/o `ios`):

  - Android: `npx cap add android`. Requiere [Android Studio](https://developer.android.com/studio/)

  - iOS: `npx cap add ios`. Requiere [XCode](https://developer.apple.com/xcode/). Requiere [CocoaPods](https://guides.cocoapods.org/using/getting-started.html#installation). Tambien se puede instalar con `brew install cocoapods`.

- Copiar assets y actualizar plugins:

  - Android: `npx cap sync android`

  - iOS: `npx cap sync ios`

- Abrir IDE y compilar (Se abrirá XCode o Android Studio):

  - Android: `npx cap open android`

  - iOS: `npx cap open ios`

## Live Reload en Dispositivos

Utilice estos pasos para probar la aplicación en un dispositivo, con Live Reload activado:

- Iniciar servidor de desarrollo: `npm run start`

- Modificar [capacitor.config.json](./capacitor.config.json), y añadir `server` con la url y puerto del paso anterior, por ejemplo:

```json
"server": {
  "url": "http://192.168.1.68:3000",
  "cleartext": true
},
```

- Asegurarse de permitir el puerto `3000` en el Firewall

- En otra terminal copiar assets y actualizar plugins:

  - Android: `npx cap sync android`

  - iOS: `npx cap sync ios`

- Abrir IDE y compilar (Se abrirá XCode o Android Studio):

  - Android: `npx cap open android`

  - iOS: `npx cap open ios`

NOTA: NO hacer commit de este cambio en [capacitor.config.json](./capacitor.config.json), ni en [android/app/src/main/assets/capacitor.config.json](./android/app/src/main/assets/capacitor.config.json). Para desactivar Live Reload hay que quitar la propiedad `server` y ejecutar los pasos desde `npx cap sync`

## Despliegue en Netlify

Use la siguiente configuración para desplegar en Netlify

- Build command: `react-scripts build`

- Publish directory: `build/`
