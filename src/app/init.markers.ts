import {isUndefined} from "util";

export class Init{

  load(){
    //localStorage.clear();
    if(localStorage.getItem('markers') === null ){

      var markers = [
        {
          name: 'Company One',
          lat: 42.825588,
          lng: -71.018029,
          draggable: true
        },
        {
          name: 'Company Two',
          lat: 42.868164,
          lng: -70.889071,
          draggable: true
        },
        {
          name: 'Company Three',
          lat: 42.858279,
          lng: -70.930498,
          draggable: true
        }
      ];

      localStorage.setItem('markers', JSON.stringify(markers));
      console.log('Markers saved to local storage');

    }else{
      console.log('Loading markers...');
    }
  }
}
