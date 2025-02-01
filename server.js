const express = require('express')
const sequelize = require('./src/config/database')
const connectMongo = require('./src/config/databaseMongo')

//Rutas de postgres
const usuarioRoutes = require('./src/infrastructure/routes/postgres/UserRoutes')
const asociacionRoutes = require('./src/infrastructure/routes/postgres/AsociacionRoutes')
const unidadRoutes = require('./src/infrastructure/routes/postgres/UnitRoutes')
const relacionUsuarioUnidades = require('./src/infrastructure/routes/postgres/UsuarioyUnidadRoutes')
const relacionUsuarioAsociacion = require('./src/infrastructure/routes/postgres/UsuariosyAsociacionRoutes')

//Rutas de mongo
const usuarioRoutesM = require('./src/infrastructure/routes/mongo/UserRoutes')
const asociacionRoutesM = require('./src/infrastructure/routes/mongo/AsociacionRoutes')
const unidadRoutesM = require('./src/infrastructure/routes/mongo/UnitRoutes')
const amenitiesRoutes = require('./src/infrastructure/routes/mongo/AmenityRoutes')
const bookingRoutes = require('./src/infrastructure/routes/mongo/BookingRoutes')

//Ruta de flujo
const flowBookingRoute = require('./src/infrastructure/routes/bookingFlowRoute')

const app = express()
app.use(express.json())

app.use('/api/users', usuarioRoutes)
app.use('/api/association', asociacionRoutes)
app.use('/api/unit', unidadRoutes)
app.use('/api', relacionUsuarioUnidades)
app.use('/api', relacionUsuarioAsociacion)

app.use('/api/users', usuarioRoutesM)
app.use('/api/association', asociacionRoutesM)
app.use('/api/unit', unidadRoutesM)
app.use('/api/amenities', amenitiesRoutes)
app.use('/api/booking', bookingRoutes)

app.use('/api', flowBookingRoute)


const PORT = process.env.PORT || 3000

connectMongo();

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
});
