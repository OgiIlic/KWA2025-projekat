/*{
    "movieId": 1,
    "internalId": "HO00014952",
    "corporateId": "A000016169",
    "directorId": 1,
    "title": "Bratstvo lopova 2: Panter",
    "originalTitle": "Den of Thieves: Pantera",
    "description": "U ovom nastavku, legendarni Big Nik (Butler) ponovo kreće u lov – ovog puta u opasni svet evropskog podzemlja. Njegova meta? Doni (Jackson), koji se našao usred smrtonosnih intriga u svetu kradljivaca dijamanata i nemilosrdne bande Pink Panter. Njihov cilj: najveća i najdrskija pljačka u istoriji – dijamantska berza svetskog kalibra.\n\nS adrenalinskim poterama, dvostrukim izdajama i nepredvidivim obrtima, Big Nik mora da se suoči ne samo s kriminalcima, već i sa sopstvenim granicama kako bi zaustavio ovu smrtonosnu operaciju. Spremite se za akciju bez prestanka – akciju u kojoj se svaki potez računa, a ulog je život ili smrt!",
    "shortDescription": "Džerard Batler (Plane, 300) i O’Šea Džekson Jr. (Godzilla: King of the Monsters) vraćaju se u eksplozivnom nastavku akcionog hita iz 2018 „Bratstvo lopova“!",
    "poster": "https://s3proxygw.cineplexx.at/cms-live/asset/_default_upload_bucket/B1_DEN-OF-THIEVES_2_SRB_712px446_1.jpg",
    "startDate": "2025-01-09",
    "shortUrl": "bratstvo-lopova-2-panter",
    "runTime": 130,
    "createdAt": "2025-03-03T21:49:26.000Z",
    "updatedAt": null,
    "director": {
      "directorId": 1,
      "name": "Christian  Gudegast",
      "createdAt": "2025-03-03T21:48:47.000Z"
    }*/

    export interface MovieModel {
        movieId: number
        internalId: string
        corporateId: string
        directorId: number
        title: string
        originalTitle: string
        description: string
        poster: string
        shortDescription: string
        startDate: string
        shortUrl: string
        runTime: number
        createdAt: string
        updatedAt: null | string
        director: {
            directorId: number
            name: string
            createdAt: string
        }
        movieActors: [{
            movieActorId: number
            movieId: number
            actorId: number
            actor: {
                actorId: number
                name: string
                createdAt: string
            } 
        } ]
    }