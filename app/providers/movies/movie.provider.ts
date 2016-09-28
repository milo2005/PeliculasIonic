import {Injectable} from '@angular/core';
import {Movie} from './movie';

@Injectable()
export class MovieService {

    private _data:Movie[];

    public get data():Movie[]{
        if(this._data == null){
            this.loadData()
        }
        return this._data;        
    }

    private loadData(){

        this._data = [];

        let m1:Movie =  new Movie();
        m1.name = "LOS SIETE MAGNÍFICOS";
        m1.genere = "Accion";
        m1.duration = "170 min";
        m1.image = "http://www.diariodevenusville.com/wp-content/uploads/2016/09/LOS-7-MAGNIFICOS-poster-1.jpg";
        m1.releaseDate = new Date("2016-09-23");
        m1.completeDescription = "Los habitantes de Rose Creek, atemorizados bajo el control del industrial Bartholomew Bogue, deciden contratar a siete forajidos para terminar con la amenaza: Sam Chisolm (Denzel Washington), Josh Faraday (Chris Pratt), Goodnight Robicheaux (Ethan Hawke), Jack Home (Vincent D´Onofrio), Billy Rocks (Byung-Hun Lee), Vasquez (Manuel García Rulfo) y Red Harvest (Martin Sensmeier). \n Sin embargo, pronto se darán cuenta estos siete que están luchando por algo más que el simple dinero. \n Antoine Fuqua dirige esta versión moderna del clásico de 1960.";
        m1.shortDescription = "Los habitantes de Rose Creek, atemorizados bajo el control del industrial Bartholomew Bogue, deciden contratar a siete forajidos para terminar con la amenaza. ¿Saldrá todo bien?";
        
        let m2:Movie =  new Movie();
        m2.name = "INFERNO";
        m2.genere = "Thriller";
        m2.duration = "180 min";
        m2.image = "http://www.gamba.fm/webgamba/wp-content/uploads/2016/05/tom-hanks.jpg";
        m2.releaseDate = new Date("2016-10-14");
        m2.completeDescription = "El ganador del Oscar® Ron Howard vuelve para dirigir la última entrega de la multimillonaria serie de bestsellers de Dan Brown (El Código Da Vinci) protagonizada por Robert Langdon, Inferno, en la cual el famoso profesor de simbología (nuevamente interpretado por Tom Hanks) se encuentra tras el rastro de una serie de pistas conectadas con el mismísimo Dante. Cuando Langdon despierta con amnesia en un hospital italiano, hará equipo con Sienna Brooks (Felicity Jones), una doctora de la que él espera le ayude a recuperar sus recuerdos. Juntos recorrerán Europa en una carrera a contrarreloj para desbaratar una letal conspiración global.";
        m2.shortDescription = "La nueva entrega de la serie del experto en simbología Robert Langdon, dirigida por Ron Howard, basada en la novela de Dan Brown, y protagonizada por Tom Hanks.";

        let m3:Movie =  new Movie();
        m3.name = "LA BRUJA DE BLAIR";
        m3.genere = "Terror";
        m3.duration = "180 min";
        m3.image = "http://www.indiewire.com/wp-content/uploads/2016/07/official-bw-poster.jpg";
        m3.releaseDate = new Date("2016-11-04");
        m3.completeDescription = "Han pasado veinte años desde que tres jóvenes desaparecieran sin dejar rastro en el bosque de las Colinas Negras, en Maryland, mientras investigaban la leyenda de la Bruja de Blair. James (James Allen McCune), el hermano de una de ellos, y sus amigos Peter (Brandon Scott), Ashley (Corbin Reid) y Lisa (Callie Hernandez) se adentran en los mismos oscuros bosques para grabar y tratar de descubrir el misterio de su desaparición."
        +"\n Al principio el grupo se muestra esperanzado, sobre todo tras conocer a un par de lugareños, Lane (Wes Robinson) y Talia (Valorie Curry) que se ofrecen como guías a través del bosque. Pero al caer la noche, se ven rodeados por una amenazante presencia."
        +"\n Poco a poco, los jóvenes comienzan a darse cuenta de que la leyenda es demasiado real y mucho más siniestra de lo que podían imaginar.";
        m3.shortDescription = "Secuela de The Blair Witch Project. Unos estudiantes se adentran en los bosques Black Hills de Maryland para intentar descubrir qué pasó en la desaparición de la hermana de James, relacionada con la leyenda de la bruja de Blair.";

        let m4:Movie =  new Movie();
        m4.name = "DOCTOR STRANGE";
        m4.genere = "Fantasia";
        m4.duration = "190 min";
        m4.image = "https://i.kinja-img.com/gawker-media/image/upload/s--DamuJtpU--/c_scale,fl_progressive,q_80,w_800/r1i9ounc8hubvh1ofime.jpg";
        m4.releaseDate = new Date("2016-10-28");
        m4.completeDescription = "El doctor Stephen Strange (Benedict Cumberbatch) es un reputado neurocirujano de Nueva York. Todo lo que tiene de brillante y talentoso, lo tiene también de arrogante y vanidoso. Tras sufrir un terrible accidente de coche, sus manos quedan dañadas, cosa que arruina por completo su carrera. Después de varias intervenciones quirúrgicas de su colega, el doctor Nicodemus West (Michael Stuhlbarg), las manos de Stephen Strange consiguen recuperar su movilidad parcial, pero no la suficiente pericia como para volver a operar."
        +" \n Después de estos dramáticos sucesos, y de tener que abandonar definitivamente su profesión, Stephen Strange decide realizar un viaje de sanación al Himalaya que le cambiará la vida. Alejándose de la medicina tradicional, buscará una nueva cura para su lesión. Será entonces cuando conozca a El Anciano (Tilda Swinton), quien le enseñará que el mundo en el que vive es una realidad entre muchas. Descubrirá así un mundo oculto de dimensiones mágicas, y durante su entrenamiento con el maestro místico se revelarán sus poderes psíquicos, como la telepatía, la proyección astral o el teletransporte, que utilizará para combatir al mal. ";
        m4.shortDescription = "Basada en el personaje de Marvel, Doctor Extraño, creado por Stan Lee y Steve Ditko.";

        this._data.push(m1);
        this._data.push(m2);
        this._data.push(m3);
        this._data.push(m4);

    }


}