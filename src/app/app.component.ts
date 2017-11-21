import { Component } from '@angular/core';
import {makeAnimationEvent} from "@angular/animations/browser/src/render/shared";
import {MarkerService} from "./services/marker.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  // should be cmb but its wrong
  // lat: number = 79.884449;
  // lng: number =  7.180244;

  zoom: number = 10;

  lat: number = 42.858217;
  lng: number =  -70.929990;

  markerName:string;
  markerLat:string;
  markerLng:string;
  markerDraggable:string;

  markers: marker[];

  constructor(private  _markerservice: MarkerService){
    this.markers = this._markerservice.getMarkers();
    console.log('List of Markers');
    console.log(this.markers);
  }

  clickedMarker(marker:marker, index:number){
    console.log('Clicked Marker: ' + marker.name + ' at index ' + index);
  }

  mapClicked($event:any){

    var newMarker = {
      name: 'Untitled',
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable:false
    }

    this.markers.push(newMarker);
  }

  markerDragEnd(marker:any, $event:any){
    console.log('dragEnd', marker, $event);

    var updMarker = {
      name: marker.name,
      lat: parseFloat(marker.lat),
      lng: parseInt(marker.lng),
      draggable:false
    }

    var newLat = $event.coords.lat;
    var newLng = $event.coords.lng;

    console.log("Drag: " + newLat + " - " + newLng);

    this._markerservice.updateMarker(updMarker, newLat, newLng);
  }

  addMarker(){
    console.log('addMarker');

    if(this.markerDraggable == 'yes'){
      var isDraggable = true;
    }else{
      var isDraggable = false;
    }

    console.log('Marker Dragg: ' + this.markerDraggable)
    console.log(isDraggable);

    var newMarker = {
      name:this.markerName,
      lat: parseFloat(this.markerLat),
      lng: parseFloat(this.markerLng),
      draggable:isDraggable
    }

    this.markers.push(newMarker);
    this._markerservice.addMarker(newMarker);

    console.log(this.markers);
  }

  removeMarker(m: marker){
    console.log(m);
    console.log('removeMarker');

    for(var i = 0; i < this.markers.length; i++){
      if(m.lat == this.markers[i].lat && m.lng == this.markers[i].lng){
        this.markers.splice(i,1);
      }
    }

    this._markerservice.deleteMarker(m);
  }
}

// 42.825588 -71.018029

// Marker Type
interface marker{
  name?:string;
  lat: number;
  lng: number;
  draggable: boolean;
}
