import React from 'react'
import { MapContainer, TileLayer ,Marker} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import styles from '../styles/Home.module.css'




const Map=()=> {
  return (
  
     <MapContainer className={styles.map} center={[51.505, -0.09]} zoom={50} scrollWheelZoom={true}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />

</MapContainer>

  )
}
export default Map;