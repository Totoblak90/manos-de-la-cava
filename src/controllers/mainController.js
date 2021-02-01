module.exports = {
    bienvenido: function(req, res, next) {
        res.render('./main/bienvenido');
      },
    nosotros: function(req, res, next) {
        res.render('./main/nosotros');
      },
    nuestrosProgramas: function(req, res, next) {
        res.render('./main/nuestros-programas');
      },
    programas: function(req, res, next) {
      if (req.params.id == 'educacion') {
        res.render('./main/educacion');
      } else if (req.params.id == 'primera-infancia') {
        res.render('./main/primera-infancia');
      } else if (req.params.id == 'gestion-del-tiempo-libre') {
        res.render('./main/gestion-del-tiempo-libre');
      } else if (req.params.id == 'deportes') {
        res.render('./main/deportes');
      } else if (req.params.id == 'acceso-a-la-salud') {
        res.render('./main/acceso-a-la-salud');
      } else if (req.params.id == 'adultos') {
        res.render('./main/adultos');
      } else if (req.params.id == 'intervenciones-integrales') {
        res.render('./main/intervenciones-integrales');
      } else {
        res.send('Not Found')
      }
    },
    resultados: function(req, res, next) {
      res.render('./main/resultados');
    },   
    contacto: function(req, res, next) {
      res.render('./main/contacto');
    }   
}