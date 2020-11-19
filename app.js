// RUTAS //
const express = require("express");
const app = express();

app.listen(3000, () => {
    console.log ("el servidor funciona en localhost:3000")
});

app.get("/", function (res, req) {
    req.sendFile(__dirname + "/views/index.html")
});

app.get("/nosotros", function (res, req) {
    req.sendFile(__dirname + "/views/nosotros.html")
});

app.get("/nuestros-programas", function (res, req) {
    req.sendFile(__dirname + "/views/nuestros-programas.html")
});

app.get("/donar", function (res, req) {
    req.sendFile(__dirname + "/views/donar.html")
});

app.get("/contacto", function (res, req) {
    req.sendFile(__dirname + "/views/contacto.html")
});

app.get("/nuestros-programas/educacion", function (res, req) {
    req.sendFile(__dirname + "/views/educacion.html")
});

app.get("/nuestros-programas/primera-infancia", function (res, req) {
    req.sendFile(__dirname + "/views/primera-infancia.html")
});

app.get("/nuestros-programas/gestion-del-tiempo-libre", function (res, req) {
    req.sendFile(__dirname + "/views/gestion-del-tiempo-libre.html")
});

app.get("/nuestros-programas/deportes", function (res, req) {
    req.sendFile(__dirname + "/views/deportes.html")
});

app.get("/nuestros-programas/acceso-a-la-salud", function (res, req) {
    req.sendFile(__dirname + "/views/acceso-a-la-salud.html")
});

app.get("/nuestros-programas/adultos", function (res, req) {
    req.sendFile(__dirname + "/views/adultos.html")
});

app.get("/nuestros-programas/intervenciones-integrales", function (res, req) {
    req.sendFile(__dirname + "/views/intervenciones-integrales.html")
});

app.get("*", function (req, res) {
    res.sendFile(__dirname + req.url)
});

//END RUTAS//