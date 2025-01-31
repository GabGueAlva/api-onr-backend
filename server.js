const express = require('express')
const sequelize = require('./src/config/database')
const usuarioRoutes = require('./src/infrastructure/routes/UserRoutes')
const asociacionRoutes = require('./src/infrastructure/routes/AsociacionRoutes')
const unidadRoutes = require('./src/infrastructure/routes/UnitRoutes')
const relacionUsuarioUnidades = require('./src/infrastructure/routes/UsuarioyUnidadRoutes')
const relacionUsuarioAsociacion = require('./src/infrastructure/routes/UsuariosyAsociacionRoutes')

const app = express()
app.use(express.json())

app.use('/api/users', usuarioRoutes)
app.use('/api/association', asociacionRoutes)
app.use('/api/unit', unidadRoutes)
app.use('/api', relacionUsuarioUnidades)
app.use('/api', relacionUsuarioAsociacion)

const PORT = process.env.PORT || 3000

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
});
