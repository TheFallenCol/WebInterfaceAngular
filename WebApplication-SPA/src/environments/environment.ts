// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  urlServiceAuth : 'http://localhost:32798/api',  
  urlEventService: 'http://localhost:32795/api/v1/Eventos',
  urlVuelosService: 'http://localhost:32794/api/v1/Vuelos',
  urlHotelService: 'http://localhost:32796/api/v1/Hoteles',
  urlComprasService: 'http://localhost:32799/api/v1/compras'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
