import { Injectable } from '@nestjs/common';

/*
export interface iTrack{
    id:number,
    titulo:string,
    duracion:number,
    artista:string
}*/
/*
export const tracks:iTrack [] = [
  {
    "id": 1, 
    "titulo": "Signos",
    "duracion": 120, 
    "artista": "Soda Stereo"
  },
  {
    "id": 2,
    "titulo": "Sin daños a terceros",
    "duracion": 150,
    "artista": "Arjona"  
  },
  {
    "id": 3,
    "titulo": "Canción Anima",
    "duracion": 112,
    "artista": "Soda Stereo"  
  },
  {
    "id": 4,
    "titulo": "Circo Soledad", 
    "duracion": 210, 
    "artista": "Arjona"
  },
  {
    "id": 5,
    "titulo": "Pies Descalsos",
    "duracion": 220,
    "artista": "Shaquira"
  },
  {
    "id": 6,
    "titulo": "Loba",
    "duracion": 180,
    "artista": "Shaquira"
  },
  {
    "id": 7,
    "titulo": "Triller",
    "duracion": 130,
    "artista": "Michael Jackson"
  },
  {
    "id": 8,
    "titulo": "El Salmón",
    "duracion": 150,
    "artista": "Andres Calamaro"
  }
]*/

@Injectable() export class AppService {
  getTracks(): string {
    return "tracks";
  }
}
