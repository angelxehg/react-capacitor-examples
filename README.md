# react-capacitor-examples

Ejemplos de uso de Capacitor en un proyecto con React

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
