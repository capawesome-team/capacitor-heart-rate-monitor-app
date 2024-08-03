# capacitor-heart-rate-monitor-app

⚡️ A heart rate monitor app built with [Capacitor](https://capacitorjs.com/). 

## Demo

| Android | iOS |
| --- | --- |
| <img src="https://github.com/user-attachments/assets/c4cf7ddc-7f98-42e1-8334-34a26dfdf457" width="266" /> | <img src="https://github.com/user-attachments/assets/3cfac38f-22ef-4b8e-a439-529079926a4e" width="266" /> |

## Plugins

The following plugins are used in this project:

- [Bluetooth Low Energy](https://capawesome.io/plugins/bluetooth-low-energy/)

## Development

### Prerequisites

- Install [Node.js](https://nodejs.org) which includes [Node Package Manager](https://www.npmjs.com/get-npm)
- Android development: Install [Android Studio](https://developer.android.com/studio)
- iOS development: Install [XCode](https://apps.apple.com/de/app/xcode/id497799835?mt=12)
- You must have access to the Capawesome Sponsorware ([Read more](https://capawesome.io/insiders/))
- You must own a [Polar H9](https://www.polar.com/en/sensors/h9-heart-rate-sensor).

### Getting Started

```bash
# Clone this repository
$ git clone https://github.com/pkglab/capacitor-heart-rate-monitor-app.git

# Change to the root directory of the project
$ cd capacitor-heart-rate-monitor-app

# Install all dependencies
$ npm i

# Run the Android app
$ npx ionic cap sync android
$ npx ionic cap run android

# Run the iOS app
$ npx ionic cap sync ios
$ npx ionic cap run ios
```

This project uses [Ionic](https://ionicframework.com/) as app development platform and the [Ionic CLI](https://ionicframework.com/docs/cli).
