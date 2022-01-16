class Museum{
    constructor(){
      this.pieces = [];
    }
    getPieces(){
      return this.pieces
    }
    setPieces( pieces ){
      this.pieces = pieces;
    }
    initializeGallery(){
      let piece1 = new Piece("Images/Museum cars/Ford T.jpg", "Cuando hablamos de los mejores autos clásicos a menudo pensamos en fabricantes americanos o europeos. Nos vienen a la cabeza nombres como Ford Mustang o Shelby Cobra o El famoso Ford  T; a continuación relacionamos los que consideramos son los mejores de todos los tiempos.");
      this.pieces.push( piece1 );

      let piece2 = new Piece("Images/Museum cars/Rolls Royce Phantom.jpg", "En los dorados años 20, Rolls Royce lanzó al mercado un modelo de lujo, el Phantom. La marca todavía existe, pero los coches antiguos, con 40 caballos de fuerza, son únicos en muchos aspectos: el interior de los fastuosos autos era confeccionado por carroceros especialmente contratados, que se atenían a los deseos individuales de cada propietario. Sobre todo en India eso era muy apreciado.");
      this.pieces.push(piece2);

      let piece3 = new Piece("Images/Museum cars/Cadillac Eldorado.jpg", "El Cadillac Eldorado es un automóvil de lujo personal que fue fabricado y comercializado por Cadillac. El Pink Cadillac fue un éxito de Bruce Springsteen en la década de los 80. El protagonista de la canción solo sale con una chica porque posee un Cadillac. Este automóvil de culto era muy apreciado ya en los años 50, pero con el tiempo fue perdiendo adeptos. Los nuevos modelos no tuvieron tanto éxito entre el público en general, pero Cadillac Eldorado fue y sigue siendo un ícono.");
      this.pieces.push(piece3);

      let piece4 = new Piece("Images/Museum cars/Mercedes Benz 300 SL.jpg", "Fue la primera versión del gran turismo SL-Class y el automóvil de producción más rápido de su época. El auto de carrera con puertas de ala de gaviota, es un hito de la historia del automóvil. Con el modelo 300 SL, Mercedes lanzó al mercado el primer automóvil con inyección directa. Muy codiciada es hasta hoy la edición limitada con carrocería hecha completamente de aluminio. Este peso pluma entre los autos de su época fue diseñado pensando sobre todo en la velocidad y el placer de conducir.");
      this.pieces.push(piece4);

      let piece5 = new Piece("Images/Museum cars/alfaromeo.png", "Solo hay algunos grandes automóviles clásicos que uno espera encontrar en todas las mejores colecciones. Creado en la década de 1930 con la ingeniería del legendario Vittorio Jano, eran máquinas rápidas sobrealimentadas, la mayoría adornadas con gloriosa carrocería, generalmente por Carrozzeria Touring.");
      this.pieces.push(piece5);

      let piece6 = new Piece("Images/Museum cars/Jaguar E-Type.jpg", "Un diseño atemporal, amor al detalle y muchos caballos de fuerza en el motor: el Jaguar E-Type sigue fascinando con su encanto británico. De acuerdo con el periódico Daily Telegraph, se cuenta entre los 100 autos más hermosos del mundo. Enzo Ferrari opinó una vez incluso que el E-Type era el auto más hermoso de todos los tiempos.");
      this.pieces.push(piece6);


    }
    
  }