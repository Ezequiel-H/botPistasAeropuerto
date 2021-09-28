const {Telegraf, Markup} = require('telegraf');

const bot = new Telegraf('1952625914:AAHz9zuIRMyb352ThWMmlcUNCBAfDr0yC8Q');

bot.launch();

bot.command('start', (ctx) => {
    ctx.reply("1) “Ahora si. Toca ponerse manos a la obra. ¿Llegarás a tiempo antes que explote la bomba?”")
    ctx.reply("Debes buscar en la página del aeropuerto, ¿más de cuántos empleados trabajan allí?")
})

bot.hears("63000", (ctx) => {
    ctx.reply(`Muy bien! Completaste la primera tarea, estas un paso mas cerca de encontrar donde esta la bomba. Te dejamos tu primera pista
    https://drive.google.com/file/d/1B8vdJbRu_lM6yDOeqKhu8t4onYSS1VKc/view?usp=sharing`)
    ctx.reply("2) ¿Quién es el CEO del aeropuerto?")
})

bot.hears("Carmenlita Scott", (ctx) => {
    ctx.reply(`Muy bien! Completaste la segunda tarea, ya estas muy cerca. Te dejamos tu segunda pista
    https://drive.google.com/file/d/1Q2OkFQ0spzrQlxy3UMIWkihnrkx4l2qV/view?usp=sharing`)
    ctx.reply("3) En qué empresa trabajó la mayor cantidad de años Carmelinta Scott?")
})

bot.hears("Delta Air Lines", (ctx) => {
    ctx.reply(`Muy bien! Completaste las tres tareas! Te dejamos tu ultima pista!
    https://drive.google.com/file/d/1VHWfGW4LbvWkxpDX6CAVYzpJkRxJBL1P/view?usp=sharing`)
    ctx.reply("Selecciona donde pensas que esta la bomba:", Markup
    .keyboard([
      [`❓ MOCHILA`,'❓ BAÑOS'], 
      ['❓ VALIJA', '❓ TACHO'],
      ['❓ FLORERO', '❓ COMPUTADORA'],
      ['❓ CANIL', '❓ BOLSO']
    ])
    .oneTime()
    .resize()
  )   
})

bot.hears('❓ TACHO', (ctx) => {
    ctx.reply("Adivinaste el lugar!")
})

bot.hears(/❓(.+)/, (ctx) => {
    ctx.reply("Lugar incorrecto, volve a intentar!", Markup
    .keyboard([
      [`❓ MOCHILA`,'❓ BAÑOS'], 
      ['❓ VALIJA', '❓ TACHO'],
      ['❓ FLORERO', '❓ COMPUTADORA'],
      ['❓ CANIL', '❓ BOLSO']
    ])
    .oneTime()
    .resize()
  )
})

bot.on("text", (ctx) => {
    ctx.reply("Respuesta incorrecta, volve a intentar!")
})