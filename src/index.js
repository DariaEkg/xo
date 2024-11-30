import { Telegraf } from 'telegraf'
import { message } from 'telegraf/filters'
import dotenv from 'dotenv'
import { Board } from './board.js'

dotenv.config()


const bot = new Telegraf(process.env.TOKEN)
let board = new Board;

bot.on(message('text'), async (ctx) => {
  console.log(board.message());
  await ctx.reply(`Hello ${ctx.state.role}`, board.message())
})

for (let rowIndex = 0; rowIndex < 3; rowIndex++){
  for (let cellIndex = 0; cellIndex < 3; cellIndex++){
    bot.action(`${rowIndex}_${cellIndex}`, async (ctx) => {
      board.step(cellIndex, rowIndex);
      if (board.winner === "x"){
        await ctx.reply(`Вы победили`, board.message())
        //board = this.Board; 
      }
      if (board.winner === "o"){
        await ctx.reply(`Вы проиграли`, board.message())
        //board = this.Board; 
      }
      if (board.winner === "-"){
        await ctx.reply(`Ничья`, board.message())
        //board = this.Board; 
      }
      await ctx.reply(`Ваша доска`, board.message())
    })
  }
}



bot.launch()