import { Telegraf } from 'telegraf'
import { message } from 'telegraf/filters'
import dotenv from 'dotenv'
import { Board } from './board.js'

dotenv.config()


const bot = new Telegraf(process.env.TOKEN)
const board = new Board()


bot.on(message('text'), async (ctx) => {
  console.log(board.message());
  await ctx.reply(`Hello ${ctx.state.role}`, board.message())
})


bot.launch()