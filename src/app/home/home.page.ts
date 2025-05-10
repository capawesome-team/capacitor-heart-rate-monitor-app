import { Component, OnInit, signal } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { BluetoothLowEnergy } from '@capawesome-team/capacitor-bluetooth-low-energy';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage implements OnInit {
  public heartRate = signal<undefined | number>(undefined);

  constructor() {}

  public async ngOnInit() {
    // 1. Initialize the Bluetooth Low Energy plugin
    if (Capacitor.getPlatform() === 'ios') {
      await BluetoothLowEnergy.initialize();
    } else {
      await BluetoothLowEnergy.requestPermissions();
    }
    // 2. Add a listener for the `deviceScanned` event
    await BluetoothLowEnergy.addListener('deviceScanned', async (event) => {
      if (event.name?.startsWith('Polar H9')) {
        // 4. Stop scanning for devices
        void BluetoothLowEnergy.stopScan();
        // 5. Connect to the device
        await BluetoothLowEnergy.connect({
          deviceId: event.id,
        });
        // 6. Discover services
        await BluetoothLowEnergy.discoverServices({
          deviceId: event.id,
        });
        // 7. Add a listener for the `characteristicChanged` event
        await BluetoothLowEnergy.addListener('characteristicChanged', (event) => {
          let byteArray = new Uint8Array(event.value);
          let firstBitValue = byteArray[0] & 0x01;
          if (firstBitValue === 0) {
            this.heartRate.set(byteArray[1]);
          } else {
            this.heartRate.set((byteArray[1] << 8) | byteArray[2]);
          }
        });
        // 8. Start notifications for the Heart Rate Measurement characteristic
        await BluetoothLowEnergy.startCharacteristicNotifications({
          deviceId: event.id,
          serviceId: '0000180D-0000-1000-8000-00805F9B34FB',
          characteristicId: '00002A37-0000-1000-8000-00805F9B34FB',
        });
      }
    });
    // 3. Start scanning for devices
    await BluetoothLowEnergy.startScan();
  }
}
